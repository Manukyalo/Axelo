"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Partnered with enterprise clients across 3 continents, delivering cloud-native platforms handling millions of daily transactions.",
    accent: "#00FFB2",
  },
  {
    year: "2025",
    title: "AI Integration",
    desc: "Launched proprietary ML pipelines, cutting client operational costs by 40% on average through intelligent automation.",
    accent: "#7B61FF",
  },
  {
    year: "2026",
    title: "Spatial Computing",
    desc: "Pioneering immersive 3D interfaces that redefine how enterprises present their products globally.",
    accent: "#FF6B35",
  },
];

const stats = [
  { value: "20+", label: "Engineers & Designers", accent: "#00FFB2" },
  { value: "5", label: "Countries Served", accent: "#7B61FF" },
  { value: "50+", label: "Enterprise Projects", accent: "#FF6B35" },
  { value: "98%", label: "Client Retention", accent: "#00FFB2" },
];

export const About = memo(() => (
  <section
    className="py-32 px-6 relative z-10 w-full bg-[#0D0D1A] border-t border-white/[0.04]"
    id="about"
    aria-labelledby="about-heading"
  >
    {/* Ambient glows */}
    <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 rounded-full bg-[#00FFB2]/4 blur-[120px] pointer-events-none" />
    <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 rounded-full bg-[#7B61FF]/4 blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* ── Left: Large Statement ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-6 block">
            Our Vision
          </span>

          <h2
            id="about-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter leading-[1.08] mb-8"
            style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
          >
            We are not a typical{" "}
            <span className="text-gradient-mint">software agency.</span>
          </h2>

          <div className="space-y-5 text-[#8888AA] text-[15px] leading-[1.85] mb-10">
            <p>
              We are an engineering studio obsessed with the craft of building products
              that matter. Founded in Nairobi, built for the world — Nova Tech Africa
              combines Silicon Valley-level engineering with a deep understanding of
              Africa&apos;s unique digital landscape.
            </p>
            <p>
              Our team of <span className="text-[#F0F0FF] font-semibold">20+ engineers, designers, and AI specialists</span> has
              delivered enterprise solutions for clients across{" "}
              <span className="text-[#F0F0FF] font-semibold">
                Kenya, Nigeria, South Africa, the UK, and the United States.
              </span>
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 bg-[#0D0D1A] hover:bg-[#14142A] transition-colors duration-300"
              >
                <p
                  className="font-mono text-2xl font-bold mb-1"
                  style={{ color: s.accent }}
                >
                  {s.value}
                </p>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8888AA]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Timeline ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Timeline */}
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                className="relative pl-8 pb-9 last:pb-0 group"
              >
                {/* Vertical line */}
                {i < milestones.length - 1 && (
                  <div
                    className="absolute left-[5px] top-3 bottom-0 w-px"
                    style={{
                      background: `linear-gradient(180deg, ${m.accent}50 0%, ${milestones[i + 1].accent}15 100%)`,
                    }}
                  />
                )}
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-3 h-3 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_currentColor]"
                  style={{ background: m.accent, color: m.accent }}
                />
                <span
                  className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1 block"
                  style={{ color: m.accent }}
                >
                  {m.year}
                </span>
                <h3 className="text-[15px] font-bold text-[#F0F0FF] mb-1.5 tracking-tight">
                  {m.title}
                </h3>
                <p className="text-[#8888AA] text-[13px] leading-[1.8]">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 border border-[#00FFB2]/15"
          >
            <p className="text-[#8888AA] text-[13px] leading-relaxed mb-4">
              Ready to build the next chapter of your digital journey with a team
              that delivers to Silicon Valley standards?
            </p>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[13px] font-semibold text-[#00FFB2] hover:gap-3 flex items-center gap-2 transition-all duration-300"
            >
              Start a conversation →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
));
About.displayName = "About";
