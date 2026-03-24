"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";

const ACCENT_COLORS: Record<string, string> = {
  "AI & ML": "#6366F1",
  Engineering: "#7B61FF",
  Product: "#FF6B35",
};

function truncateToWords(text: string, wordCount: number): string {
  const words = text.split(" ");
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(" ") + "…";
}

export function BlogIndexClient({ posts }: { posts: PostMeta[] }) {
  return (
    <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-6 block">
            Insights & News
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
            Insights &amp;{" "}
            <span className="text-gradient-full">Engineering Perspectives</span>
          </h1>
          <p className="text-[#8888AA] text-xl leading-relaxed max-w-2xl">
            Practical thinking on software, AI, and building products for
            Africa&apos;s digital economy.
          </p>
        </motion.div>
      </section>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {posts.map((post, i) => {
          const accent = ACCENT_COLORS[post.category] ?? "#6366F1";
          return (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="glass rounded-3xl p-8 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col h-full group"
            >
              {/* Category + Read Time */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border"
                  style={{
                    background: `${accent}15`,
                    borderColor: `${accent}35`,
                    color: accent,
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#8888AA] uppercase tracking-widest">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-4 group-hover:text-[#6366F1] transition-colors duration-300 leading-snug flex-grow">
                {post.title}
              </h2>

              {/* Excerpt — 20 words */}
              <p className="text-[#8888AA] text-sm leading-relaxed mb-6">
                {truncateToWords(post.excerpt, 20)}
              </p>

              {/* Footer: Date + CTA */}
              <div className="pt-5 border-t border-white/[0.05] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#8888AA]">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-KE", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#8888AA] hover:text-[#6366F1] transition-colors duration-300 group/link"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <section className="glass rounded-[40px] p-12 md:p-20 border border-white/[0.08] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6366F1]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-[#8888AA] mb-10 text-sm leading-relaxed">
            Subscribe to our monthly newsletter for insights on engineering
            leadership, AI trends, and scaling digital products in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow bg-black/40 border border-white/[0.1] focus:border-[#6366F1]/40 rounded-xl px-6 py-4 outline-none text-[#F0F0FF] placeholder:text-[#8888AA]"
            />
            <button className="px-8 py-4 bg-[#F0F0FF] text-[#03000A] font-bold tracking-widest uppercase hover:bg-[#6366F1] transition-all duration-300 rounded-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
