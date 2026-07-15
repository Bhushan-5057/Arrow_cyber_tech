import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/caseStudies";
import { ArrowLeft, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
export default async function CaseStudyDetailPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const study = caseStudiesData.find((s) => s.slug === slug);
    if (!study) {
        return notFound();
    }
    const otherStudies = caseStudiesData.filter((s) => s.slug !== slug);
    return (<div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-purple transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4"/> Back to Case Studies
      </Link>

      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
          <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-brand-purple font-bold">
            {study.industry} Sector
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-purple"/> {study.timeline} Audit Timeline
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
          {study.title}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic border-l-2 border-brand-purple pl-4">
          Client: {study.clientName}
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {study.metrics.map((m) => (<div key={m.label} className="p-6 glass-panel border border-slate-200 rounded-xl space-y-2 hover:border-brand-purple/20 transition-all duration-300">
            <h3 className="text-3xl font-extrabold text-slate-950 font-mono text-glow-purple">
              {m.value}
            </h3>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">{m.label}</h4>
            <p className="text-[10px] text-slate-500 leading-normal">{m.description}</p>
          </div>))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <Card glowColor="purple" className="bg-white p-8 border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-950">The Challenge</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
        </Card>

        <Card glowColor="cyan" className="bg-white p-8 border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-950">Our Solution</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
        <div className="lg:col-span-2 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-2xl font-bold text-slate-950 border-b border-slate-200 pb-2">
            Audit Walkthrough
          </h2>
          {study.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed)
                return null;
            if (trimmed.startsWith("# ")) {
                return (<h3 key={idx} className="text-xl font-bold text-slate-950 pt-4">
                  {trimmed.replace("# ", "")}
                </h3>);
            }
            if (trimmed.startsWith("## ")) {
                return (<h4 key={idx} className="text-lg font-bold text-slate-950 pt-2">
                  {trimmed.replace("## ", "")}
                </h4>);
            }
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                const listItems = trimmed
                    .split("\n")
                    .map((li) => li.replace(/^[-*]\s+/, "").trim())
                    .filter(Boolean);
                return (<ul key={idx} className="list-disc pl-6 space-y-2 text-sm text-slate-700">
                  {listItems.map((li, lidx) => (<li key={lidx}>{li}</li>))}
                </ul>);
            }
            if (trimmed.startsWith("1. ")) {
                const listItems = trimmed
                    .split("\n")
                    .map((li) => li.replace(/^\d+\.\s+/, "").trim())
                    .filter(Boolean);
                return (<ol key={idx} className="list-decimal pl-6 space-y-2 text-sm text-slate-700">
                  {listItems.map((li, lidx) => (<li key={lidx}>{li}</li>))}
                </ol>);
            }
            return (<p key={idx} className="text-sm text-slate-600 leading-relaxed">
                {trimmed}
              </p>);
        })}
        </div>

        <div className="glass-panel p-8 rounded-xl border border-slate-200 bg-white space-y-6 h-fit">
          <h3 className="text-base font-bold text-slate-950 uppercase tracking-wider">Key Outcomes</h3>
          <ul className="space-y-4">
            {study.results.map((res, idx) => (<li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-purple shrink-0 mt-0.5"/>
                <span className="text-xs text-slate-700 leading-normal">{res}</span>
              </li>))}
          </ul>
        </div>
      </section>

      {otherStudies.length > 0 && (<section className="space-y-6 pt-12 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-950 border-l-2 border-brand-purple pl-3">
            More Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherStudies.slice(0, 2).map((other) => (<Card key={other.slug} glowColor="purple" className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-brand-purple uppercase">
                    {other.industry} Sector
                  </span>
                  <h4 className="text-sm font-bold text-slate-950">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {other.challenge}
                  </p>
                </div>
                <div className="pt-4">
                  <Link href={`/case-studies/${other.slug}`} className="text-xs font-bold text-brand-purple hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
                    Read Study <ArrowRight className="w-3.5 h-3.5"/>
                  </Link>
                </div>
              </Card>))}
          </div>
        </section>)}

      <section className="max-w-4xl mx-auto pt-6 text-center space-y-6">
        <h3 className="text-xl font-bold text-slate-950">Need Similar Security Results?</h3>
        <Link href="/contact">
          <Button variant="cyber-glow" size="lg">
            Schedule Scoping Consultation
          </Button>
        </Link>
      </section>
    </div>);
}
