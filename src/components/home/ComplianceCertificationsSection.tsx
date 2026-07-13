import { CheckCircle } from "lucide-react";

const controls = [
  "SOC2 Audit Preparation",
  "ISO 27001 ISMS Structuring",
  "PCI-DSS Security Controls",
  "GDPR & DPDP Privacy Checks",
  "HIPAA Medical Safety Controls",
  "CERT-In Assessment Files",
];

const badges = ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI-DSS", "CERT-In"];

export default function ComplianceCertificationsSection() {
  return (
    <section className="border-y border-slate-200/60 py-16 bg-[url('/assets/bgimage.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2
              className="text-xs font-mono uppercase tracking-widest text-brand-cyan"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Governance Standards
            </h2>
            <p
              className="text-3xl font-extrabold text-slate-950 sm:text-4xl"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Global Compliance Shielding
            </p>
            <p
              className="text-sm leading-relaxed text-slate-600 sm:text-base"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our certifications and audit preparation processes ensure you meet rigorous
              security mandates, enabling smooth validation reviews from enterprise examiners.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {controls.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                  data-aos="fade-up"
                  data-aos-delay={80 + index * 60}
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-brand-cyan" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {badges.map((badge, index) => (
              <div
                key={badge}
                className="glass-panel flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 p-4 transition-all hover:border-brand-cyan/20"
                data-aos="fade-left"
                data-aos-delay={index * 80}
              >
                <span className="font-mono text-sm font-bold text-slate-500 transition-colors hover:text-brand-cyan">
                  {badge}
                </span>
                <div className="h-1 w-6 rounded bg-brand-purple/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
