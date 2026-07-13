"use client";

import { motion } from "framer-motion";

interface TimelineStep {
  step?: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative border-l border-brand-cyan/20 ml-4 md:ml-6 space-y-12 py-4">
      {steps.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-10"
        >
          <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-brand-cyan flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-200/80 hover:border-brand-cyan/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              {item.step && (
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                  {item.step}
                </span>
              )}
              <h3 className="font-semibold text-lg text-slate-950">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
