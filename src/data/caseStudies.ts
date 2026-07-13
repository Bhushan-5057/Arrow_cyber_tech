export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  industry: "FinTech" | "Healthcare" | "SaaS" | "E-Commerce";
  challenge: string;
  solution: string;
  results: string[];
  metrics: CaseStudyMetric[];
  timeline: string;
  content: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "fintech-pci-dss-compliance-readiness",
    title: "Strengthening PCI DSS Readiness for a High-Volume Payments Platform",
    clientName: "PaySwift Technologies",
    industry: "FinTech",
    challenge: "PaySwift Technologies was preparing for a major expansion in its merchant settlement platform and needed to demonstrate PCI DSS Compliance readiness before onboarding new payment partners and scaling transaction volume.",
    solution: "We delivered a combined PCI DSS compliance assessment, web application penetration testing, API security testing, and cloud configuration review focused on payment flows, authentication controls, and secure SDLC practices.",
    results: [
      "Resolved critical payment-flow vulnerabilities and validated remediation for PCI DSS readiness.",
      "Reduced the attack surface across web, API, and cloud layers before the next audit cycle.",
      "Improved payment security posture and strengthened evidence for compliance reporting."
    ],
    metrics: [
      { label: "Critical Issues Fixed", value: "11", description: "High-impact vulnerabilities remediated across payment services" },
      { label: "PCI DSS Readiness", value: "94%", description: "Assessment score achieved before formal validation" },
      { label: "Risk Reduction", value: "78%", description: "Reduction in exploitable attack paths identified during testing" }
    ],
    timeline: "8 Weeks",
    content: `
# Strengthening PCI DSS Readiness for a High-Volume Payments Platform

## Executive Summary

PaySwift Technologies operates a high-throughput payment infrastructure that processes sensitive cardholder and settlement data across multiple merchant integrations. As the business expanded into new markets and prepared for additional payment partnerships, leadership recognized the need to strengthen its control environment and evidence base for PCI DSS Compliance. The organization required a practical, high-confidence assessment that would identify weaknesses in its external attack surface while providing a roadmap for remediation aligned with secure software development expectations.

## Business Challenge

The company was preparing for a broader rollout of its merchant settlement capabilities and needed to satisfy strict security expectations from acquiring partners, internal stakeholders, and compliance reviewers. The core challenge was not only to identify technical defects, but to validate whether the platform could support a credible PCI DSS Compliance program under real-world attack conditions. The environment included web applications, API gateways, backend services, and cloud-hosted infrastructure that together formed a complex attack surface.

## Security Assessment

Our engagement focused on validating the effectiveness of payment-processing controls in practice. We examined the platform's authentication mechanisms, session handling, API parameter validation, cloud service configurations, and application-layer logic that could expose cardholder or account data to compromise. The assessment was designed to reflect common threats faced by modern financial technology environments, including misconfigured access paths, weak credential handling, and improper business logic enforcement.

## Methodology

The engagement combined multiple assessment disciplines to provide a complete view of the platform's security posture. We conducted web application penetration testing, API security testing, authentication testing, and cloud security review. The work included targeted review of payment workflows, role-based access patterns, exposure of sensitive endpoints, and implementation of separation-of-duties controls. We also evaluated whether the application architecture followed secure SDLC recommendations and whether the engineering team had adequate safeguards in place for future releases.

## Tools & Techniques

Our testing approach combined manual validation with automated scanning to ensure both depth and coverage. We used industry-recognized tooling for vulnerability discovery, application enumeration, authentication bypass testing, and cloud posture assessment. In parallel, we performed hands-on review of request handling, object-level access controls, and business logic paths that automated tools often miss. This hybrid methodology helped surface issues tied to weak trust boundaries, insecure direct object reference patterns, and legacy implementation behavior that could undermine PCI DSS Compliance objectives.

## Compliance Requirements

The assessment was aligned to key PCI DSS Compliance expectations and embedded controls commonly required for regulated payment environments. We evaluated the platform against requirements tied to secure coding practices, authentication and access management, logging, encryption, and system hardening. The work also considered the organization's need to maintain defensible evidence and remediation tracking as it progressed toward formal validation. In addition, the assessment mapped findings to common OWASP Top 10 concerns, helping the client connect technical issues to broader risk and control objectives.

## Findings

The review uncovered several high-impact weaknesses that could directly influence the security of payment operations. We identified issues in authentication handling, overly permissive API behavior, and insufficient protections around sensitive state changes. Some flows allowed elevated access under weak validation conditions, while others revealed opportunities for abuse through parameter manipulation and inconsistent authorization enforcement. The findings were not limited to obvious coding issues; several were rooted in design decisions that affected the reliability of security controls under production conditions.

## Remediation

Following the assessment, we worked closely with the engineering and platform teams to prioritize remediation based on exploitability and business impact. Critical issues were quickly addressed through changes to authentication workflows, stronger server-side authorization checks, and improvements to API input validation. We also recommended secure SDLC enhancements, including peer review gates, release validation controls, and continuous security testing during development cycles. These measures helped the client reduce the frequency of repeat issues while supporting sustainable compliance progress.

## Business Impact

The engagement gave PaySwift Technologies a clearer and more actionable path to PCI DSS Compliance. By correcting critical issues and validating remediation, the organization improved the resilience of its payment architecture and reduced the likelihood of exploitation through common web and API attack paths. The effort also improved confidence with internal stakeholders and external partners who need visible evidence that payment services are governed by mature security practices.

## Final Results

PaySwift Technologies closed the highest-risk issues uncovered during the assessment and entered its next compliance cycle in a materially stronger position. The engagement supported PCI DSS readiness, strengthened payment security operations, and reduced the overall attack surface across web, API, and cloud components. The combination of technical remediation and process guidance created a stronger foundation for ongoing security assurance and long-term growth in regulated payment markets.
    `
  },
  {
    slug: "saas-soc2-compliance-readiness",
    title: "Accelerating SOC 2 Type II Certification and Audit Readiness for a B2B SaaS Platform",
    clientName: "DataFlow AI",
    industry: "SaaS",
    challenge: "DataFlow AI was preparing for enterprise growth and needed to demonstrate SOC 2 Compliance, stronger governance, and repeatable evidence collection before expanding into larger customer accounts.",
    solution: "We helped the company mature its information security program through policy development, access review controls, vendor risk management, continuous compliance monitoring, and targeted support for SOC 2 Type II readiness.",
    results: [
      "Implemented a scalable evidence collection process for over 90 controls required for SOC 2 Type II.",
      "Strengthened access governance, cloud security posture, and vendor oversight across the business.",
      "Enabled a smoother and faster audit cycle with reduced operational friction and fewer exceptions."
    ],
    metrics: [
      { label: "Policies Created", value: "32", description: "Security and governance policies documented for audit use" },
      { label: "Audit Controls", value: "90+", description: "Evidence-backed controls mapped to SOC 2 requirements" },
      { label: "Time Saved", value: "4 Months", description: "Reduction in compliance preparation time" }
    ],
    timeline: "12 Weeks",
    content: `
# Accelerating SOC 2 Type II Certification and Audit Readiness for a B2B SaaS Platform

## Executive Summary

DataFlow AI provides a cloud-based analytics platform used by enterprise customers that increasingly expect formal assurance around security, availability, and governance. As the company scaled, it became clear that its security operations needed to mature beyond isolated controls and informal practices. The leadership team required a practical path to SOC 2 Compliance that could satisfy customer expectations, improve internal governance, and support near-term growth objectives.

## Business Challenge

The business had begun receiving pressure from procurement teams and enterprise buyers for formal security evidence. However, the organization lacked a fully documented control framework, consistent access review practices, and a sustainable process for collecting audit evidence. The challenge was to build an audit-ready operating model without disrupting engineering velocity or overwhelming internal teams with excessive process overhead.

## Security Assessment

We started by reviewing the company's current control environment across security policies, identity and access management, cloud configurations, vendor relationships, and operational workflows. The assessment highlighted several strengths but also revealed gaps in documentation, evidence retention, and formal oversight. These gaps were particularly important because SOC 2 Type II requires evidence that controls are not only designed correctly but operated effectively over time.

## Methodology

Our approach focused on both governance and enablement. We mapped the client's control environment to the relevant trust services criteria and then designed a roadmap for improving control execution. This included drafting security policies, formalizing access review processes, introducing vendor risk management practices, and configuring monitoring tools for continuous compliance. We also helped the client establish a repeatable evidence collection process so their internal team would be prepared for the audit rather than reacting to last-minute requests.

## Tools & Techniques

The engagement combined policy development, cloud security review, IAM review, and controls automation to create a credible and efficient program. We worked with the client to integrate monitoring and evidence collection across their AWS environment, identity systems, ticketing workflows, and HR processes. This enabled the organization to reduce manual effort while strengthening the consistency of control execution. The resulting framework was designed to support both SOC 2 Compliance and broader enterprise security expectations.

## Compliance Requirements

The engagement prioritized the operational requirements most relevant to SOC 2 Type II and client-facing assurance. We focused on access management, change control, incident response, vendor oversight, monitoring, and evidence retention. The program also supported broader Information Security goals by aligning control design with business operations and compliance expectations. This helped the company create a baseline that was not only audit-ready but also useful for ongoing governance.

## Findings

The review identified that the organization had strong technical talent but lacked formalized processes to consistently demonstrate control effectiveness. Control gaps were found in areas such as privileged access review, policy ownership, vendor due diligence, and evidence maintenance. In addition, access patterns were not always reviewed on a regular cadence, and some cloud configurations required stronger standardization to align with best practices. These issues were significant because they affected the client’s ability to present a mature and defensible compliance posture to auditors and customers.

## Remediation

We helped DataFlow AI implement a structured remediation plan that blended policy, process, and technology. Security policies were rewritten to reflect real operating practices, role-based access reviews were formalized, and vendor risk management workflows were introduced to reduce third-party exposure. We also configured continuous compliance monitoring and implemented standardized processes for evidence gathering, reducing the burden on internal teams while improving consistency. Identity and access management controls were tightened to support least privilege and more reliable oversight.

## Business Impact

The engagement enabled DataFlow AI to move from reactive compliance efforts to a proactive, repeatable operating model. Its ability to respond to customer security questionnaires improved significantly, and the internal governance team gained confidence that the organization could sustain security controls over time. The program also strengthened cloud security and access governance, which helped reduce operational risk beyond the audit itself.

## Final Results

DataFlow AI completed the engagement with a stronger control environment, more mature assurance processes, and a clear route to SOC 2 Type II Certification. The organization was better positioned to support enterprise sales cycles, reduce audit friction, and satisfy growing expectations for SOC 2 Compliance, Security Policies, and continuous compliance monitoring.
    `
  },
  {
    slug: "healthcare-hipaa-compliance-readiness",
    title: "Strengthening HIPAA Compliance and Resilience for a Multi-Facility Health System",
    clientName: "MedStar Healthcare",
    industry: "Healthcare",
    challenge: "MedStar Healthcare needed to improve its HIPAA Compliance posture after a phishing-related incident exposed gaps in training, incident response, and technical safeguards around protected health information.",
    solution: "We delivered a healthcare-focused program combining HIPAA Security Rule assessment, phishing simulation, security awareness training, incident response readiness, and policy remediation for ePHI protection.",
    results: [
      "Improved HIPAA readiness through targeted remediation of administrative and technical safeguards.",
      "Reduced phishing susceptibility and strengthened reporting behaviors across clinical and administrative staff.",
      "Enhanced audit readiness with stronger documentation and operational controls for protected health information."
    ],
    metrics: [
      { label: "Training Completion", value: "98%", description: "Staff completion rate for security awareness training" },
      { label: "Phishing Click Rate", value: "1.8%", description: "Reduction from an initial 24% benchmark" },
      { label: "Risk Findings Closed", value: "37", description: "Issues resolved across HIPAA control gaps and process weaknesses" }
    ],
    timeline: "6 Months",
    content: `
# Strengthening HIPAA Compliance and Resilience for a Multi-Facility Health System

## Executive Summary

MedStar Healthcare operates a distributed network of clinics and hospitals that manage sensitive patient information across multiple facilities and clinical systems. Following a phishing-related incident, the organization recognized that improving security awareness and strengthening its HIPAA Compliance framework were essential to protecting ePHI and maintaining trust with patients, partners, and regulators. The engagement focused on strengthening operational resilience while aligning technical and administrative safeguards with the HIPAA Security Rule.

## Business Challenge

The healthcare provider faced a dual challenge: reducing the risk of recurring phishing and social engineering attacks while improving its ability to demonstrate HIPAA Compliance during internal reviews and external audits. Leadership needed a realistic and practical program that could improve awareness at scale, formalize response procedures, and address the technical and organizational controls needed to protect patient data.

## Security Assessment

We performed a comprehensive HIPAA Risk Assessment across the organization’s technical environment, operational workflows, and workforce practices. The evaluation examined how ePHI was created, stored, transmitted, and accessed across facilities, with special emphasis on the controls that protect data from unauthorized access or disclosure. The assessment also reviewed incident response readiness and the maturity of existing administrative safeguards.

## Methodology

The engagement combined security awareness, technical control review, and operational process improvement. We ran phishing simulations to evaluate user behavior, delivered targeted training sessions for front-line staff and administrators, and reviewed incident response workflows to ensure they could support timely containment. We also assessed the organization's technical safeguards, including access management, endpoint controls, data handling practices, and monitoring coverage.

## Tools & Techniques

Our methodology blended behavioral testing with governance review. We used phishing simulations and reporting analysis to measure susceptibility and identify high-risk user groups, then translated those findings into tailored training modules. We also evaluated key controls relevant to HIPAA Compliance, including access controls, logging, system monitoring, and business continuity practices. The result was a program that addressed both immediate human-factor risks and longer-term compliance obligations.

## Compliance Requirements

The engagement was aligned to the requirements of the HIPAA Security Rule and the expectations of healthcare organizations seeking to demonstrate strong control over ePHI. We focused on administrative safeguards such as workforce training, incident response planning, and security oversight; technical safeguards such as access control, encryption, monitoring, and secure configuration; and documentation that supports audit readiness. These measures strengthened the organization’s ability to evidence effective protection of patient data and demonstrate ongoing improvement.

## Findings

The assessment revealed that although the organization had some controls in place, its employees were still vulnerable to phishing and its response workflows lacked a consistent and measurable operating model. There were also gaps in documentation and evidence retention that could hinder HIPAA Compliance efforts during audit preparation. The findings showed that improving awareness alone would not be sufficient; the organization needed stronger process discipline and better alignment between technical controls and workforce behavior.

## Remediation

We worked with MedStar Healthcare to implement a targeted remediation plan centered on people, process, and technology. Security awareness training was expanded and customized for healthcare workflows, while phishing simulations were used to reinforce learning and track improvement. Incident response playbooks were refined, and the organization strengthened its documentation around policy enforcement and control execution. Technical safeguards were also reviewed to ensure access controls and monitoring practices supported protection of ePHI in line with HIPAA expectations.

## Business Impact

The engagement helped MedStar Healthcare improve both resilience and compliance readiness. Training completion increased substantially, suspicious email reporting became faster and more consistent, and leadership gained a clearer view of existing gaps and improvement priorities. The organization also strengthened its ability to respond to incidents in a coordinated manner, which is essential for maintaining trust and meeting healthcare security obligations.

## Final Results

MedStar Healthcare significantly improved its HIPAA Compliance posture and strengthened its operational readiness for future audits and assessments. The program reduced phishing risk, improved incident response preparedness, and created a more mature framework for protecting ePHI through Administrative Safeguards, Technical Safeguards, and stronger documentation practices.
    `
  },
  {
    slug: "saas-iso27001-certification-readiness",
    title: "Building an ISO 27001 Certified Information Security Program for a SaaS Provider",
    clientName: "Northstar Cloud",
    industry: "SaaS",
    challenge: "Northstar Cloud needed a formalized Information Security Management System to support ISO 27001 Certification, improve governance, and reduce risk across a growing cloud platform.",
    solution: "We guided the company through ISMS implementation, risk assessment, asset management, business continuity planning, supplier risk management, internal audit preparation, and documentation for certification readiness.",
    results: [
      "Created a comprehensive set of security policies and documented controls for ISO 27001 Certification.",
      "Implemented a risk-based control framework covering Annex A controls, asset management, and continuity planning.",
      "Prepared the organization for certification with a clear Statement of Applicability and internal audit program."
    ],
    metrics: [
      { label: "Policies Created", value: "28", description: "Core security and governance policies documented" },
      { label: "Controls Implemented", value: "120+", description: "Measures aligned to ISO 27001 Annex A requirements" },
      { label: "Risks Mitigated", value: "41", description: "Priority risks addressed through treatment plans" }
    ],
    timeline: "10 Weeks",
    content: `
# Building an ISO 27001 Certified Information Security Program for a SaaS Provider

## Executive Summary

Northstar Cloud is a rapidly growing SaaS provider serving customers across regulated and data-sensitive industries. As the business expanded, leadership recognized that a more mature Information Security Management System would be required to support enterprise customers, strengthen internal governance, and prepare for ISO 27001 Certification. Our engagement focused on building a practical, defensible ISMS that could operate reliably in a real-world cloud environment while aligning with ISO 27001 expectations.

## Business Challenge

The organization had a strong engineering foundation but lacked a formalized ISMS that clearly defined ownership, control objectives, and evidence expectations. Stakeholders needed a structured approach to risk assessment, asset management, business continuity, supplier risk, and documentation. The challenge was to build an effective control environment without overwhelming the business or creating unnecessary bureaucracy.

## Security Assessment

We conducted a structured review of the company’s information security landscape, including operational processes, technical controls, critical assets, shared services, and third-party dependencies. The assessment highlighted the need for formalized governance, improved documentation, and more consistent execution of controls tied to business objectives. This work formed the basis for a clear and auditable path to ISO 27001 Certification.

## Methodology

The engagement followed a risk-based approach to ISMS implementation. We helped the client define its scope, inventory critical assets, document the Statement of Applicability, and map controls to relevant Annex A requirements. We also developed a practical internal audit roadmap and supported the organization through certification preparation activities, ensuring the controls were not simply documented but operationally meaningful.

## Tools & Techniques

Our approach combined governance workshops, documentation review, control mapping, and risk assessment workshops. We helped the client establish a clear risk register, assign owners, and document treatment plans for material threats. The work also included business continuity and supplier risk reviews to ensure the program addressed resilience and third-party exposure. This resulted in a program that was both certification-focused and operationally practical.

## Compliance Requirements

The engagement was designed around the core requirements of ISO 27001 Certification and the implementation of a sustainable ISMS. We emphasized the development of policies, control documentation, governance structure, and evidence generation. Special attention was given to Annex A controls, asset management, supplier oversight, and continuity planning, which are essential components of a mature information security program.

## Findings

The assessment showed that Northstar Cloud had strong technical capability but lacked a consistent governance layer that could support formal certification. Specific gaps were identified in documentation, ownership clarity, risk treatment tracking, supplier oversight, and continuity planning. These weaknesses were not only compliance-related; they also increased the risk that security obligations could be misunderstood or inconsistently applied as the company grew.

## Remediation

We supported the client through a structured remediation program that covered policy creation, control implementation, risk and asset management, supplier risk review, and certification preparation. The organization developed an ISMS framework with documented processes, clear responsibilities, and a more mature audit trail. We also helped establish internal governance practices for reviewing control effectiveness and tracking remediation actions over time.

## Business Impact

The engagement provided Northstar Cloud with a stronger foundation for secure growth. By formalizing its information security program, the company improved its ability to manage risk, respond to customer requirements, and demonstrate governance maturity. The work also reduced uncertainty around certification readiness and positioned the business to expand with greater confidence in its control environment.

## Final Results

Northstar Cloud completed the engagement with a stronger, more defensible Information Security Management System and a practical roadmap for ISO 27001 Certification. The organization established a comprehensive framework for documentation, risk management, business continuity, supplier oversight, and internal auditing, creating a durable foundation for ongoing compliance and operational resilience.
    `
  },
  {
    slug: "ecommerce-comprehensive-penetration-testing",
    title: "Delivering a Comprehensive Penetration Testing Program for a Global E-Commerce Platform",
    clientName: "BrightCart Commerce",
    industry: "E-Commerce",
    challenge: "BrightCart Commerce needed to validate the security of its web storefront, API layer, mobile applications, and cloud infrastructure before peak shopping periods and major product launches.",
    solution: "We executed a multi-layered penetration testing engagement covering web application security, API security testing, mobile security testing, cloud review, authentication testing, and business logic testing.",
    results: [
      "Identified and helped remediate a broad set of vulnerabilities spanning authentication, data handling, and application logic.",
      "Eliminated critical and high-risk issues that could have exposed customer accounts or payment workflows.",
      "Strengthened the organization’s resilience through manual testing, automated validation, and remediation verification."
    ],
    metrics: [
      { label: "Vulnerabilities Found", value: "63", description: "Issues discovered across web, API, mobile, and cloud layers" },
      { label: "Critical Issues Fixed", value: "9", description: "High-impact weaknesses remediated before launch" },
      { label: "Risk Reduction", value: "82%", description: "Reduction in exploitable attack surface after remediation" }
    ],
    timeline: "6 Weeks",
    content: `
# Delivering a Comprehensive Penetration Testing Program for a Global E-Commerce Platform

## Executive Summary

BrightCart Commerce operates a global e-commerce platform that supports customer accounts, digital storefronts, mobile app interactions, and third-party integrations. As the business expanded its digital footprint, leadership recognized the need for a rigorous Penetration Testing program that could validate the resilience of its core environment before peak retail periods and major launches. The engagement focused on uncovering real-world weaknesses across web applications, APIs, mobile channels, and cloud services using a combination of manual and automated techniques.

## Business Challenge

The company was preparing for a period of rapid growth and wanted to ensure that customer-facing systems could withstand both opportunistic attacks and targeted abuse. The challenge was to assess the security of multiple interconnected systems without interrupting day-to-day commerce operations. This required a disciplined approach that could identify issues tied to authentication, business logic, and backend service exposure while understanding the pressures of a fast-moving digital retail environment.

## Security Assessment

We performed a comprehensive review of the platform’s security posture across its storefront, commerce APIs, mobile application surfaces, and cloud-hosted services. The assessment looked beyond simple vulnerability scanning to evaluate how the platform handled authentication flows, access control, input validation, session management, and sensitive data exposure. The engagement was specifically designed to challenge assumptions around web application security and API Security Testing in a realistic production context.

## Methodology

The engagement combined manual penetration testing with automated validation to ensure broad coverage and depth of analysis. We tested for common issues aligned with the OWASP Top 10, evaluated authentication behavior, reviewed business logic paths, and validated the secure handling of privileged actions. The methodology also included a review of cloud configuration security and support for remediation verification once issues were addressed. This allowed the client to understand not only what was wrong, but how quickly and effectively it could be corrected.

## Tools & Techniques

Our testing process included both automated scanning and targeted manual validation. We used industry-standard tools to identify common weaknesses while relying on manual testing to inspect flows that are often missed by automation, such as sequence abuse, access control bypasses, and logic-based vulnerabilities. We also reviewed the mobile application surface and the underlying cloud environment to understand how exposure in one layer could affect others. The result was a high-confidence assessment that reflected the realities of modern e-commerce security operations.

## Compliance Requirements

Although the engagement was primarily focused on technical assurance, it also supported broader expectations around secure operations and customer trust. We aligned the assessment with best practices for web application security, API security, cloud security, and secure software release processes. The findings were framed in a way that could support future compliance and governance discussions while helping the business strengthen its security posture ahead of growth.

## Findings

The penetration testing effort uncovered a broad mix of issues across the environment, including authentication weaknesses, access control gaps, and vulnerabilities in business workflows that could be abused under certain conditions. Several findings were tied to insufficient validation in API request handling, while others related to weak trust boundaries between user-facing components and backend services. The review also identified opportunities to improve configuration hygiene and reduce unnecessary exposure in cloud-hosted assets.

## Remediation

Following the assessment, we provided prioritized remediation guidance and supported the client through validation of each fix. The most serious issues were addressed through changes to authentication flows, stronger server-side validation, and improved handling of sensitive actions. We also recommended process improvements to support repeated testing and more reliable release governance. That combination of technical fixes and procedural changes helped the client reduce operational risk and improve confidence in future deployments.

## Business Impact

The engagement gave BrightCart Commerce a clearer understanding of the real risks facing its digital storefront and associated services. The organization was able to remediate critical issues before they could affect customers or compromise trust during peak shopping periods. The assessment also strengthened internal awareness of secure design principles and made future releases more defensible from a security perspective.

## Final Results

BrightCart Commerce completed the engagement with a substantially improved security posture and a stronger basis for ongoing security assurance. The program delivered a measurable reduction in exploitable risk, improved confidence in its web and API environments, and positioned the company for continued growth with better protection against common and targeted attacks.
    `
  }
];
