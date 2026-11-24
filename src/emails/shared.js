
const BRAND = {
  primary: "#1F3F95",
  secondary: "#10274B",
  accent: "#3ABEF9",
  white: "#FFFFFF",
  soft: "#F6FAFF",
  border: "#DCEAF8",
  muted: "#5B6B86",
  text: "#1A2B45",
};

function getSiteConfig() {
  const website = (process.env.NEXT_PUBLIC_WEBSITE || "https://arrowcybertech.com").replace(
    /\/$/,
    ""
  );
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "ArrowCyberTech";

  return {
    website,
    companyName,
    logoUrl:
      "https://res.cloudinary.com/dmpknadzu/image/upload/v1784012887/ACTlogo1_kcpznr.png",
    contactEmail:
      process.env.BUSINESS_EMAIL || "contact@arrowcybertech.com",
    social: {
      linkedin: "https://www.linkedin.com/company/arrow-cyber-technologies/",
      facebook: `${website}`,
      instagram: `${website}`,
      twitter: `${website}`,
    },
    socialIcons: {
      linkedin:
        "https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/linkedin_vqadvj.svg",
      facebook:
        "https://res.cloudinary.com/dmpknadzu/image/upload/v1773122664/facebook_goq3pa.svg",
      instagram:
        "https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/instagram_gmczco.svg",
      twitter:
        "https://res.cloudinary.com/dmpknadzu/image/upload/v1773650814/X_logo_dgghoj.svg",
    },
  };
}

function socialIcon({ href, label, iconUrl }) {
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}"
      style="display:inline-block;width:36px;height:36px;margin:4px 6px;border-radius:999px;background-color:${BRAND.soft};border:1px solid ${BRAND.border};text-align:center;line-height:36px;text-decoration:none;vertical-align:middle;">
      <img src="${iconUrl}" alt="${label}" width="20" height="20"
        style="display:inline-block;width:20px;height:20px;border:0;outline:none;vertical-align:middle;" />
    </a>
  `;
}

function renderSocialIcons(social, socialIcons) {
  return `
    <div style="text-align:center;margin:0 0 20px 0;line-height:0;">
      ${socialIcon({
        href: social.linkedin,
        label: "LinkedIn",
        iconUrl: socialIcons.linkedin,
      })}
      ${socialIcon({
        href: social.facebook,
        label: "Facebook",
        iconUrl: socialIcons.facebook,
      })}
      ${socialIcon({
        href: social.instagram,
        label: "Instagram",
        iconUrl: socialIcons.instagram,
      })}
      ${socialIcon({
        href: social.twitter,
        label: "X",
        iconUrl: socialIcons.twitter,
      })}
    </div>
  `;
}

export function renderEmailHeader() {
  const { website, companyName, logoUrl } = getSiteConfig();

  return `
    <div style="padding:28px 28px 20px 28px;">
      <div style="text-align:left;">
        <a href="${website}" style="text-decoration:none;display:inline-block;max-width:100%;">
          <img src="${logoUrl}" alt="${companyName} logo" width="250"
            style="display:block;width:250px;max-width:100%;height:auto;border:0;outline:none;" />
        </a>
      </div>
      <div style="height:1px;background-color:${BRAND.border};margin-top:20px;width:100%;"></div>
    </div>
  `;
}

export function renderCtaButton(label = "Visit Our Website") {
  const { website } = getSiteConfig();

  return `
    <div style="text-align:center;margin:28px 0 8px 0;">
      <a href="${website}" target="_blank" rel="noopener noreferrer"
        style="display:inline-block;background-color:${BRAND.primary};color:${BRAND.white};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;box-shadow:0 8px 20px rgba(31,63,149,0.22);letter-spacing:0.2px;">
        ${label}
      </a>
    </div>
  `;
}

export function renderInfoCard({ label, value, badge = false, multiline = false }) {
  const valueStyles = multiline
    ? `font-size:14px;line-height:1.7;color:${BRAND.text};word-break:break-word;`
    : `font-size:15px;line-height:1.5;color:${BRAND.text};font-weight:600;word-break:break-word;`;

  const valueHtml = badge
    ? `<span style="display:inline-block;background-color:${BRAND.soft};color:${BRAND.primary};border:1px solid ${BRAND.border};border-radius:999px;padding:6px 14px;font-size:12px;font-weight:700;letter-spacing:0.3px;">${value}</span>`
    : `<div style="${valueStyles}">${value}</div>`;

  return `
    <div style="background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:14px;padding:16px 18px;margin:0 0 12px 0;box-shadow:0 4px 14px rgba(16,39,75,0.04);">
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};margin-bottom:8px;">
        ${label}
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;">
        ${valueHtml}
      </div>
    </div>
  `;
}

export function renderStepCard({ step, title, description }) {
  return `
    <div style="background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:14px;padding:18px;margin:0 0 12px 0;box-shadow:0 4px 14px rgba(16,39,75,0.04);">
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.accent};margin-bottom:8px;">
        ${step}
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:${BRAND.secondary};margin-bottom:6px;">
        ${title}
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${BRAND.muted};">
        ${description}
      </div>
    </div>
  `;
}

export function renderEmailDocument({ previewText, bodyHtml }) {
  const { companyName } = getSiteConfig();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${companyName}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${BRAND.soft};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
    ${previewText || ""}
  </div>
  <div style="width:100%;background-color:${BRAND.soft};padding:32px 12px;">
    <div style="max-width:700px;margin:0 auto;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:18px;overflow:hidden;box-shadow:0 12px 40px rgba(16,39,75,0.08);">
      ${bodyHtml}
    </div>
  </div>
</body>
</html>`;
}

export function renderEmailFooter() {
  const { companyName, social, socialIcons, contactEmail, website } = getSiteConfig();
  const year = new Date().getFullYear();

  return `
    <div style="background-color:${BRAND.soft};border-top:1px solid ${BRAND.border};padding:28px 28px 32px 28px;">
      ${renderSocialIcons(social, socialIcons)}
      <div style="text-align:center;font-family:Arial,Helvetica,sans-serif;">
        <div style="font-size:15px;font-weight:700;color:${BRAND.primary};margin-bottom:4px;">
          ${companyName}
        </div>
        <div style="font-size:12px;color:${BRAND.muted};letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">
          Advanced Cybersecurity Solutions
        </div>
        <div style="font-size:13px;color:${BRAND.muted};line-height:1.6;margin-bottom:14px;">
          Protecting Businesses Through Advanced Cybersecurity
        </div>
        <div style="font-size:12px;color:${BRAND.muted};line-height:1.7;">
          <a href="mailto:${contactEmail}" style="color:${BRAND.primary};text-decoration:none;">${contactEmail}</a>
          &nbsp;·&nbsp;
          <a href="${website}" style="color:${BRAND.primary};text-decoration:none;">${website.replace(/^https?:\/\//, "")}</a>
        </div>
        <div style="font-size:12px;color:${BRAND.muted};margin-top:14px;">
          Copyright © ${year} ${companyName}<br />
          All Rights Reserved.
        </div>
      </div>
    </div>
  `;
}

export { BRAND, getSiteConfig };
