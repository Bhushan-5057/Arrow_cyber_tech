import nodemailer from "nodemailer";

/**
 * Validate that required SMTP / branding env vars are present.
 * @returns {{ ok: true } | { ok: false, missing: string[] }}
 */
export function validateMailEnv() {
  const required = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "BUSINESS_EMAIL",
    "NEXT_PUBLIC_WEBSITE",
    "NEXT_PUBLIC_COMPANY_NAME",
  ];

  const missing = required.filter((key) => !String(process.env[key] || "").trim());

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return { ok: true };
}

/**
 * Create a reusable Nodemailer SMTP transporter from environment variables.
 */
export function createTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465;
  const secureEnv = String(process.env.SMTP_SECURE || "").toLowerCase();
  const secure =
    secureEnv === "true" || secureEnv === "1" || (secureEnv === "" && port === 465);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
    tls: {
      minVersion: "TLSv1.2",
      servername: process.env.SMTP_HOST,
    },
  });
}

/**
 * Send a single email using the configured SMTP transporter.
 *
 * @param {object} options
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.html
 * @param {string} [options.replyTo]
 * @param {import("nodemailer").Transporter} [options.transporter]
 */
export async function sendMail({ to, subject, html, replyTo, transporter }) {
  const mailer = transporter || createTransporter();
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "ArrowCyberTech";
  const fromAddress = process.env.SMTP_USER;

  return mailer.sendMail({
    from: `"${companyName}" <${fromAddress}>`,
    to,
    subject,
    html,
    replyTo: replyTo || undefined,
  });
}

/**
 * Send business notification + customer thank-you emails in parallel.
 *
 * @param {object} params
 * @param {string} params.customerEmail
 * @param {string} params.businessHtml
 * @param {string} params.customerHtml
 */
export async function sendContactEmails({
  customerEmail,
  businessHtml,
  customerHtml,
}) {
  const envCheck = validateMailEnv();
  if (!envCheck.ok) {
    const error = new Error(
      `Missing email environment variables: ${envCheck.missing.join(", ")}`
    );
    error.code = "MAIL_ENV_MISSING";
    throw error;
  }

  const transporter = createTransporter();
  const businessEmail = process.env.BUSINESS_EMAIL;
  const replyAddress = businessEmail || "contact@arrowcybertech.com";

  try {
    await transporter.verify();
  } catch (error) {
    error.code = error.code || "SMTP_VERIFY_FAILED";
    throw error;
  }

  // Send business notification first, then customer confirmation.
  // Keeps reply-to on the customer email pointed at contact@.
  await sendMail({
    transporter,
    to: businessEmail,
    subject: "New Security Assessment Request | ArrowCyberTech",
    html: businessHtml,
    replyTo: customerEmail,
  });

  await sendMail({
    transporter,
    to: customerEmail,
    subject: "We've Received Your Security Assessment Request",
    html: customerHtml,
    replyTo: replyAddress,
  });
}
