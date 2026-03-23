"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Engineers & Designers", value: "20+", accent: "#00FFB2" },
  { label: "Industries Served", value: "12", accent: "#7B61FF" },
  { label: "Years Building", value: "4", accent: "#FF6B35" },
];

export function StatsRow() {
  return (
    <section className="py-20 relative z-10 w-full bg-[#03000A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] rounded-[2rem] overflow-hidden border border-white/[0.08]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#03000A] p-12 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                className="text-6xl md:text-7xl font-bold tracking-tighter mb-4"
                style={{ color: s.accent }}
              >
                {s.value}
              </motion.span>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#8888AA] group-hover:text-[#F0F0FF] transition-colors duration-300">
                {s.label}
              </span>
              
              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
