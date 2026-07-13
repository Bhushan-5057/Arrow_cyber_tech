"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Cpu, GraduationCap, ShieldAlert } from "lucide-react";
import Card from "@/components/ui/Card";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: "easeOut" as const,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const services = [
  {
    title: "Penetration Testing (VAPT)",
    desc: "Simulate complex ethical hacks against web, mobile, and network perimeters to patch weaknesses.",
    icon: ShieldAlert,
    slug: "penetration-testing",
    color: "cyan" as const,
  },
  {
    title: "Compliance & GRC",
    desc: "Prepare for and achieve SOC2, ISO 27001, GDPR, HIPAA, and CERT-In certifications cleanly.",
    icon: ClipboardCheck,
    slug: "grc",
    color: "purple" as const,
  },
  {
    title: "Cybersecurity Operations",
    desc: "In-depth secure source code auditing, firewall rule tuning, and OS host level hardening.",
    icon: Cpu,
    slug: "cybersecurity-operations",
    color: "blue" as const,
  },
  {
    title: "Training & Awareness",
    desc: "Train employees against social engineering via phishing drills and physical USB simulations.",
    icon: GraduationCap,
    slug: "training-and-awareness",
    color: "cyan" as const,
  },
];

export default function CoreServicesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/5 blur-[120px]" />
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto mb-16 max-w-3xl space-y-4 text-center"
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-brand-cyan" data-aos="fade-up" data-aos-delay="100">
          Security Offerings
        </h2>
        <p className="text-3xl font-extrabold text-slate-950 sm:text-4xl" data-aos="fade-up" data-aos-delay="150">
          Comprehensive Defense Verticals
        </p>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base" data-aos="fade-up" data-aos-delay="200">
          From deep code analysis and offensive threat execution to rigorous compliance governance.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -7, scale: 1.01, boxShadow: "0 24px 60px -24px rgba(15, 23, 42, 0.18)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                glowColor={service.color}
                className="flex h-full flex-col justify-between bg-white"
              >
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-brand-cyan transition-colors duration-300 group-hover:text-brand-blue"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-950 transition-colors group-hover:text-brand-cyan">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">{service.desc}</p>
                </div>
                <div className="pt-6">
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex cursor-pointer items-center gap-1 text-xs font-bold text-brand-cyan transition-colors group-hover:text-brand-blue"
                    >
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
