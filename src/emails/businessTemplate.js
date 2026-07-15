import { escapeHtml, formatMultilineHtml } from "@/utils/validation";
import {
  renderEmailDocument,
  renderEmailHeader,
  renderEmailFooter,
  renderInfoCard,
  renderCtaButton,
  BRAND,
} from "@/emails/shared";


export function generateBusinessEmail({
  name,
  email,
  companyName,
  service,
  message,
}) {
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
          New Security Assessment Request
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${BRAND.muted};margin:0;">
          A new security assessment request has been submitted through the ArrowCyberTech website.
        </div>
      </div>

      ${renderInfoCard({ label: "Customer Name", value: safeName })}
      ${renderInfoCard({ label: "Business Email", value: safeEmail })}
      ${renderInfoCard({ label: "Company Name", value: safeCompany })}
      ${renderInfoCard({ label: "Selected Service", value: safeService, badge: true })}

      <div style="background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:14px;padding:16px 18px;margin:0 0 12px 0;box-shadow:0 4px 14px rgba(16,39,75,0.04);">
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};margin-bottom:10px;">
          Infrastructure Specifications
        </div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.75;color:${BRAND.text};background-color:${BRAND.soft};border:1px solid ${BRAND.border};border-radius:12px;padding:16px;">
          ${safeMessage}
        </div>
      </div>

      ${renderCtaButton("Visit Our Website")}
    </div>

    ${renderEmailFooter()}
  `;

  return renderEmailDocument({
    previewText: `New Security Assessment Request from ${safeName} at ${safeCompany}`,
    bodyHtml,
  });
}
