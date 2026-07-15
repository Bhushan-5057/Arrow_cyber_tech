import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { caseStudiesData } from "@/data/caseStudies";
export default function CaseStudiesPreviewSection() {
    return (<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="min-w-0 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-cyan" data-aos="fade-up" data-aos-delay="100">
            Success Records
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 sm:text-4xl" data-aos="fade-up" data-aos-delay="150">
            Proven Defense Results
          </p>
        </div>
        <Link href="/case-studies" className="w-full md:w-auto" data-aos="fade-up" data-aos-delay="180">
          <Button variant="outline" size="sm" className="w-full justify-center md:w-auto">
            View All Case Studies <ArrowRight className="ml-1 h-4 w-4"/>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {caseStudiesData.slice(0, 3).map((study, index) => (<Card key={study.slug} glowColor="purple" className="flex h-full flex-col justify-between bg-white" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase text-brand-purple">
                {study.industry} Audit
              </span>
              <h3 className="text-lg font-bold text-slate-950 transition-colors group-hover:text-brand-purple">
                {study.title}
              </h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                {study.challenge}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-4 border-t border-slate-200 py-2">
                {study.metrics.slice(0, 2).map((metric) => (<div key={metric.label}>
                    <h4 className="text-sm font-extrabold text-slate-950">
                      {metric.value}
                    </h4>
                    <p className="text-[10px] uppercase text-slate-500">
                      {metric.label}
                    </p>
                  </div>))}
              </div>
            </div>
            <div className="pt-6">
              <Link href={`/case-studies/${study.slug}`} className="flex cursor-pointer items-center gap-1 text-xs font-bold text-brand-purple transition-colors group-hover:text-brand-blue">
                Read Case Study <ArrowRight className="h-3.5 w-3.5"/>
              </Link>
            </div>
          </Card>))}
      </div>
    </section>);
}
