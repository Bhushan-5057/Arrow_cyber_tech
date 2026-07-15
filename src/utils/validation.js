/**
 * Contact form validation utilities
 * Shared allowed services keep the UI dropdown and API in sync.
 */

export const ALLOWED_SERVICES = [
  "Penetration Testing (VAPT)",
  "Web Application Security",
  "Mobile Application Security",
  "API Security Testing",
  "Cloud Security Assessment",
  "Network Security Assessment",
  "Source Code Review",
  "Security Consulting",
  "Compliance Assessment",
  "Other",
];

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { min: 5, max: 254 },
  companyName: { min: 2, max: 150 },
  message: { min: 20, max: 5000 },
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Normalize and validate a contact form payload.
 * Accepts either `company` or `companyName` for backward compatibility.
 *
 * @param {Record<string, unknown>} body
 * @returns {{ valid: true, data: object } | { valid: false, message: string, errors: string[] }}
 */
export function validateContactForm(body) {
  if (!body || typeof body !== "object") {
    return {
      valid: false,
      message: "Invalid request body.",
      errors: ["Request body must be a JSON object."],
    };
  }

  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const companyName = normalizeText(body.companyName ?? body.company);
  const service = normalizeText(body.service);
  const message = normalizeText(body.message);
  const errors = [];

  if (!name) {
    errors.push("Name is required.");
  } else if (name.length < LIMITS.name.min) {
    errors.push(`Name must be at least ${LIMITS.name.min} characters.`);
  } else if (name.length > LIMITS.name.max) {
    errors.push(`Name must be at most ${LIMITS.name.max} characters.`);
  }

  if (!email) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("Please enter a valid email address.");
  } else if (email.length > LIMITS.email.max) {
    errors.push(`Email must be at most ${LIMITS.email.max} characters.`);
  }

  if (!companyName) {
    errors.push("Company name is required.");
  } else if (companyName.length < LIMITS.companyName.min) {
    errors.push(`Company name must be at least ${LIMITS.companyName.min} characters.`);
  } else if (companyName.length > LIMITS.companyName.max) {
    errors.push(`Company name must be at most ${LIMITS.companyName.max} characters.`);
  }

  if (!service) {
    errors.push("Service is required.");
  } else if (!ALLOWED_SERVICES.includes(service)) {
    errors.push("Please select a valid service.");
  }

  if (!message) {
    errors.push("Infrastructure specifications / message is required.");
  } else if (message.length < LIMITS.message.min) {
    errors.push(
      `Message must be at least ${LIMITS.message.min} characters.`
    );
  } else if (message.length > LIMITS.message.max) {
    errors.push(
      `Message must be at most ${LIMITS.message.max} characters.`
    );
  }

  if (errors.length > 0) {
    return {
      valid: false,
      message: errors[0],
      errors,
    };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      companyName,
      service,
      message,
    },
  };
}

function normalizeText(value) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ");
}

/**
 * Escape user-provided strings before embedding in HTML emails.
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Convert newlines in long-form text to safe HTML breaks.
 * @param {string} value
 * @returns {string}
 */
export function formatMultilineHtml(value) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br />");
}
