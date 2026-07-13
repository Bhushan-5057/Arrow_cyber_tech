"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import Timeline from "@/components/ui/Timeline";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Kabir Mehta",
      role: "CEO & Cybersecurity Architect",
      bio: "Former enterprise systems architect with 15+ years experience in Active Directory security and critical core subnets.",
      avatar: "KM",
    },
    {
      name: "Elena Rostova",
      role: "Head of Offensive Security",
      bio: "Offensive Security Certified Expert (OSCE). Specialized in dynamic binary analysis and API logical authorization flaws.",
      avatar: "ER",
    },
    {
      name: "Siddharth Sen",
      role: "Director of Compliance & GRC",
      bio: "Former Big 4 senior compliance auditor. Conducted over 150 SOC 2 and ISO 27001 certifications globally.",
      avatar: "SS",
    },
  ];

  const milestones = [
    {
      step: "2017",
      title: "Company Founded",
      desc: "Arrow CyberTech was incorporated with a focus on web application VAPT and cloud security configurations.",
    },
    {
      step: "2022",
      title: "Global Compliance Expansion",
      desc: "Launched our continuous GRC division, facilitating automated SOC 2 readiness audits and ISO certifications.",
    },
    {
      step: "2024",
      title: "Expanded GRC Devision",
      desc: "Achieved validation as a recognized auditor for critical financial infrastructure and payment aggregators.",
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
            Securing Global Tech Architecture
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We are a group of ethical hackers, security analysts, and GRC auditors dedicated to safeguarding digital assets and validating regulatory trust boundaries.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card glowColor="cyan" className="bg-white p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              To provide high-fidelity security assessments that map technical risks to business priorities, helping organizations build and maintain user trust.
            </p>
          </Card>

          <Card glowColor="purple" className="bg-white p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Our Vision</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              To build a safer digital ecosystem where organizations can innovate securely, protected by proactive defense and continuous compliance measures.
            </p>
          </Card>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Company Milestones
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Our Journey So Far
          </h2>
        </div>

        <Timeline steps={milestones} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-200 bg-white text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
            Schedule a scoping call with our certified security experts to design a custom penetration testing or compliance roadmap for your organization.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="bg-linear-to-tr from-brand-cyan to-brand-purple">Talk To Our Expert</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
