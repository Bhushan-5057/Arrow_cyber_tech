"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { caseStudiesData } from "@/data/caseStudies";
import clsx from "clsx";
export default function CaseStudiesPage() {
    const [activeSector, setActiveSector] = useState("All");
    const sectors = ["All", "FinTech", "Healthcare", "SaaS"];
    const filteredStudies = caseStudiesData.filter((study) => {
        return activeSector === "All" || study.industry === activeSector;
    });
    return (<div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
          Proof of Defense
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
          Case Studies & Portfolios
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          See how our ethical hacking teams and compliance officers secure enterprise apps, validate system safety boundaries, and clear regulatory audits.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-8">
        {sectors.map((sec) => (<button key={sec} onClick={() => setActiveSector(sec)} className={clsx("px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer", activeSector === sec
                ? "border-brand-purple bg-brand-purple/10 text-brand-purple font-bold"
                : "border-slate-200 bg-white text-slate-600 hover:text-brand-blue")}>
            {sec}
          </button>))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study) => (<Card key={study.slug} glowColor="purple" className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-brand-purple font-semibold">
                  {study.industry} Sector
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-purple"/> {study.timeline} scope
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-950 group-hover:text-brand-purple transition-colors">
                {study.title}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {study.challenge}
              </p>

              <div className="grid grid-cols-2 gap-4 py-3 border-t border-slate-200 mt-4">
                {study.metrics.slice(0, 2).map((m) => (<div key={m.label} className="space-y-0.5">
                    <h4 className="text-sm font-extrabold text-slate-950">{m.value}</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-wider">{m.label}</p>
                  </div>))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/60 mt-4">
              <Link href={`/case-studies/${study.slug}`} className="text-xs font-bold text-brand-purple group-hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
                Read Full Case Study <ArrowRight className="w-3.5 h-3.5"/>
              </Link>
            </div>
          </Card>))}
      </section>

      <section className="glass-panel-neon p-6 sm:p-8 md:p-12 rounded-2xl border border-brand-cyan/20 bg-white max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="w-full space-y-3 text-center md:text-left">
          <h3 className="text-lg font-bold text-slate-950 sm:text-xl">Require a Validated Proof-of-Safety?</h3>
          <p className="mx-auto max-w-xl text-xs text-slate-600 md:mx-0">
            We provide signed verification letters and security assessment badges to help you close key deals.
          </p>
        </div>
        <Link href="/contact" className="w-full md:w-auto">
          <Button variant="primary" className="w-full bg-linear-to-tr from-brand-cyan to-brand-purple md:w-auto">Talk to a Lead Auditor</Button>
        </Link>
      </section>
    </div>);
}
