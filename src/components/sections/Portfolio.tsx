"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "car-clan",
    title: "Car Clan",
    industry: ["Automotive", "E-commerce"],
    result:
      "A premium car rental and management platform for a high-end fleet in Kenya. Features real-time booking, automated invoicing, and fleet tracking.",
    stack: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    accent: "#6366F1",
    year: "2026",
    gradient: "from-[#6366F1]/10 via-[#7B61FF]/5 to-transparent",
    liveUrl: "https://car-clan.vercel.app/",
  },
  {
    id: "hope-counseling",
    title: "Hope Counseling",
    industry: ["Mental Health", "Personal Branding"],
    result:
      "Modern, empathetic personal website for a professional counselor. Built to provide a serene digital space for university students seeking mental health support.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    accent: "#7B61FF",
    year: "2025",
    gradient: "from-[#7B61FF]/10 via-[#FF6B35]/5 to-transparent",
    liveUrl: "https://hope-counseling-support-services.vercel.app/",
  },
  {
    id: "eastern-vacations-ems",
    title: "Eastern Vacations EMS",
    industry: ["TravelTech", "Enterprise"],
    result:
      "Custom Enterprise Management System for Eastern Vacations & Safaris Kenya — a Mombasa-based tour operator. Unified Admin and Reservations portals replaced manual spreadsheets, cutting booking errors and improving response times across safari & holiday scheduling.",
    stack: ["React", "Vite", "Firebase", "Tailwind CSS", "Vercel"],
    accent: "#F5A623",
    year: "2026",
    gradient: "from-[#F5A623]/10 via-[#6366F1]/5 to-transparent",
    liveUrl: "https://eastern-vacations-system.vercel.app/",
  },
];

// Placeholder project "mockup" image using Canvas-style colored panel
const ProjectVisual = ({
  accent,
  gradient,
  title,
}: {
  accent: string;
  gradient: string;
  title: string;
}) => (
  <div
    className={`relative w-full aspect-[16/8] rounded-xl overflow-hidden bg-gradient-to-br ${gradient} border border-white/[0.07] group-hover:border-white/[0.12] transition-all duration-500`}
  >
    {/* Window chrome */}
    <div className="absolute top-0 left-0 right-0 h-9 flex items-center px-4 gap-2 border-b border-white/[0.05] bg-black/20">
      {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
        <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
      ))}
      <div
        className="ml-auto font-mono text-[9px] tracking-widest uppercase opacity-50"
        style={{ color: accent }}
      >
        {title}
      </div>
    </div>

    {/* Abstract dashboard content */}
    <div className="absolute top-9 left-5 right-5 bottom-5 flex gap-3">
      {/* Sidebar placeholder */}
      <div className="w-1/5 flex flex-col gap-2 pt-2 opacity-60">
        {[75, 50, 85, 60].map((w, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full"
            style={{
              width: `${w}%`,
              background: i === 0 ? accent : "rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Chart */}
        <div
          className="flex-1 rounded-xl border border-white/[0.05] relative overflow-hidden"
          style={{ background: `${accent}06` }}
        >
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-4 pb-3 h-3/4">
            {[45, 70, 55, 90, 65, 80, 95, 75, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
                className="flex-1 rounded-t-sm"
                style={{ background: i === 9 ? accent : "rgba(255,255,255,0.08)" }}
              />
            ))}
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 100%, ${accent}15 0%, transparent 55%)`,
            }}
          />
        </div>

        {/* Bottom stat cards */}
        <div className="flex gap-3 h-[30%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-lg border border-white/[0.05] bg-white/[0.02]" />
          ))}
        </div>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-sm">
      <span
        className="flex items-center gap-2 text-sm font-semibold border px-5 py-2.5 rounded-full"
        style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
      >
        View Case Study <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </div>
);

const CaseStudyCard = memo(
  ({ study, index }: { study: (typeof caseStudies)[0]; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group glass rounded-2xl p-6 md:p-8 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-500"
    >
      <ProjectVisual
        accent={study.accent}
        gradient={study.gradient}
        title={study.title}
      />

      {/* Meta */}
      <div className="mt-6 flex items-center gap-2 flex-wrap">
        {study.industry.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
            style={{
              color: study.accent,
              borderColor: `${study.accent}28`,
              background: `${study.accent}08`,
            }}
          >
            {tag}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10px] text-[#8888AA]">{study.year}</span>
      </div>

      <h3
        className="font-bold text-[#F0F0FF] tracking-tight mt-4 mb-3"
        style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
      >
        {study.title}
      </h3>

      <p className="text-[#8888AA] text-[13px] leading-[1.8] mb-5">{study.result}</p>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {study.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#8888AA]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <a 
          href={`/work/${study.id}`}
          className="flex-1 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[#F0F0FF] text-[13px] font-semibold text-center hover:bg-[#6366F1]/10 hover:border-[#6366F1]/30 transition-all duration-300"
        >
          Read Case Study
        </a>
        {(study as typeof caseStudies[0] & { liveUrl?: string }).liveUrl ? (
          <a
            href={(study as typeof caseStudies[0] & { liveUrl?: string }).liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 rounded-xl border text-[13px] font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
            style={{ borderColor: `${study.accent}50`, color: study.accent, background: `${study.accent}10` }}
          >
            View Live Site <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="relative group/nda flex-1">
            <button
              disabled
              className="w-full px-6 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#8888AA]/50 text-[13px] font-semibold cursor-not-allowed flex items-center justify-center gap-2"
            >
              🔒 Under NDA
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0D0D1A] border border-white/10 rounded-lg text-[10px] text-[#8888AA] whitespace-nowrap opacity-0 group-hover/nda:opacity-100 transition-opacity pointer-events-none z-20">
              Client confidentiality agreement in place
            </div>
          </div>
        )}
      </div>
    </motion.article>
  )
);
CaseStudyCard.displayName = "CaseStudyCard";

export const Portfolio = memo(() => (
  <section
    className="py-32 px-6 relative z-10 w-full bg-[#03000A] border-t border-white/[0.04]"
    id="work"
    aria-labelledby="work-heading"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
      >
        <div>
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-4 block">
            Selected Work
          </span>
          <h2
            id="work-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter leading-[1.05]"
            style={{ fontSize: "clamp(32px, 5vw, 62px)" }}
          >
            Selected <span className="text-gradient-full">Work</span>
          </h2>
          <p className="text-[#8888AA] text-[15px] mt-3 max-w-sm leading-relaxed">
            A curated selection of our highest-impact engineering projects.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-[#8888AA] hover:text-[#6366F1] transition-colors text-sm font-medium group">
          View All Projects
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 text-center"
      >
        <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/[0.12] text-[#8888AA] hover:text-[#6366F1] hover:border-[#6366F1]/30 text-sm font-medium transition-all duration-300">
          View All Projects <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  </section>
));
Portfolio.displayName = "Portfolio";
