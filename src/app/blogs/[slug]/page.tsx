import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogs";
import { ArrowLeft, Clock, Calendar, ArrowRight, User } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = blogsData.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  const relatedPosts = blogsData.filter(
    (p) => post.relatedSlugs.includes(p.slug) || (p.category === post.category && p.slug !== post.slug)
  );

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-cyan transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4" /> Back to Blog Hub
      </Link>

      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
          <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-brand-cyan font-bold">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
          {post.title}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic border-l-2 border-brand-cyan pl-4">
          {post.description}
        </p>

        <div className="flex items-center gap-3 py-4 border-y border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-sm font-bold text-slate-950">
            {post.author.avatar}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-950 leading-none">
              {post.author.name}
            </h4>
            <span className="text-xs text-slate-500">{post.author.role}</span>
          </div>
        </div>
      </header>

      <article className="prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed">
        {post.content.split("\n\n").map((block, idx) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("# ")) {
            return (
              <h2 key={idx} className="text-2xl font-bold text-slate-950 pt-6 border-b border-slate-200 pb-2">
                {trimmed.replace("# ", "")}
              </h2>
            );
          }
          if (trimmed.startsWith("## ")) {
            return (
              <h3 key={idx} className="text-xl font-bold text-slate-950 pt-4">
                {trimmed.replace("## ", "")}
              </h3>
            );
          }
          if (trimmed.startsWith("### ")) {
            return (
              <h4 key={idx} className="text-lg font-bold text-slate-950 pt-2">
                {trimmed.replace("### ", "")}
              </h4>
            );
          }
          if (trimmed.startsWith("- ")) {
            const listItems = trimmed
              .split("\n")
              .map((li) => li.replace("- ", "").trim())
              .filter(Boolean);
            return (
              <ul key={idx} className="list-disc pl-6 space-y-2 text-sm text-slate-700">
                {listItems.map((li, lidx) => (
                  <li key={lidx}>{li}</li>
                ))}
              </ul>
            );
          }
          if (trimmed.startsWith("1. ")) {
            const listItems = trimmed
              .split("\n")
              .map((li) => li.replace(/^\d+\.\s+/, "").trim())
              .filter(Boolean);
            return (
              <ol key={idx} className="list-decimal pl-6 space-y-2 text-sm text-slate-700">
                {listItems.map((li, lidx) => (
                  <li key={lidx}>{li}</li>
                ))}
              </ol>
            );
          }
          if (trimmed.startsWith("```")) {
            const lines = trimmed.split("\n");
            const code = lines.slice(1, -1).join("\n");
            return (
              <pre key={idx} className="bg-slate-100 border border-slate-200 p-4 rounded-lg overflow-x-auto text-xs font-mono text-brand-cyan">
                <code>{code}</code>
              </pre>
            );
          }

          return (
            <p key={idx} className="text-sm sm:text-base leading-relaxed text-slate-600">
              {trimmed}
            </p>
          );
        })}
      </article>

      <section className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
        {post.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-3 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600"
          >
            #{t}
          </span>
        ))}
      </section>

      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-950 border-l-2 border-brand-cyan pl-3">
            Related Readings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.slice(0, 2).map((rel) => (
              <Card
                key={rel.slug}
                glowColor="cyan"
                className="bg-white p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-brand-cyan uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-950 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`/blogs/${rel.slug}`}
                    className="text-xs font-bold text-brand-cyan hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
