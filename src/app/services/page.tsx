"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Cpu, Cloud, Building2, Palette } from "lucide-react";
import Link from "next/link";

const SERVICES_LIST = [
  {
    id: "web-application-development",
    title: "Web Applications",
    desc: "Lightning-fast, SEO-optimized web systems built with React, Next.js, and TypeScript for global scalability.",
    icon: Globe,
    accent: "#00FFB2"
  },
  {
    id: "ai-machine-learning-africa",
    title: "AI & Machine Learning",
    desc: "Custom models for predictive analytics, NLP, and computer vision tailored for the unique African data context.",
    icon: Cpu,
    accent: "#7B61FF"
  },
  {
    id: "saas-platform-development",
    title: "SaaS Platforms",
    desc: "Complete multi-tenant platform engineering. We handle everything from billing to global edge deployment.",
    icon: Cloud,
    accent: "#FF6B35"
  },
  {
    id: "erp-crm-systems",
    title: "ERP & CRM Systems",
    desc: "Bespoke enterprise systems to automate your workflows, inventory, and finances with absolute precision.",
    icon: Building2,
    accent: "#00FFB2"
  },
  {
    id: "mobile-app-development",
    title: "Mobile Applications",
    desc: "High-performance iOS and Android apps using Flutter. Engineered for deep connectivity in low-bandwidth regions.",
    icon: Smartphone,
    accent: "#7B61FF"
  },
  {
    id: "brand-motion-design",
    title: "Brand & Motion",
    desc: "Dangerous visual identities and high-end 3D motion graphics that position your tech as a market leader.",
    icon: Palette,
    accent: "#FF6B35"
  }
];

export default function ServicesIndex() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 bg-[#03000A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00FFB2] mb-6 block"
          >
            Specializations
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold text-[#F0F0FF] tracking-tighter mb-8 leading-[1.0]">
            Everything We <span className="text-gradient-full">Build.</span>
          </h1>
          <p className="text-[#8888AA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From Nairobi to the world, we design and engineer the digital systems African enterprises use to dominate global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link 
                  href={`/services/${service.id}`}
                  className="block glass rounded-[2.5rem] p-10 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 h-full overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${service.accent}, transparent)` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center text-[#F0F0FF] group-hover:text-[#03000A] group-hover:bg-[#00FFB2] transition-all duration-500 mb-8">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#F0F0FF] mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-[#8888AA] text-[15px] leading-relaxed mb-8 group-hover:text-[#CCCCEE] transition-colors">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#F0F0FF] font-semibold text-[13px] tracking-wide uppercase">
                      Explore Service <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
