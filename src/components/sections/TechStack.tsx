"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#F0F0FF" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Framer Motion", color: "#BB4BFF" },
      { name: "Three.js", color: "#6366F1" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", color: "#84CC16" },
      { name: "Python", color: "#FFD43B" },
      { name: "FastAPI", color: "#6366F1" },
      { name: "GraphQL", color: "#E10098" },
      { name: "Rust", color: "#FF6B35" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "OpenAI", color: "#74AA9C" },
      { name: "LangChain", color: "#7B61FF" },
      { name: "Hugging Face", color: "#FFD21E" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", color: "#FF9900" },
      { name: "GCP", color: "#4285F4" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#7B61FF" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#FF6B6B" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Supabase", color: "#3ECF8E" },
    ],
  },
];

const TechItem = memo(
  ({ name, color }: { name: string; color: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/[0.06] hover:border-white/[0.16] transition-all duration-300 cursor-default"
      style={{ "--glow": color } as React.CSSProperties}
    >
      {/* Color swatch / logo placeholder */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <div
          className="w-4 h-4 rounded-sm"
          style={{ background: color, opacity: 0.85 }}
        />
      </div>
      <span className="font-mono text-[10px] text-[#8888AA] group-hover:text-[#F0F0FF] transition-colors duration-300 text-center leading-tight tracking-wide">
        {name}
      </span>
      {/* Soft glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
        style={{ background: `${color}0A` }}
      />
    </motion.div>
  )
);
TechItem.displayName = "TechItem";

export const TechStack = memo(() => (
  <section
    className="py-32 px-6 relative z-10 w-full bg-[#03000A] border-t border-white/[0.04]"
    aria-labelledby="tech-heading"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="text-center mb-16"
      >
        <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-4 block">
          Our Stack
        </span>
        <h2
          id="tech-heading"
          className="font-bold text-[#F0F0FF] tracking-tighter leading-[1.05] mb-5"
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          Our Technology <span className="text-gradient-indigo
">Arsenal</span>
        </h2>
        <p className="text-[#8888AA] max-w-md mx-auto text-[14px] leading-[1.8]">
          We work with the world&apos;s most powerful and proven modern technologies.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {techCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08, duration: 0.5 }}
          >
            <h3 className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#8888AA]/60 mb-3 ml-1">
              {cat.label}
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-3">
              {cat.items.map((item) => (
                <div key={item.name} className="relative">
                  <TechItem name={item.name} color={item.color} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));
TechStack.displayName = "TechStack";
