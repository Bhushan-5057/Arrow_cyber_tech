"use client";

import Link from "next/link";
import { Shield, ShieldAlert, ClipboardCheck, Cpu, GraduationCap, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    ShieldAlert: ShieldAlert,
    ClipboardCheck: ClipboardCheck,
    Cpu: Cpu,
    GraduationCap: GraduationCap,
  };

  return (
    <div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
          Defense Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
          Global Cybersecurity Services
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Proactive penetration testing, continuous compliance preparation, secure source code review, and physical threat simulations to protect your organization.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {servicesData.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Shield;
          return (
            <Card
              key={cat.slug}
              glowColor="cyan"
              className="bg-white p-8 border border-slate-200 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-cyan">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-950">{cat.title}</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Sub-Services Available
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                    {cat.subServices.map((sub) => (
                      <li key={sub.slug} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                        <Link
                          href={`/services/${cat.slug}/${sub.slug}`}
                          className="hover:text-brand-cyan hover:translate-x-0.5 transition-all text-xs"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/60 mt-6 flex justify-between items-center">
                <Link
                  href={`/services/${cat.slug}`}
                  className="text-xs font-bold text-brand-cyan hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Explore Vertical <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          );
        })}
      </section>

      <section className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-200 bg-white text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-slate-950">Need a Customized Assessment?</h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          We construct tailored security scopes integrating VAPT, continuous compliance monitoring, and code review packages to fit your threat model.
        </p>
        <Link href="/contact">
          <Button variant="primary">Request Custom Quote</Button>
        </Link>
      </section>
    </div>
  );
}
