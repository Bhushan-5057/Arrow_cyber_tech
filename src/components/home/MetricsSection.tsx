"use client";

import { motion } from "framer-motion";
import { Award, FileSpreadsheet, TrendingUp, Users } from "lucide-react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: "easeOut" as const,
    },
  },
};

const metrics = [
  {
    title: "Rapid Scoping",
    desc: "Quotes returned within 24 hours",
    icon: TrendingUp,
    className: "text-brand-cyan",
  },
  {
    title: "Full Remediation",
    desc: "Complimentary patch verify checks",
    icon: FileSpreadsheet,
    className: "text-brand-purple",
  },
  {
    title: "CREST / Offensive",
    desc: "Certified senior test engineers",
    icon: Award,
    className: "text-brand-cyan",
  },
  {
    title: "Dedicated Support",
    desc: "Technical Slack connection channels",
    icon: Users,
    className: "text-brand-purple",
  },
];

export default function MetricsSection() {
  return (
    <section className="bg-gradient-to-b from-transparent via-sky-50 to-transparent py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 50px -24px rgba(15, 23, 42, 0.16)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-panel flex items-center gap-4 rounded-xl border border-slate-200 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <Icon className={`h-10 w-10 shrink-0 ${metric.className}`} />
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{metric.title}</h3>
                  <p className="text-xs text-slate-600">{metric.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
