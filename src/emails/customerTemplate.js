import { escapeHtml, formatMultilineHtml } from "@/utils/validation";
import {
  renderEmailDocument,
  renderEmailHeader,
  renderEmailFooter,
  renderInfoCard,
  renderStepCard,
  renderCtaButton,
  BRAND,
  getSiteConfig,
} from "@/emails/shared";

export function generateCustomerEmail({
  name,
  email,
  companyName,
  service,
  message,
}) {
  const { companyName: brandName } = getSiteConfig();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(companyName);
  const safeService = escapeHtml(service);
  const safeMessage = formatMultilineHtml(message);

  const bodyHtml = `
    ${renderEmailHeader()}

    <div style="padding:8px 28px 28px 28px;background-color:${BRAND.white};">
      <div style="background-color:${BRAND.soft};border:1px solid ${BRAND.border};border-radius:16px;padding:24px 22px;margin-bottom:22px;">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;font-weight:800;color:${BRAND.secondary};margin:0 0 10px 0;">
          Thank You For Contacting ${brandName}
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${BRAND.text};margin:0 0 12px 0;">
          Hello ${safeName},
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.75;color:${BRAND.muted};margin:0;">
          Thank you for contacting ${brandName}. We have successfully received your request.
          Our cybersecurity specialists will carefully review your requirements and contact you shortly.
        </div>
      </div>

      <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:1.1px;text-transform:uppercase;color:${BRAND.primary};margin:0 0 12px 0;">
        Request Summary
      </div>

      ${renderInfoCard({ label: "Customer Name", value: safeName })}
      ${renderInfoCard({ label: "Company", value: safeCompany })}
      ${renderInfoCard({ label: "Business Email", value: safeEmail })}
      ${renderInfoCard({ label: "Selected Service", value: safeService, badge: true })}

      <div style="background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:14px;padding:16px 18px;margin:0 0 22px 0;box-shadow:0 4px 14px rgba(16,39,75,0.04);">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};margin-bottom:10px;">
          Infrastructure Specifications
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.75;color:${BRAND.text};background-color:${BRAND.soft};border:1px solid ${BRAND.border};border-radius:12px;padding:16px;">
          ${safeMessage}
        </div>
      </div>

      <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:1.1px;text-transform:uppercase;color:${BRAND.primary};margin:0 0 12px 0;">
        What Happens Next?
      </div>

      ${renderStepCard({
        step: "Step 1",
        title: "Requirement Review",
        description: "Our experts carefully review your request and infrastructure details.",
      })}
      ${renderStepCard({
        step: "Step 2",
        title: "Security Planning",
        description: "We prepare the best assessment strategy tailored to your environment.",
      })}
      ${renderStepCard({
        step: "Step 3",
        title: "Expert Response",
        description: "We will contact you within 24 hours with next steps.",
      })}

      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.75;color:${BRAND.text};margin:22px 0 8px 0;">
        Thank you for trusting ${brandName}.<br />
        We look forward to securing your business.
      </div>

      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${BRAND.muted};margin:0 0 8px 0;">
        Regards,<br />
        <span style="font-weight:700;color:${BRAND.primary};">${brandName}</span><br />
        Advanced Cybersecurity Solutions
      </div>

      ${renderCtaButton("Visit Our Website")}
    </div>

    ${renderEmailFooter()}
  `;

  return renderEmailDocument({
    previewText: `We've received your security assessment request, ${safeName}.`,
    bodyHtml,
  });
}
