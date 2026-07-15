import Card from "@/components/ui/Card";
const testimonials = [
    {
        quote: "Arrow CyberTech's VAPT audit was incredibly thorough. They uncovered logic flaws that automated tools completely skipped.",
        author: "VP of Engineering",
        company: "DataFlow AI",
    },
    {
        quote: "Achieving SOC 2 was a breeze. Vanta integrations and audit mapping made the process run smoothly.",
        author: "Chief Security Officer",
        company: "PaySwift Tech",
    },
];
export default function TestimonialSection() {
    return (<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
        <h2 className="text-xs font-mono uppercase tracking-widest text-brand-cyan" data-aos="fade-up" data-aos-delay="100">
          Client Reviews
        </h2>
        <p className="text-3xl font-extrabold text-slate-950 sm:text-4xl" data-aos="fade-up" data-aos-delay="150">
          Trusted by Technical Leaders
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (<Card key={`${testimonial.author}-${testimonial.company}`} glowColor="none" className="border border-slate-200 bg-white p-8" data-aos="fade-up" data-aos-delay={index * 100}>
            <p className="mb-6 text-sm italic leading-relaxed text-slate-700">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple text-xs font-extrabold text-white">
                {testimonial.company.slice(0, 2)}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-950">
                  {testimonial.author}
                </h3>
                <p className="font-mono text-[10px] text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </Card>))}
      </div>
    </section>);
}
