"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Twitter, Linkedin, MessageCircle } from "lucide-react";
import type { Post, PostMeta } from "@/lib/mdx";

const ACCENT_COLORS: Record<string, string> = {
  "AI & ML": "#00FFB2",
  Engineering: "#7B61FF",
  Product: "#FF6B35",
};

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://novatechafrica.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8888AA]">Share</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.1] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10 text-[#8888AA] hover:text-[#1DA1F2] text-[12px] font-medium transition-all duration-300"
        aria-label="Share on Twitter/X"
      >
        <Twitter className="w-3.5 h-3.5" /> Twitter / X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.1] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 text-[#8888AA] hover:text-[#0A66C2] text-[12px] font-medium transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" /> LinkedIn
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.1] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 text-[#8888AA] hover:text-[#25D366] text-[12px] font-medium transition-all duration-300"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
      </a>
    </div>
  );
}

interface ArticleShellProps {
  post: Post;
  related: PostMeta[];
  children: React.ReactNode;
}

export function ArticleShell({ post, related, children }: ArticleShellProps) {
  const accent = ACCENT_COLORS[post.category] ?? "#00FFB2";

  return (
    <main className="pt-28 pb-32 px-6">
      {/* Back link */}
      <div className="max-w-3xl mx-auto mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#8888AA] hover:text-[#00FFB2] transition-colors duration-300"
        >
          <ArrowLeft className="w-3 h-3" /> All Articles
        </Link>
      </div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto mb-14"
      >
        <div className="flex items-center gap-3 mb-6">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border"
            style={{ background: `${accent}15`, borderColor: `${accent}35`, color: accent }}
          >
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-[#F0F0FF] mb-8">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-5 text-[12px] font-mono text-[#8888AA] pb-8 border-b border-white/[0.07]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-KE", {
              month: "long", day: "numeric", year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
          <span className="text-[#F0F0FF]/60">By {post.author}</span>
        </div>
      </motion.header>

      {/* MDX Body — rendered by server, passed as children */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        {children}
      </motion.div>

      {/* Social Share */}
      <div className="max-w-3xl mx-auto mt-14 pt-10 border-t border-white/[0.07]">
        <ShareButtons title={post.title} slug={post.slug} />
      </div>

      {/* CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-16"
      >
        <div className="glass rounded-3xl p-10 md:p-14 border border-[#00FFB2]/20 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFB2]/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">
              Work With Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F0F0FF] mb-3">
              Need help building this?
            </h2>
            <p className="text-[#8888AA] text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
              Nova Tech Africa builds the systems you just read about. Let&apos;s talk about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FFB2] text-[#03000A] font-bold tracking-widest text-[12px] uppercase rounded-full hover:bg-[#F0F0FF] transition-all duration-300"
            >
              Let&apos;s Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto mt-20">
          <h2 className="text-xl font-bold text-[#F0F0FF] mb-8 tracking-tight">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rel) => {
              const relAccent = ACCENT_COLORS[rel.category] ?? "#00FFB2";
              return (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="glass rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 group block"
                >
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase mb-3 block"
                    style={{ color: relAccent }}
                  >
                    {rel.category}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#F0F0FF] group-hover:text-[#00FFB2] transition-colors duration-300 leading-snug mb-2">
                    {rel.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#8888AA] flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {rel.readTime}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
