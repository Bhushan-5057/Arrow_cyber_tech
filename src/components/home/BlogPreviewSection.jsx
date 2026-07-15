import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { blogsData } from "@/data/blogs";
export default function BlogPreviewSection() {
    return (<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="min-w-0 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-cyan" data-aos="fade-up" data-aos-delay="100">
            Threat Intelligence
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 sm:text-4xl" data-aos="fade-up" data-aos-delay="150">
            Latest Cyber Updates
          </p>
        </div>
        <Link href="/blogs" className="w-full md:w-auto" data-aos="fade-up" data-aos-delay="180">
          <Button variant="outline" size="sm" className="w-full justify-center md:w-auto">
            Explore Blog Hub <ArrowRight className="ml-1 h-4 w-4"/>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogsData.slice(0, 4).map((post, index) => (<Card key={post.slug} glowColor="cyan" className="flex h-full flex-col justify-between bg-white" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="line-clamp-2 text-sm font-bold text-slate-950 transition-colors group-hover:text-brand-cyan">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                {post.description}
              </p>
            </div>
            <div className="pt-6">
              <Link href={`/blogs/${post.slug}`} className="flex cursor-pointer items-center gap-1 text-xs font-bold text-brand-cyan transition-colors group-hover:text-brand-blue">
                Read Article <ArrowRight className="h-3.5 w-3.5"/>
              </Link>
            </div>
          </Card>))}
      </div>
    </section>);
}
