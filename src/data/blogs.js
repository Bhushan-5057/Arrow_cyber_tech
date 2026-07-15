export const blogsData = [
  {
    slug: "understanding-the-indian-dpdp-act",
    title: "Understanding the Indian DPDP Act: 2026 Strategy Guide",
    description: "India's Digital Personal Data Protection Act (DPDPA) demands deep consent overhauls. Here is what your SaaS needs to implement immediately to prevent compliance penalties.",
    category: "Compliance",
    publishDate: "May 18, 2026",
    readTime: "8 min read",
    tags: ["DPDP", "Compliance", "Data Privacy", "SaaS"],
    author: {
      name: "Rohan Sharma",
      role: "Director of Compliance Services",
      avatar: "RS"
    },
    content: `
# Understanding the Indian DPDP Act: 2026 Strategy Guide

The Digital Personal Data Protection (DPDP) Act represents a significant shift in India's regulatory framework for data privacy. Under this law, any entity that processes digital personal data within India, or handles personal data of Indian citizens globally, is classified as a Data Fiduciary and must implement robust compliance measures.

With penalty caps set up to ₹250 crore for key security gaps, companies must transition from passive policy updates to active technical and operational compliance.

## Core Pillars of DPDP Compliance

To establish compliance, organizations should focus on four key operational pillars:

### 1. Unambiguous, Revocable Consent
Consent can no longer be bundled inside lengthy, generic terms of service agreements. Data fiduciaries must provide a clear notice alongside any data request, explaining exactly what personal data is collected and why, written in plain language. Users must also be provided the option to view their consent status and revoke it as easily as it was granted.

### 2. Appointment of a Data Protection Officer (DPO)
Significant Data Fiduciaries must appoint a DPO based in India. The DPO serves as the point of contact for grievance redressal and regulatory inquiries.

### 3. Data Minimization and Erasure
Data fiduciaries must delete personal data once the specified purpose for its collection has been fulfilled, or when the user revokes consent. This requires setting up automated database cleanup policies.

### 4. Technical Safeguards and Breach Notification
The DPDP Act mandates that fiduciaries implement technical measures to prevent breaches. In the event of a security incident, organizations are required to notify both the Data Protection Board of India and affected users.

---

## Action Plan for SaaS Companies

1. **Conduct a Data Audit**: Map your data systems to identify where user data enters, is stored, and is transferred to third-party APIs.
2. **Implement Consent Managers**: Update your signup and preference screens to support explicit, itemized consent.
3. **Configure Database Deletion Jobs**: Implement automated deletion routines to erase user profiles after account termination.
    `,
    relatedSlugs: ["prepping-for-soc2-audit", "securing-rest-apis-owasp"]
  },
  {
    slug: "prepping-for-soc2-audit",
    title: "Prepping for SOC 2 Type II: What Auditors Look For",
    description: "Avoid common pitfalls in SOC 2 Type II readiness. Learn what administrative policies and cloud access configurations auditors examine.",
    category: "Compliance",
    publishDate: "April 29, 2026",
    readTime: "6 min read",
    tags: ["SOC2", "Audit", "Cloud Security", "IAM"],
    author: {
      name: "Sarah Jenkins",
      role: "Senior Security Auditor",
      avatar: "SJ"
    },
    content: `
# Prepping for SOC 2 Type II: What Auditors Look For

Achieving a SOC 2 Type II report is a key milestone for SaaS startups looking to sell to enterprise customers. Unlike Type I, which evaluates your security controls at a single point in time, Type II audits the operational effectiveness of those controls over a window, typically 3 to 12 months.

Here is a guide to the key evidence areas auditors focus on during their assessments.

## Key Compliance Checkpoints

Auditors generally focus on the following control areas:

### 1. Logical Access Control (IAM)
- **Multi-Factor Authentication (MFA)**: MFA must be configured for all administrative accounts in your cloud environment, source repositories, and communication channels.
- **Access Reviews**: Implement quarterly reviews of user access permissions to ensure compliance with the principle of least privilege.
- **Deprovisioning**: Terminate employee accounts within 24 hours of departure.

### 2. Change Management
- **Pull Request Approvals**: Ensure all code changes are reviewed and approved by a second developer before deployment.
- **Vulnerability Checks**: Integrate automated dependency vulnerability scans into your CI/CD pipelines.

### 3. System Operations and Incident Response
- **Log Collection**: Enable and centralize audit logs from cloud accounts, server hosts, and databases.
- **Incident Rehearsals**: Conduct annual tabletop exercises to test your security incident response plan.
    `,
    relatedSlugs: ["understanding-the-indian-dpdp-act", "ransomware-defense-in-depth"]
  },
  {
    slug: "securing-rest-apis-owasp",
    title: "Securing REST & GraphQL APIs: OWASP Top 10 API Vulnerabilities",
    description: "API endpoints are a primary target for web application attacks. This guide outlines how to mitigate Broken Object Level Authorization (BOLA) and mass assignment flaws.",
    category: "VAPT",
    publishDate: "March 12, 2026",
    readTime: "10 min read",
    tags: ["API Security", "OWASP", "Penetration Testing", "Node.js"],
    author: {
      name: "Marcus Vance",
      role: "Lead Penetration Tester",
      avatar: "MV"
    },
    content: `
# Securing REST & GraphQL APIs: OWASP Top 10 API Vulnerabilities

APIs serve as the connectivity layer for modern web applications, routing data between client frontends, databases, and third-party services. Consequently, they are a primary target for attackers.

Let's look at the top API vulnerabilities and how to address them.

## 1. Broken Object Level Authorization (BOLA / IDOR)
BOLA occurs when an endpoint accepts user-supplied identifiers (such as UUIDs or sequential IDs) to access resource models without validating that the logged-in user owns the requested resource.

### Mitigation:
Implement object-level authorization checks in your controllers:
\`\`\`javascript
const resource = await Database.getResource(req.params.id);
if (resource.userId !== req.user.id) {
  return res.status(403).send("Unauthorized Access");
}
\`\`\`

## 2. Broken Object Property Level Authorization (Mass Assignment)
This vulnerability occurs when endpoints allow users to modify database properties they shouldn't access (such as setting an \`isAdmin: true\` flag) by submitting unexpected JSON parameters.

### Mitigation:
Enforce input validation using transfer schemas or select parameters explicitly:
\`\`\`javascript
const safePayload = {
  username: req.body.username,
  bio: req.body.bio
};
await User.update(req.user.id, safePayload);
\`\`\`
    `,
    relatedSlugs: ["understanding-the-indian-dpdp-act", "prepping-for-soc2-audit"]
  },
  {
    slug: "ransomware-defense-in-depth",
    title: "Ransomware Defense-in-Depth: Infrastructure Hardening",
    description: "Ransomware attacks are increasingly sophisticated. Learn how network segmentation, immutable backups, and endpoint detection help protect operations.",
    category: "SecOps",
    publishDate: "February 04, 2026",
    readTime: "7 min read",
    tags: ["Ransomware", "Network Security", "Backups", "EDR"],
    author: {
      name: "Vikram Sen",
      role: "Head of Security Operations",
      avatar: "VS"
    },
    content: `
# Ransomware Defense-in-Depth: Infrastructure Hardening

Ransomware groups have transitioned from scattershot email campaigns to targeted corporate intrusions, exploiting open remote ports, unpatched VPN appliances, or compromised vendor accounts. Once inside, they move laterally to locate and delete database backups before encrypting primary systems.

To protect against these threats, organizations should implement a defense-in-depth strategy.

## Key Hardening Measures

### 1. Network Segmentation
Avoid using a flat internal network design. Group systems into separate VLANs and restrict communication between them using firewall rules. This limits an attacker's ability to move laterally if a single node is compromised.

### 2. Immutable Backups
Maintain offsite, read-only backups that cannot be modified or deleted, even with administrator credentials. Test backup restoration procedures regularly.

### 3. Endpoint Detection and Response (EDR)
Deploy EDR tools across all company servers and workstations to monitor processes and detect malicious activities in real time.
    `,
    relatedSlugs: ["prepping-for-soc2-audit", "securing-rest-apis-owasp"]
  }
];
