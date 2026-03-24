"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = ["All", "FinTech", "Logistics", "HealthTech", "AI", "Cloud", "Enterprise"];

const PROJECTS = [
  {
    slug: "car-clan",
    title: "Car Clan",
    industry: ["Automotive", "Marketplace"],
    outcome: "A premium car rental and management platform for a high-end fleet in Kenya. Features real-time booking and fleet tracking.",
    tags: ["Next.js", "Firebase", "Tailwind"],
    accent: "#6366F1",
    year: "2026",
  },
  {
    slug: "hope-counseling",
    title: "Hope Counseling",
    industry: ["Mental Health", "Branding"],
    outcome: "Modern, empathetic personal website for a professional counselor. Built to provide a serene digital space for university students.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    accent: "#7B61FF",
    year: "2025",
  },
  {
    slug: "eastern-vacations-ems",
    title: "Eastern Vacations EMS",
    industry: ["TravelTech", "Enterprise"],
    outcome: "Custom Enterprise Management System unified Admin and Reservations portals, cutting booking errors for a major tour operator.",
    tags: ["React", "Firebase", "Vercel"],
    accent: "#F5A623",
    year: "2026",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.industry.includes(activeFilter));

  return (
    <div className="bg-[#03000A] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-4 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Proven <span className="text-gradient-full">Engineering Outcomes</span></h1>
            <p className="text-[#8888AA] text-lg leading-relaxed max-w-2xl">
              A gallery of our most impactful digital architecture and products.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="flex items-center gap-4 flex-wrap mb-12">
          {INDUSTRIES.map(industry => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${activeFilter === industry ? 'bg-[#6366F1]/10 border-[#6366F1] text-[#6366F1]' : 'bg-white/[0.03] border-white/[0.1] text-[#8888AA] hover:border-[#6366F1]/30'}`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`}>
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group glass rounded-3xl p-6 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 h-full flex flex-col"
                >
                  {/* Visual Placeholder */}
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] mb-6 flex items-center justify-center group-hover:bg-[#6366F1]/5 transition-colors duration-500 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <span className="px-6 py-2.5 rounded-full border border-[#6366F1]/40 bg-[#6366F1]/10 text-[#6366F1] text-xs font-bold uppercase tracking-widest">View Case Study</span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-[#6366F1]/60" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                        {p.industry.slice(0,1).map(ind => (
                          <span key={ind} className="font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-white/[0.1] text-[#8888AA]">{ind}</span>
                        ))}
                    </div>
                    <span className="font-mono text-[10px] text-[#8888AA]/60">{p.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#6366F1] transition-colors duration-300">{p.title}</h3>
                  <p className="text-[#8888AA] text-[13px] leading-relaxed mb-6 flex-grow">{p.outcome}</p>

                  <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
                    {p.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono text-[#8888AA]/70">{t}</span>
                    ))}
                  </div>
                </motion.article>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Closing CTA */}
        <section className="mt-32 text-center py-20 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/[0.05]">
           <h2 className="text-3xl font-bold mb-4">Have a similar project in mind?</h2>
           <p className="text-[#8888AA] mb-8">Tell us what you&apos;re building and let&apos;s see how we can help.</p>
           <Link href="/contact" className="inline-flex items-center gap-2 text-[#6366F1] font-bold tracking-widest uppercase hover:gap-4 transition-all duration-300">
              Start a project enquiry <ArrowRight className="w-4 h-4" />
           </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
   return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
   );
}
