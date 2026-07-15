import Link from "next/link";
import Button from "@/components/ui/Button";
export default function ContactCTASection() {
    return (<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="glass-panel-neon relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-brand-cyan/20 bg-white p-6 sm:p-8 md:flex-row md:p-12 lg:p-16" data-aos="fade-up">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-cyan/5 blur-[100px]"/>
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Secure Your Systems Today
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Schedule a 15-minute alignment scoping call with our certified ethical
            hacking architects to map your threat vulnerabilities.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
          <Link href="/contact" className="w-full sm:w-auto" data-aos="zoom-in" data-aos-delay="100">
            <Button size="lg" className="w-full bg-linear-to-tr from-brand-cyan to-brand-purple">
              Schedule Audit Call
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto" data-aos="zoom-in" data-aos-delay="180">
            <Button variant="outline" size="lg" className="w-full">
              View Scopes
            </Button>
          </Link>
        </div>
      </div>
    </section>);
}
