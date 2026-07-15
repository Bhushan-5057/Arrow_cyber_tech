import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Timeline from "@/components/ui/Timeline";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { ShieldCheck, CheckCircle, Globe, Settings, ShieldAlert, ArrowRight, Database, Lock, GitBranch, Terminal, FileCode, Cpu, HardDrive, Wifi, Route, Radio, Layers, Compass, AlertTriangle, Activity, Box, FileText, Map, FileQuestion, Trash2, UserCheck, Briefcase, Heart, FileSignature, Sliders, Users, BarChart, Search, BookOpen, CheckSquare, Workflow, MailOpen, Mail, Usb, } from "lucide-react";
const iconMap = {
    Database,
    Lock,
    GitBranch,
    Terminal,
    FileCode,
    Cpu,
    HardDrive,
    Wifi,
    ShieldAlert,
    ShieldCheck,
    Route,
    Radio,
    Layers,
    Compass,
    AlertTriangle,
    Activity,
    Box,
    FileText,
    Map,
    FileQuestion,
    Trash2,
    UserCheck,
    Briefcase,
    Heart,
    FileSignature,
    Sliders,
    Users,
    BarChart,
    Search,
    BookOpen,
    CheckSquare,
    Workflow,
    MailOpen,
    Mail,
    Usb,
    Globe,
    Settings,
};
export default async function ServiceDetailPage({ params }) {
    const resolvedParams = await params;
    const slugList = resolvedParams.slug;
    if (!slugList || slugList.length === 0) {
        return notFound();
    }
    const categorySlug = slugList[0];
    const subServiceSlug = slugList[1];
    const category = servicesData.find((cat) => cat.slug === categorySlug);
    if (!category) {
        return notFound();
    }
    if (!subServiceSlug) {
        return (<div className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Security Category
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
            {category.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {category.description}
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-950 text-center">Available Sub-Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subServices.map((sub) => {
                const IconComp = iconMap[sub.icon] || ShieldCheck;
                return (<Card key={sub.slug} glowColor="cyan" className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-cyan">
                      <IconComp className="w-5 h-5"/>
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-cyan transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link href={`/services/${category.slug}/${sub.slug}`} className="text-xs font-bold text-brand-cyan hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
                      Explore Service <ArrowRight className="w-3.5 h-3.5"/>
                    </Link>
                  </div>
                </Card>);
            })}
          </div>
        </section>
      </div>);
    }
    const subService = category.subServices.find((sub) => sub.slug === subServiceSlug);
    if (!subService) {
        return notFound();
    }
    const relatedServices = category.subServices.filter((sub) => sub.slug !== subServiceSlug);
    return (<div className="space-y-24 md:space-y-32 py-12">
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"/>
        <div className="space-y-4 max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            {category.title} / Sub-Service
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            {subService.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subService.subtitle}
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-linear-to-tr from-brand-cyan to-brand-purple">
                Schedule Service Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-950 border-l-2 border-brand-cyan pl-3">
            Service Overview
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subService.description}
          </p>

          <div className="space-y-3 pt-4">
            <h4 className="font-bold text-xs uppercase text-slate-500 font-mono tracking-wider">
              Key Use Cases
            </h4>
            <div className="flex flex-wrap gap-2">
              {subService.useCases.map((uc) => (<span key={uc} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
                  {uc}
                </span>))}
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-slate-200 bg-white space-y-6">
          <h3 className="text-lg font-bold text-slate-950">Direct Benefits</h3>
          <ul className="space-y-4">
            {subService.benefits.map((benefit, idx) => (<li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5"/>
                <span className="text-sm text-slate-700 leading-relaxed">{benefit}</span>
              </li>))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Core Specifications
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">Security Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subService.features.map((feat) => {
            const FeatIcon = iconMap[feat.icon] || ShieldCheck;
            return (<Card key={feat.title} glowColor="cyan" className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-cyan">
                    <FeatIcon className="w-5 h-5"/>
                  </div>
                  <h3 className="text-sm font-bold text-slate-950 group-hover:text-brand-cyan transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </Card>);
        })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Execution Lifecycle
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">Our Methodical Process</h2>
        </div>

        <Timeline steps={subService.process}/>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-200 bg-white text-center space-y-6">
          <h3 className="text-lg font-bold text-slate-950">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {subService.industries.map((ind) => (<span key={ind} className="px-5 py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 hover:text-brand-cyan hover:border-brand-cyan/35 transition-colors">
                {ind}
              </span>))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            Security Toolbelt
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">Tools & Technologies</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {subService.tools.map((tool) => (<span key={tool} className="text-xs font-mono px-4 py-2 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
              {tool}
            </span>))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">Why Choose Arrow CyberTech?</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our ethical hackers and compliance officers hold elite offensive security certificates and are recognized compliance advisors. We combine automated testing suites with rigorous manual analysis to eliminate vulnerabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            "Detailed Proof-of-Concepts",
            "Technical Slack Liaison Channels",
            "Comprehensive Remediate Support",
            "Zero False Positive Reports",
        ].map((item) => (<div key={item} className="p-5 glass-panel border border-slate-200 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0"/>
              <span className="text-xs font-bold text-slate-800">{item}</span>
            </div>))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
            F.A.Q.
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">Common Inquiries</h2>
        </div>

        <FAQAccordion items={subService.faqs}/>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-neon p-6 sm:p-8 md:p-12 rounded-2xl border border-brand-cyan/20 bg-white flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
          <div className="w-full space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-950 sm:text-xl">Ready to Secure Your Systems?</h3>
            <p className="text-xs text-slate-600">
              Speak with a senior security architect to define a scope tailored for your technology.
            </p>
          </div>
          <Link href="/contact" className="w-full md:w-auto">
            <Button variant="primary" className="w-full bg-linear-to-tr from-brand-cyan to-brand-purple md:w-auto">Schedule Security Audit</Button>
          </Link>
        </div>
      </section>

      {relatedServices.length > 0 && (<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-950 mb-8 border-l-2 border-brand-purple pl-3">
            Related Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.slice(0, 3).map((related) => {
                const RelIcon = iconMap[related.icon] || ShieldCheck;
                return (<Card key={related.slug} glowColor="purple" className="bg-white p-6 border border-slate-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-purple">
                      <RelIcon className="w-5 h-5"/>
                    </div>
                    <h4 className="text-base font-bold text-slate-950 group-hover:text-brand-purple transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {related.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link href={`/services/${category.slug}/${related.slug}`} className="text-xs font-bold text-brand-purple hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
                      View Scope <ArrowRight className="w-3.5 h-3.5"/>
                    </Link>
                  </div>
                </Card>);
            })}
          </div>
        </section>)}
    </div>);
}
