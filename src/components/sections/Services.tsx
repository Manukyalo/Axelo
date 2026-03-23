"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "We architect lightning-fast, SEO-optimized web applications using React, Next.js, and TypeScript — built to handle millions of users with zero downtime.",
    accent: "#00FFB2",
    tag: "Full-Stack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8l3 3-3 3M11 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description:
      "Custom AI models, LLM integrations, and intelligent data pipelines that automate workflows and generate real business intelligence for African enterprises.",
    accent: "#7B61FF",
    tag: "Artificial Intelligence",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.6 5.6l1.4 1.4M16.9 16.9l1.4 1.4M5.6 18.4l1.4-1.4M16.9 7.1l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS architectures engineered for global scale — with robust auth, billing integration, analytics dashboards, and API-first design.",
    accent: "#00FFB2",
    tag: "Cloud Native",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "erp-crm-systems",
    title: "ERP & CRM Systems",
    description:
      "Bespoke enterprise resource planning and CRM systems tailored to your exact operational workflows — replacing off-the-shelf inefficiencies with precision tools.",
    accent: "#7B61FF",
    tag: "Enterprise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 5V3M7 5V3M17 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 10h.01M6 14h.01M10 10h8M10 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Cross-platform Flutter and React Native apps for iOS and Android — optimized for low-bandwidth African network conditions with offline-first architecture.",
    accent: "#FF6B35",
    tag: "Mobile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 6h10" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
      </svg>
    ),
  },
  {
    id: "brand-motion-design",
    title: "Brand & Motion Design",
    description:
      "Immersive 3D web experiences, interactive brand identities, and motion design systems that make your product impossible to forget.",
    accent: "#FF6B35",
    tag: "Creative",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L9.5 9.5H2l6.2 4.5L5.7 21.5 12 17l6.3 4.5-2.5-7.5L22 9.5h-7.5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const ServiceCard = memo(({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8%" }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -8 }}
    className="relative group glass rounded-2xl p-8 overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-all duration-500 cursor-default"
  >
    {/* Gradient border — glows on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${service.accent}18, transparent 60%)`,
      }}
    />
    {/* Top line glow */}
    <div
      className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }}
    />
    {/* Radial glow behind icon */}
    <div
      className="absolute -top-8 -left-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
      style={{ background: service.accent }}
    />

    {/* Tag */}
    <span
      className="inline-block font-mono text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border mb-5"
      style={{ color: service.accent, borderColor: `${service.accent}28`, background: `${service.accent}08` }}
    >
      {service.tag}
    </span>

    {/* Icon */}
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
      style={{ background: `${service.accent}10`, border: `1px solid ${service.accent}22`, color: service.accent }}
    >
      {service.icon}
    </div>

    <h3 className="text-[17px] font-bold text-[#F0F0FF] mb-3 tracking-tight leading-snug">
      {service.title}
    </h3>
    <p className="text-[#8888AA] text-[13px] leading-[1.8] mb-6 group-hover:text-[#AAAACC] transition-colors duration-500">
      {service.description}
    </p>

    <span
      className="text-[12px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300"
      style={{ color: service.accent }}
    >
      Explore →
    </span>
  </motion.article>
));
ServiceCard.displayName = "ServiceCard";

export const Services = memo(() => (
  <section
    className="py-32 px-6 relative z-10 w-full bg-[#03000A]"
    id="services"
    aria-labelledby="services-heading"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#00FFB2]/40 to-transparent" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">
          Core Capabilities
        </span>
        <h2
          id="services-heading"
          className="font-bold text-[#F0F0FF] tracking-tighter leading-[1.05] mb-5"
          style={{ fontSize: "clamp(34px, 5vw, 68px)" }}
        >
          What We <span className="text-gradient-mint">Build</span>
        </h2>
        <p className="text-[#8888AA] max-w-lg mx-auto text-[15px] leading-[1.8]">
          End-to-end digital engineering across six specialized disciplines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
));
Services.displayName = "Services";
