"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

const ARTICLES = [
  {
    title: "How AI is Transforming Enterprise Software in Africa (2026)",
    excerpt: "Artificial Intelligence is no longer just a trend — for African enterprises, it's becoming the backbone of scale and operational efficiency.",
    author: "Nova Tech AI Team",
    date: "March 20, 2026",
    category: "AI & ML",
    readTime: "6 min read",
    accent: "#00FFB2",
  },
  {
    title: "Why African Startups Need Custom Software, Not Off-the-Shelf Tools",
    excerpt: "Off-the-shelf software often fails to account for unique infrastructure constraints and operational workflows in regional markets.",
    author: "Sarah Kimani",
    date: "March 15, 2026",
    category: "Engineering",
    readTime: "8 min read",
    accent: "#7B61FF",
  },
  {
    title: "The Complete Guide to Building a SaaS Platform in Kenya",
    excerpt: "From MPESA integration to local server nodes — building a premium SaaS for the Kenyan market requires a specialized technical lens.",
    author: "James Odhiambo",
    date: "March 10, 2026",
    category: "Product",
    readTime: "12 min read",
    accent: "#FF6B35",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#03000A] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
        <section className="mb-20 text-center lg:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
           >
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-6 block">Insights & News</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                 The Engineering <br /> <span className="text-gradient-full">Perspective</span>
              </h1>
              <p className="text-[#8888AA] text-xl leading-relaxed">
                 Deep dives into architecture, AI, and the future of technology in Africa.
              </p>
           </motion.div>
        </section>

        {/* Featured List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
           {ARTICLES.map((article, i) => (
              <motion.article 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 className="glass rounded-3xl p-8 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 flex flex-col h-full group"
              >
                  <div className="flex items-center gap-3 mb-6">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border"
                      style={{ background: `${article.accent}12`, borderColor: `${article.accent}30`, color: article.accent }}
                    >
                      {article.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#8888AA] uppercase tracking-widest">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FFB2] transition-colors duration-300 flex-grow leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#8888AA] text-sm leading-relaxed mb-8 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                           <User className="w-3 h-3 text-[#F0F0FF]" />
                        </div>
                        <span className="text-[11px] font-medium text-[#F0F0FF]/80">{article.author}</span>
                     </div>
                     <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00FFB2]/10 hover:border-[#00FFB2]/30 text-[#8888AA] hover:text-[#00FFB2] transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
              </motion.article>
           ))}
        </div>

        {/* Newsletter / CTA */}
        <section className="glass rounded-[40px] p-12 md:p-20 border border-white/[0.08] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FFB2]/5 blur-[120px]" />
           <div className="max-w-xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Curve</h2>
              <p className="text-[#8888AA] mb-10 text-sm leading-relaxed">
                 Subscribe to our monthly newsletter for insights on engineering leadership, AI trends, and scaling digital products.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                 <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-grow bg-black/40 border border-white/[0.1] focus:border-[#00FFB2]/40 rounded-xl px-6 py-4 outline-none text-[#F0F0FF]"
                 />
                 <button className="px-8 py-4 bg-[#F0F0FF] text-[#03000A] font-bold tracking-widest uppercase hover:bg-[#00FFB2] transition-all duration-300 rounded-xl">
                   Subscribe
                 </button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
