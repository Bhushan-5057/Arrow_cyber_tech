"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { blogsData } from "@/data/blogs";
import clsx from "clsx";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "VAPT", "Compliance", "SecOps", "Awareness"];

  const filteredPosts = blogsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
          Threat Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight">
          Arrow CyberTech Blog
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Deep-dives into penetration testing tactics, GRC compliance strategies, security operations hardening, and security culture.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-slate-200 pb-8">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search blogs, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-brand-cyan/60 rounded-lg px-4 py-2.5 pl-10 text-sm text-slate-950 placeholder-gray-500 focus:outline-none transition-colors"
          />
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-500" />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer",
                activeCategory === cat
                  ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan font-bold"
                  : "border-slate-200 bg-white text-slate-600 hover:text-brand-blue"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {filteredPosts.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.slug}
              glowColor="cyan"
              className="bg-white p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-brand-cyan font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-950 group-hover:text-brand-cyan transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200/60 text-slate-500"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-[10px] font-bold text-slate-950 uppercase">
                    {post.author.avatar}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-950 leading-none">
                      {post.author.name}
                    </h4>
                    <span className="text-[8px] text-slate-500">{post.publishDate}</span>
                  </div>
                </div>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-xs font-bold text-brand-cyan hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Read Post <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </section>
      ) : (
        <section className="text-center py-12 space-y-4">
          <p className="text-slate-600">No blog posts found matching your current parameters.</p>
          <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
            Clear Filters
          </Button>
        </section>
      )}
    </div>
  );
}
