"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phases = [
  {
    number: "01",
    name: "Discovery & Strategy",
    timeline: "Week 1–2",
    description:
      "Deep-dive into your business, users, and competitive landscape. We define scope, technical architecture, and a measurable success criteria — so everyone builds toward the same north star.",
    accent: "#00FFB2",
  },
  {
    number: "02",
    name: "Design & Prototyping",
    timeline: "Week 2–3",
    description:
      "High-fidelity UI/UX design, interactive prototypes, design system creation, and stakeholder feedback loops. You see exactly what we'll build before a single line of code is written.",
    accent: "#7B61FF",
  },
  {
    number: "03",
    name: "Engineering & Development",
    timeline: "Week 3–10",
    description:
      "Agile sprints, weekly demos, CI/CD pipelines from day one. Every feature is code-reviewed, tested, and deployed to a staging environment for your approval before going live.",
    accent: "#00FFB2",
  },
  {
    number: "04",
    name: "Launch & Scale",
    timeline: "Week 10+",
    description:
      "Zero-downtime deployment, performance monitoring, analytics integration, and ongoing retainer support. We don't disappear after launch — we scale with you.",
    accent: "#FF6B35",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 relative z-10 w-full bg-[#0D0D1A] border-t border-white/[0.04]"
      id="process"
      aria-labelledby="process-heading"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#7B61FF]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">
            Our Method
          </span>
          <h2
            id="process-heading"
            className="font-bold text-[#F0F0FF] tracking-tighter leading-[1.05] mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            How We <span className="text-gradient-mint">Work</span>
          </h2>
          <p className="text-[#8888AA] max-w-md mx-auto text-[15px] leading-[1.8]">
            A battle-tested 4-phase process that delivers on time, every time.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mb-20">
          {/* Connecting line */}
          <div className="relative h-px bg-white/[0.06] mx-16 mb-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                width: lineWidth,
                background: "linear-gradient(90deg, #00FFB2, #7B61FF, #FF6B35)",
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 -mt-px">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col pt-8"
              >
                {/* Dot on the line */}
                <div
                  className="w-4 h-4 rounded-full -mt-[49px] mb-7 shadow-[0_0_12px_currentColor] border-2 border-[#0D0D1A]"
                  style={{ background: phase.accent, color: phase.accent }}
                />

                {/* Phase number */}
                <span
                  className="font-mono text-[11px] tracking-[0.22em] uppercase mb-2"
                  style={{ color: phase.accent }}
                >
                  {phase.number}
                </span>

                <p className="font-mono text-[10px] text-[#8888AA] tracking-widest uppercase mb-3">
                  {phase.timeline}
                </p>

                <h3 className="text-[15px] font-bold text-[#F0F0FF] mb-3 tracking-tight">
                  {phase.name}
                </h3>
                <p className="text-[#8888AA] text-[12px] leading-[1.8]">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-0 lg:hidden">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-10 pb-10 last:pb-0"
            >
              {/* Vertical line */}
              {i < phases.length - 1 && (
                <div
                  className="absolute left-[7px] top-4 bottom-0 w-px"
                  style={{ background: `linear-gradient(180deg, ${phase.accent}50, ${phases[i+1].accent}20)` }}
                />
              )}

              {/* Dot */}
              <div
                className="absolute left-0 top-0 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                style={{ background: phase.accent, color: phase.accent }}
              />

              <span
                className="font-mono text-[10px] tracking-[0.22em] uppercase mb-1 block"
                style={{ color: phase.accent }}
              >
                {phase.number} · {phase.timeline}
              </span>
              <h3 className="text-[16px] font-bold text-[#F0F0FF] mb-2 tracking-tight">
                {phase.name}
              </h3>
              <p className="text-[#8888AA] text-[13px] leading-[1.8]">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
