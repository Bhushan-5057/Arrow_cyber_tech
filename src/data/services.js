export const servicesData = [
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    description: "Expose critical vulnerabilities in your applications, systems, and networks before malicious hackers do. Our ethical hacking team simulates real-world cyberattacks.",
    icon: "ShieldAlert",
    subServices: [
      {
        slug: "web-app-penetration-testing",
        title: "Web App Penetration Testing",
        subtitle: "Advanced ethical hacking to secure complex web applications and API ecosystems.",
        description: "Modern web applications handle sensitive user data, financial transactions, and proprietary logic. Our certified penetration testers execute aggressive, targeted simulations to detect logic flaws, injection attacks, cross-site script risks, and API authorization bypasses, aligning with OWASP Top 10 standards.",
        icon: "Globe",
        benefits: [
          "Identify and patch logical bypass flaws in APIs",
          "Ensure alignment with OWASP Top 10 guidelines",
          "Prevent costly security breaches and intellectual property theft",
          "Provide proof of compliance to enterprise clients and board members"
        ],
        useCases: [
          "Pre-launch audits for software releases",
          "Quarterly security verification of client portals",
          "Third-party integrations vetting"
        ],
        features: [
          { title: "API Endpoint Vetting", desc: "Rigorous testing of REST/GraphQL schemas for authorization and mass-assignment flaws.", icon: "Database" },
          { title: "Authentication Vetting", desc: "Verifying session management, MFA workflows, token lifecycles, and brute-force protections.", icon: "Lock" },
          { title: "Business Logic Mapping", desc: "Manual discovery of workflow bypass techniques that automated scanners miss.", icon: "GitBranch" },
          { title: "SQL & Command Injection", desc: "Validating input sanitation layers across all public and authenticated boundaries.", icon: "Terminal" }
        ],
        process: [
          { step: "01", title: "Information Gathering", desc: "Scoping domain structures, tech stacks, and compiling threat profiles." },
          { step: "02", title: "Vulnerability Scanning", desc: "Deploying automated suites to detect known signature flaws and path leaks." },
          { step: "03", title: "Manual Exploitation", desc: "Attempting to bypass authentication mechanisms and escalate user privileges." },
          { step: "04", title: "Reporting & Debrief", desc: "Delivering detailed proof-of-concept evidence and prioritized fix instructions." },
          { step: "05", title: "Patch Verification", desc: "Re-testing vulnerabilities after implementation of remediation patches." }
        ],
        industries: ["Banking", "SaaS", "FinTech", "Healthcare", "Government"],
        tools: ["Burp Suite Professional", "OWASP ZAP", "Postman", "Sqlmap", "Nmap", "Dirbuster"],
        faqs: [
          { q: "How long does a web application penetration test take?", a: "Typically, a standard engagement spans between 5 to 12 business days depending on the size of the application, active API endpoints, and user roles." },
          { q: "Do you perform tests on production systems?", a: "We prefer testing in staging environments to minimize operational disruption. If testing must occur in production, we coordinate closely and perform executions during low-traffic windows." }
        ]
      },
      {
        slug: "mobile-app-penetration-testing",
        title: "Mobile App Penetration Testing",
        subtitle: "Comprehensive binary analysis and local storage assessment for iOS & Android apps.",
        description: "Mobile applications carry unique risks ranging from local database leakage and insecure IPC communication to reverse-engineering of intellectual property. We disassemble iOS and Android packages to locate hardcoded secrets, assess local cryptographic implementations, and trace transmission traffic.",
        icon: "Smartphone",
        benefits: [
          "Shield customer credentials stored locally on user devices",
          "Ensure secure network communication channels via certificate pinning",
          "Detect reverse engineering vulnerabilities before binary release",
          "Verify compliance with OWASP MASVS requirements"
        ],
        useCases: [
          "App Store and Google Play launch reviews",
          "Vulnerability assessments for mobile banking services",
          "IoT companion app vulnerability identification"
        ],
        features: [
          { title: "Static Binary Analysis", desc: "Decompiling app packages (IPA/APK) to search for secrets, configurations, and memory exploits.", icon: "FileCode" },
          { title: "Dynamic Runtime Manipulation", desc: "Utilizing runtime hooking instruments like Frida to bypass local authentication, root checks, and jailbreak detection.", icon: "Cpu" },
          { title: "Secure Local Storage Check", desc: "Inspecting iOS Keychain, Android Keystore, and local SQLite data files for plaintext leakage.", icon: "HardDrive" },
          { title: "Network Communication Vetting", desc: "Intercepting transit data payloads and validating TLS, certificate validation, and pinning.", icon: "Wifi" }
        ],
        process: [
          { step: "01", title: "Target Preparation", desc: "Acquiring debug and production builds of Android APKs and iOS IPAs." },
          { step: "02", title: "Reverse Engineering", desc: "Decompiling codebase, extracting assets, and assessing obfuscation quality." },
          { step: "03", title: "Runtime Testing", desc: "Hooking processes during user workflows to mock variables and alter runtime behavior." },
          { step: "04", title: "Reporting & Mitigation", desc: "Furnishing mitigation guides, cryptographic patches, and build recommendations." }
        ],
        industries: ["FinTech", "SaaS", "Healthcare", "Education"],
        tools: ["Frida", "MobSF", "JADX", "Ghidra", "Burp Suite", "Objection"],
        faqs: [
          { q: "What is the difference between static and dynamic analysis?", a: "Static analysis evaluates the decompiled binary source structure without executing the app, whereas dynamic analysis analyzes the app in a running state, intercepting API calls and manipulating memory." },
          { q: "Why is root/jailbreak detection important?", a: "If an app runs on a compromised device, attackers can spy on memory, bypass encryption, and leak local session credentials. We test if your app safely terminates upon detecting compromised kernels." }
        ]
      },
      {
        slug: "network-assessment",
        title: "Network Assessment",
        subtitle: "Internal and external infrastructure assessment to locate open entryways and configuration flaws.",
        description: "Your perimeter and internal subnets are continuous targets. Our network penetration testing probes internet-facing gateways, firewalls, DNS nodes, and internal active directory structures to eliminate critical access points and configuration errors.",
        icon: "Network",
        benefits: [
          "Prevent external actors from gaining foothold access to internal subnets",
          "Locate unpatched operating system assets before exploit modules emerge",
          "Strengthen Active Directory configuration against lateral movement",
          "Satisfy cyber insurance and PCI-DSS network penetration testing parameters"
        ],
        useCases: [
          "Annual external edge vulnerability validation",
          "Internal Active Directory breach simulation",
          "M&A network integration threat scans"
        ],
        features: [
          { title: "External Boundary Auditing", desc: "Discovering active services, routing policies, and firewall bypass points on public IP ranges.", icon: "Shield" },
          { title: "Internal Lateral Movement Simulation", desc: "Simulating a rogue insider or compromised node to evaluate Domain Admin escalation pathways.", icon: "Route" },
          { title: "Wireless Protocol Verification", desc: "Analyzing corporate WPA3 enterprise encryption, rogue access points, and guest network leakage.", icon: "Radio" },
          { title: "OS and Patch Review", desc: "Mapping system patch levels to identify target exploits like EternalBlue, ZeroLogon, etc.", icon: "Layers" }
        ],
        process: [
          { step: "01", title: "Asset Discovery", desc: "Mapping active hosts, IP subnets, domains, and port services." },
          { step: "02", title: "Vulnerability Scan", desc: "Deploying automated network scanner tools (Nessus/OpenVAS) to index structural CVEs." },
          { step: "03", title: "Exploit Execution", desc: "Attempting payload delivery on out-of-date assets to establish command controls." },
          { step: "04", title: "Remediation Routing", desc: "Drafting patch orders, routing rules updates, and Active Directory system hardening guides." }
        ],
        industries: ["Government", "Banking", "Healthcare", "Education", "SaaS"],
        tools: ["Nessus Professional", "Metasploit Pro", "Nmap", "Wireshark", "Responder", "BloodHound"],
        faqs: [
          { q: "What is internal lateral movement testing?", a: "It simulates what an attacker could achieve once inside your firewall. We test how easily a low-privilege network port can escalate to corporate domain controllers." }
        ]
      }
    ]
  },
  {
    slug: "grc",
    title: "Governance, Risk & Compliance",
    description: "Align your IT operations with international information security frameworks. We assist in auditing, preparing, and attaining certification milestones.",
    icon: "ClipboardCheck",
    subServices: [
      {
        slug: "soc2-type-i-and-ii",
        title: "SOC2 Type I & II Readiness & Audit",
        subtitle: "Establish trust for enterprise clients by verifying security, availability, and confidentiality.",
        description: "A SOC 2 report verifies that your organization maintains robust data security controls. We prepare SaaS companies for SOC 2 Type I (design assessment) and Type II (operating effectiveness over time) audits, providing policies, continuous compliance tooling, and auditor liaison services.",
        icon: "FileCheck",
        benefits: [
          "Unblock enterprise sales pipelines requiring SOC 2 reports",
          "Establish systematic, automated operational policy controls",
          "Identify process gaps before the official audit review",
          "Minimize the work of gathering manual compliance evidence"
        ],
        useCases: [
          "B2B SaaS companies targeting enterprise customers",
          "Cloud-hosted infrastructure teams",
          "Healthcare and financial technology systems hosting customer records"
        ],
        features: [
          { title: "Control Mapping", desc: "Defining administrative policies and matching technical tools to TSC framework points.", icon: "Compass" },
          { title: "Gap Assessment", desc: "Deep dive of cloud access configs, HR controls, and change logs to flag missing compliance actions.", icon: "AlertTriangle" },
          { title: "Continuous Monitoring Setup", desc: "Setting up compliance monitoring tools to track infrastructure state and alert on drift.", icon: "Activity" }
        ],
        process: [
          { step: "01", title: "Scoping & Discovery", desc: "Pinpointing trust service criteria (Security, Confidentiality, Availability) to audit." },
          { step: "02", title: "Remediation Cycle", desc: "Drafting lacking policies, turning on MFA, setting up logging, and running risk evaluations." },
          { step: "03", title: "Pre-Audit Check", desc: "Performing an internal dry-run audit to ensure all evidence files are ready." },
          { step: "04", title: "Auditor Liaison", desc: "Coordinating with independent CPA firms to execute final audits and generate reports." }
        ],
        industries: ["SaaS", "FinTech", "Healthcare", "Banking"],
        tools: ["Vanta", "Drata", "AWS IAM Analyzer", "Jira", "Confluence"],
        faqs: [
          { q: "What is the difference between SOC 2 Type I and Type II?", a: "Type I assesses design of controls at a specific point in time. Type II audits the operational effectiveness of those controls over a window, typically 3 to 12 months." }
        ]
      },
      {
        slug: "iso-27001-2022",
        title: "ISO 27001:2022 Implementation",
        subtitle: "Achieve the gold standard for global Information Security Management Systems (ISMS).",
        description: "ISO 27001:2022 is the premier international standard for information security management. We guide your team from initial scope definitions and Statement of Applicability (SoA) construction to final ISO registrar audit support.",
        icon: "Award",
        benefits: [
          "Attain international credibility for information protection practices",
          "Develop a structured Information Security Management System (ISMS)",
          "Identify cyber risk priorities through quantitative assessments",
          "Optimize resource allocations for security spend"
        ],
        useCases: [
          "Global organizations needing structured security setups",
          "SaaS companies targeting European and Asian enterprise markets",
          "Outsourced datacenters and operations hubs"
        ],
        features: [
          { title: "ISMS Boundary Scoping", desc: "Scoping business units, applications, and assets to define your ISMS boundary.", icon: "Box" },
          { title: "Risk Assessment Plan", desc: "Conducting asset risk profiling, assessing likelihood of incidents, and identifying controls.", icon: "ShieldAlert" },
          { title: "Statement of Applicability (SoA)", desc: "Formalizing which of the Annex A controls apply to your environment.", icon: "FileText" }
        ],
        process: [
          { step: "01", title: "Gap Analysis", desc: "Comparing existing security controls against the 93 ISO Annex A points." },
          { step: "02", title: "Risk Mapping", desc: "Documenting risk assets and matching them to concrete treatments." },
          { step: "03", title: "ISMS Implementation", desc: "Rolling out security trainings, logging setups, vendor evaluations, and audit records." },
          { step: "04", title: "Stage 1 & 2 Audits", desc: "Preparing document folders and hosting external registrars to achieve certification." }
        ],
        industries: ["FinTech", "SaaS", "Banking", "Government"],
        tools: ["ISO Toolkit", "Risk Management Templates", "MFA Integrations", "MDM Software"],
        faqs: [
          { q: "How long does ISO 27001 implementation take?", a: "Usually 6 to 9 months depending on company size and the maturity of existing security processes." }
        ]
      },
      {
        slug: "gdpr",
        title: "GDPR Compliance Audits",
        subtitle: "Safeguard personal data under European Union privacy regulations.",
        description: "Non-compliance with the General Data Protection Regulation (GDPR) can result in fines up to €20M or 4% of global turnover. We assess processing systems, write privacy notice templates, and structure secure processes.",
        icon: "Fingerprint",
        benefits: [
          "Avoid expensive administrative fines from EU regulators",
          "Strengthen customer trust through transparent privacy policies",
          "Structure data processing systems around privacy-by-design concepts",
          "Quickly resolve data subject access requests (DSARs)"
        ],
        useCases: [
          "E-commerce platforms serving European users",
          "SaaS companies storing user profiles of EU citizens",
          "Marketing databases containing personal data"
        ],
        features: [
          { title: "Data Flow Mapping", desc: "Creating flowcharts showing where personal data enters, is stored, and leaves your platform.", icon: "Map" },
          { title: "DPIA Drafting", desc: "Performing Data Protection Impact Assessments for high-risk processes.", icon: "FileQuestion" },
          { title: "DSAR Setup", desc: "Creating standard workflows to execute user requests for data deletion or access within the 30-day window.", icon: "Trash2" }
        ],
        process: [
          { step: "01", title: "Data Discovery", desc: "Cataloging personal data repositories, data types, and consent databases." },
          { step: "02", title: "Policy Alignment", desc: "Updating user privacy notices, consent boxes, and data processing agreements (DPAs)." },
          { step: "03", title: "Technical Verification", desc: "Reviewing encryption policies, access keys, and storage lifetimes." }
        ],
        industries: ["SaaS", "FinTech", "Education", "Healthcare"],
        tools: ["OneTrust", "WireWheel", "DataGrail"],
        faqs: [
          { q: "Who needs GDPR compliance?", a: "Any company that processes the personal data of individuals located in the EU, regardless of where the company is headquartered." }
        ]
      },
      {
        slug: "dpdp",
        title: "DPDP Readiness Audits",
        subtitle: "Navigate compliance with India's Digital Personal Data Protection Act.",
        description: "The Digital Personal Data Protection (DPDP) Act outlines strict measures for processing personal data in India. We assist organizations in restructuring consent processes, appointing Data Protection Officers (DPO), and ensuring notice forms meet statutory standards.",
        icon: "ShieldCheck",
        benefits: [
          "Comply with Indian regulatory standards",
          "Implement transparent consent workflows for citizens",
          "Establish robust breach reporting mechanisms to protect against heavy fines"
        ],
        useCases: ["Tech startups in India", "E-commerce platforms", "Telehealth applications"],
        features: [
          { title: "Consent Architecture", desc: "Revamping sign-up interfaces to request unambiguous, revocable data consent.", icon: "UserCheck" },
          { title: "DPO Setup", desc: "Supporting the appointment and onboarding of local Data Protection Officers.", icon: "Briefcase" }
        ],
        process: [
          { step: "01", title: "Gap Assessment", desc: "Auditing user database tables and consent logs for compliance." },
          { step: "02", title: "System Overhaul", desc: "Writing new consent flows and integrating data-deletion mechanisms." }
        ],
        industries: ["FinTech", "SaaS", "Banking", "Healthcare", "Education"],
        tools: ["Custom Consent Managers", "Database Scrubbing Scripts"],
        faqs: [
          { q: "What are the penalties under the DPDP Act?", a: "Violations can result in penalties up to ₹250 crore for failing to implement security safeguards to prevent data breaches." }
        ]
      },
      {
        slug: "hipaa",
        title: "HIPAA Security Audits",
        subtitle: "Protect electronic Protected Health Information (ePHI) from disclosure.",
        description: "HIPAA compliance is required for US healthcare providers and business associates. We perform comprehensive security risk assessments across physical, technical, and administrative controls to protect patient records.",
        icon: "Activity",
        benefits: [
          "Mitigate regulatory penalties under HHS criteria",
          "Protect medical records and patient trust",
          "Verify cloud partner configs for compliance"
        ],
        useCases: ["Telemedicine app developers", "Medical billing bureaus", "Clinical data analytics startups"],
        features: [
          { title: "ePHI Data Path Verification", desc: "Validating end-to-end encryption for health records in databases, filesystems, and APIs.", icon: "Heart" },
          { title: "Business Associate Agreements (BAA)", desc: "Drafting and verifying BAAs for downstream cloud providers.", icon: "FileSignature" }
        ],
        process: [
          { step: "01", title: "Controls Review", desc: "Auditing administrative policies and server setups against Security Rule guidelines." },
          { step: "02", title: "Risk Remediation", desc: "Turning on database encryption, configuring activity logging, and setting up disaster recovery backups." }
        ],
        industries: ["Healthcare", "SaaS", "Government"],
        tools: ["AWS KMS", "Audit Logs Monitoring Tools", "HIPAA SRA Tool"],
        faqs: [
          { q: "What is an HHS HIPAA audit?", a: "The Department of Health and Human Services audits covered entities and business associates to check compliance with Privacy, Security, and Breach Notification Rules." }
        ]
      },
      {
        slug: "it-control-audit",
        title: "IT Control Audit",
        subtitle: "Verify internal controls to safeguard your digital resources.",
        description: "We review your IT general controls (ITGC) encompassing change management, system operations, logical access controls, and data backup policies.",
        icon: "Sliders",
        benefits: [
          "Validate security procedures for internal stakeholders",
          "Establish change control records for system releases",
          "Identify access privileges that do not match team roles"
        ],
        useCases: ["Companies preparing for IPOs", "Internal corporate compliance reviews"],
        features: [
          { title: "Identity Access Management Review", desc: "Checking user access rights to remove stale permissions and verify role configurations.", icon: "Users" }
        ],
        process: [
          { step: "01", title: "Evidence Gathering", desc: "Exporting access lists, database backup logs, and version control change records." },
          { step: "02", title: "Control Evaluation", desc: "Identifying weaknesses where access policies do not align with operational guidelines." }
        ],
        industries: ["Banking", "SaaS", "Government", "FinTech"],
        tools: ["IAM Analyzers", "Active Directory Audit Tools"],
        faqs: [
          { q: "What are ITGCs?", a: "IT General Controls are the framework governing security, system modifications, and operations across your enterprise IT environment." }
        ]
      },
      {
        slug: "third-party-audit-services",
        title: "Third-Party Audit Services",
        subtitle: "Audit software vendors to eliminate third-party supply chain risks.",
        description: "Your vendors could expose your business to cyber risks. We evaluate the security posture of third-party platforms, APIs, and vendors to secure your software supply chain.",
        icon: "Network",
        benefits: [
          "Prevent data breaches originating from third-party vendor integrations",
          "Establish standardized security questionnaires for procurement",
          "Mitigate software supply chain vulnerabilities"
        ],
        useCases: ["Enterprise vendor procurement reviews", "Vetting open-source dependency packages"],
        features: [
          { title: "Vendor Risk Scoring", desc: "Reviewing vendor policies, SOC 2 reports, and external vulnerability data to score cyber risks.", icon: "BarChart" }
        ],
        process: [
          { step: "01", title: "Information Gathering", desc: "Requesting compliance files, vulnerability scans, and hosting details from vendors." },
          { step: "02", title: "Security Assessment", desc: "Validating vendor data management policies and integration security configurations." }
        ],
        industries: ["Banking", "Healthcare", "SaaS", "FinTech"],
        tools: ["SecurityScorecard", "Whistic", "Google Sheets Compliance Templates"],
        faqs: [
          { q: "Why is vendor auditing important?", a: "Many enterprise security breaches occur when attackers compromise a vendor network and use it as a backdoor into target systems." }
        ]
      },
      {
        slug: "cert-in-audit",
        title: "CERT-In Audit Services",
        subtitle: "Ensure compliance with Indian cyber mandates through official audits.",
        description: "We prepare and audit IT systems for compliance with CERT-In (Indian Computer Emergency Response Team) mandates, assessing networks, configurations, and incident response readiness.",
        icon: "ShieldAlert",
        benefits: [
          "Satisfy cybersecurity reporting mandates in India",
          "Identify critical system flaws before regulatory reviews",
          "Receive signed audit certificates for banking license approvals"
        ],
        useCases: ["Indian payment aggregators and FinTech platforms", "Government contractors and suppliers"],
        features: [
          { title: "Mandate Alignment", desc: "Auditing systems for compliance with CERT-In directions, including 6-hour incident report timelines.", icon: "Clock" }
        ],
        process: [
          { step: "01", title: "Audit Verification", desc: "Performing vulnerability assessments and reviewing logging structures." },
          { step: "02", title: "Reporting & Submission", desc: "Drafting CERT-In reports and assisting with mitigation patches." }
        ],
        industries: ["Banking", "FinTech", "Government"],
        tools: ["Nessus", "Burp Suite", "Audit Templates"],
        faqs: [
          { q: "Who needs a CERT-In security audit?", a: "Many Indian financial organizations, payment gateways, and utilities are required to undergo audits by a CERT-In empanelled auditor." }
        ]
      }
    ]
  },
  {
    slug: "cybersecurity-operations",
    title: "Cybersecurity Operations",
    description: "Identify configuration flaws, backdoors, and logic bugs through deep reviews of source code, firewalls, and system environments.",
    icon: "Cpu",
    subServices: [
      {
        slug: "source-code-review",
        title: "Secure Source Code Review",
        subtitle: "Detailed inspection of code syntax to locate application security weaknesses.",
        description: "Static and dynamic analysis of your code repository. Our certified reviewers read your backend, frontend, and smart contract files to locate SQL injections, memory corruption issues, authentication bugs, and hardcoded secrets.",
        icon: "Code",
        benefits: [
          "Detect design flaws that manual application testing can miss",
          "Remove hardcoded API keys and configuration secrets",
          "Educate developers on secure coding syntax",
          "Ensure secure code pipelines before container builds"
        ],
        useCases: [
          "Pre-commit security reviews for critical repos",
          "Vetting third-party components",
          "Smart contract security reviews"
        ],
        features: [
          { title: "Static Code Analysis (SAST)", desc: "Deploying automated engines to scan codebases for signature security vulnerabilities.", icon: "Search" },
          { title: "Manual Line-by-Line Code Review", desc: "Human analysis of authentication controllers, encryption logic, and database queries.", icon: "BookOpen" }
        ],
        process: [
          { step: "01", title: "Scope Setup", desc: "Obtaining access to Git repositories and listing framework dependencies." },
          { step: "02", title: "Automated Scan", desc: "Running static analysis tools to locate vulnerabilities and patterns." },
          { step: "03", title: "Manual Verification", desc: "Validating scan outputs and manually checking complex authorization flows." }
        ],
        industries: ["SaaS", "FinTech", "Banking", "Healthcare"],
        tools: ["SonarQube", "Snyk", "Semgrep", "Checkmarx", "GitHub Advanced Security"],
        faqs: [
          { q: "Why perform code reviews instead of regular pen tests?", a: "Code reviews reveal vulnerabilities in internal logic, hardcoded secrets, and database layouts that cannot be discovered from exterior penetration tests." }
        ]
      },
      {
        slug: "os-configuration-review",
        title: "OS Configuration Review",
        subtitle: "Harden operating systems (Linux & Windows) against local privilege escalation.",
        description: "We audit operating system parameters on virtual instances, endpoints, and servers to enforce industry security standards.",
        icon: "Settings",
        benefits: [
          "Prevent malware from escalating privileges to root/system user",
          "Harden systems against unauthorized local user access",
          "Verify compliance with CIS Benchmarks"
        ],
        useCases: ["Kubernetes node host review", "Corporate workstation baseline checks"],
        features: [
          { title: "CIS Benchmark Audits", desc: "Verifying systems against Center for Internet Security (CIS) hardening guides.", icon: "CheckSquare" }
        ],
        process: [
          { step: "01", title: "OS Profiling", desc: "Extracting configuration values, user groups, and kernel settings." },
          { step: "02", title: "Remediation Scripting", desc: "Writing Ansible/Puppet playbooks to secure system configurations." }
        ],
        industries: ["Banking", "SaaS", "Government", "FinTech"],
        tools: ["CIS-CAT", "OpenSCAP", "Ansible", "Lynis"],
        faqs: [
          { q: "What is a CIS Benchmark?", a: "The Center for Internet Security publishes consensus-based security settings configurations for operating systems, hypervisors, and cloud platforms." }
        ]
      },
      {
        slug: "firewall-configuration-review",
        title: "Firewall Configuration Review",
        subtitle: "Audit network policies to block unused ports and isolate network traffic.",
        description: "Over time, firewall rulesets can become disorganized and insecure. We audit firewall tables, NAT policies, and network zones to secure traffic flow.",
        icon: "ShieldAlert",
        benefits: [
          "Reduce network exposure by closing unused ports",
          "Identify outdated and redundant security rules",
          "Ensure network isolation between public and private systems"
        ],
        useCases: ["Annual firewall policy audits", "Cloud security group reviews"],
        features: [
          { title: "Ruleset Analysis", desc: "Mapping current traffic rules to locate open ports and excessive access privileges.", icon: "Map" }
        ],
        process: [
          { step: "01", title: "Configuration Export", desc: "Obtaining policy exports from Cisco, Fortinet, AWS, or Azure configurations." },
          { step: "02", title: "Rule Analysis", desc: "Identifying redundant rules and shadow policies that expose systems." }
        ],
        industries: ["Banking", "SaaS", "Government", "Healthcare"],
        tools: ["FireMon", "Skybox Security", "Algosec"],
        faqs: [
          { q: "What is a shadow rule?", a: "A shadow rule occurs when a preceding policy permits traffic, rendering a subsequent, more restrictive rule ineffective." }
        ]
      },
      {
        slug: "network-architecture-review",
        title: "Network Architecture Review",
        subtitle: "Evaluate network segmentation, DMZs, and transit routing designs.",
        description: "We review network topologies, VLAN segmentations, and VPN connections to prevent lateral movement of threats.",
        icon: "Workflow",
        benefits: [
          "Isolate critical system assets from compromise",
          "Validate secure configurations for remote VPNs",
          "Optimize network performance and security routing"
        ],
        useCases: ["Cloud VPC infrastructure reviews", "Corporate network integrations during mergers"],
        features: [
          { title: "Segment Audit", desc: "Verifying firewall boundaries between development, production, and administrative subnets.", icon: "Layers" }
        ],
        process: [
          { step: "01", title: "Topology Discovery", desc: "Analyzing network diagrams, cloud configurations, and routing tables." },
          { step: "02", title: "VLAN & VPN Analysis", desc: "Assessing cryptographic profiles on IPSec VPNs and verifying VLAN isolation." }
        ],
        industries: ["Banking", "SaaS", "Government", "FinTech"],
        tools: ["Draw.io", "Wireshark", "Cisco Packet Tracer"],
        faqs: [
          { q: "Why is network segmentation important?", a: "Without segmentation, a single compromised workstation could allow attackers to access databases, domain controller endpoints, and business files." }
        ]
      }
    ]
  },
  {
    slug: "training-and-awareness",
    title: "Training & Awareness",
    description: "Train employees to recognize phishing attempts, bad USB attacks, and social engineering to secure your organization.",
    icon: "GraduationCap",
    subServices: [
      {
        slug: "phishing-simulation",
        title: "Phishing Simulation",
        subtitle: "Launch mock phishing campaigns to assess employee security awareness.",
        description: "Over 90% of data breaches start with a phishing email. We design and launch mock phishing campaigns to test how employees react to social engineering.",
        icon: "MailOpen",
        benefits: [
          "Reduce employee click rates on real phishing emails",
          "Expose training gaps in specific departments",
          "Establish automated reporting systems for suspicious emails"
        ],
        useCases: ["Quarterly employee threat readiness drills", "Onboarding assessments for new hires"],
        features: [
          { title: "Custom Bait Templates", desc: "Creating realistic phishing templates mimicking invoices, login prompts, and notices.", icon: "Mail" }
        ],
        process: [
          { step: "01", title: "Campaign Preparation", desc: "Configuring mail gateways and choosing employee test groups." },
          { step: "02", title: "Simulation Execution", desc: "Sending out simulated phishing emails and tracking open/click rates." }
        ],
        industries: ["Banking", "Healthcare", "SaaS", "Government", "Education", "FinTech"],
        tools: ["GoPhish", "KnowBe4", "PhishMe"],
        faqs: [
          { q: "Are employees penalized for clicking simulations?", a: "No, we recommend using simulations for education. Employees who click are directed to quick training videos." }
        ]
      },
      {
        slug: "bad-usb-simulation",
        title: "Bad USB Simulation",
        subtitle: "Evaluate physical security by placing simulated bad USB drives in office areas.",
        description: "We test your physical security posture by placing mock USB drives loaded with safe tracking software in office areas to see if they are plugged in.",
        icon: "Usb",
        benefits: [
          "Train employees to identify physical media risks",
          "Improve office physical security protocols",
          "Locate physical security weak spots"
        ],
        useCases: ["Physical security audits of facilities", "Employee awareness assessments"],
        features: [
          { title: "Safe Tracking USBs", desc: "Using custom USB devices that run safe tracking payloads to identify plugged-in drives.", icon: "Cpu" }
        ],
        process: [
          { step: "01", title: "Target Selection", desc: "Identifying office locations for drop points (waiting rooms, desks, cafeteria)." },
          { step: "02", title: "USB Drop & Tracking", desc: "Placing USB drives and tracking telemetry to see if they are inserted into endpoints." }
        ],
        industries: ["Banking", "Government", "FinTech"],
        tools: ["Rubber Ducky", "Custom Payload Scripts"],
        faqs: [
          { q: "What is a Bad USB attack?", a: "An attack where a USB device acts as a keyboard, executing automated commands to install backdoor software when plugged in." }
        ]
      },
      {
        slug: "employee-awareness",
        title: "Employee Security Awareness",
        subtitle: "Interactive training programs to educate employees on cyber risks.",
        description: "We provide online training materials covering password security, remote work safety, clean desk policies, and device protection.",
        icon: "Users",
        benefits: [
          "Build a security-first company culture",
          "Ensure compliance with ISO 27001 and SOC 2 requirements",
          "Reduce administrative support requests for password resets"
        ],
        useCases: ["Annual compliance trainings", "Onboarding sessions for new employees"],
        features: [
          { title: "LMS Integrations", desc: "Delivering SCORM packages to integrate with your existing Learning Management System.", icon: "BookOpen" }
        ],
        process: [
          { step: "01", title: "Curriculum Customization", desc: "Tailoring training topics to match company policies and tools." },
          { step: "02", title: "Training Rollout", desc: "Enrolling employees and monitoring course completion rates." }
        ],
        industries: ["Banking", "Healthcare", "SaaS", "Government", "Education", "FinTech"],
        tools: ["Curricula", "Moodle", "Custom Video Content"],
        faqs: [
          { q: "Is training tracking supported?", a: "Yes, our dashboard provides audit reports showing course completion metrics for compliance reviews." }
        ]
      },
      {
        slug: "professional-training",
        title: "Professional Cyber Training",
        subtitle: "Advanced training programs to upskill IT and security teams.",
        description: "We provide hands-on training for developer and system administrator teams, covering secure coding practices, cloud security configuration, and incident handling.",
        icon: "Award",
        benefits: [
          "Train software developers in secure coding practices",
          "Build incident response capabilities in IT teams",
          "Prepare engineering teams to identify and resolve vulnerabilities"
        ],
        useCases: ["Upskilling software engineering teams", "Incident response readiness reviews"],
        features: [
          { title: "Hands-on Lab Environments", desc: "Using virtual environments to practice identifying vulnerabilities and deploying patches.", icon: "Terminal" }
        ],
        process: [
          { step: "01", title: "Skills Assessment", desc: "Reviewing engineering skillsets to identify training priorities." },
          { step: "02", title: "Interactive Workshop", desc: "Running live coding workshops and CTF events." }
        ],
        industries: ["Banking", "SaaS", "Government", "FinTech"],
        tools: ["CTF Platforms", "Vulnerable App Environments", "Jupyter Notebooks"],
        faqs: [
          { q: "Do you offer certifications?", a: "Yes, participants receive certificates of completion that count towards Continuing Professional Education (CPE) requirements." }
        ]
      }
    ]
  }
];
