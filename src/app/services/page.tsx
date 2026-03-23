"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES_DETAIL = [
  {
    title: "Web Applications",
    problem: "Outdated, slow, or generic web presences that fail to convert high-value users in a competitive digital market.",
    solution: "We build React and Next.js applications that are visually stunning, lightning-fast, and engineered for high conversion.",
    deliverables: ["Custom Next.js Architecture", "Performance Optimization", "SEO Strategy", "Scalable CMS Integration"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    accent: "#00FFB2",
  },
  {
    title: "AI & Machine Learning",
    problem: "Businesses drowning in data but lacking actionable insights or automated intelligence to scale efficiently.",
    solution: "Custom ML models and LLM integrations that turn your data into competitive advantages and automated workflows.",
    deliverables: ["Predictive Analytics", "NLP / LLM Integration", "Automated Data Pipelines", "Computer Vision Solutions"],
    tech: ["Python", "PyTorch", "OpenAI", "TensorFlow"],
    accent: "#7B61FF",
  },
  {
    title: "SaaS Platforms",
    problem: "Multi-tenant platforms often suffer from security vulnerabilities, slow scaling, and complex billing friction.",
    solution: "Secure, API-first SaaS architectures with seamless onboarding, stripe integration, and robust data isolation.",
    deliverables: ["Multi-tenant Database Design", "Subscription & Billing Management", "Advanced Analytics Dashboards", "Third-Party API Integrations"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Supabase"],
    accent: "#00FFB2",
  },
  {
    title: "ERP & CRM Systems",
    problem: "Fragmented tools and off-the-shelf software create operational silos and hidden inefficiencies.",
    solution: "Bespoke internal systems designed for your exact workflow, unifying operations and cutting overhead costs.",
    deliverables: ["Inventory Management", "Client Lifecycle Tracking", "Automated Reporting", "Legacy System Migration"],
    tech: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    accent: "#7B61FF",
  },
  {
    title: "Mobile Applications",
    problem: "Poor performance and lack of offline capabilities in mobile apps lead to high churn and negative user reviews.",
    solution: "Cross-platform apps built for the African context — performant on low-bandwidth and offline-first by default.",
    deliverables: ["iOS & Android Development", "Offline-First Sync Engine", "Biometric Authentication", "Push Notification Systems"],
    tech: ["Flutter", "React Native", "Firebase", "GraphQL"],
    accent: "#FF6B35",
  },
  {
    title: "Brand & Motion Design",
    problem: "Great products often fail because they look unremarkable or feel static in an age of immersive experiences.",
    solution: "Interactive 3D web experiences and motion design systems that make your brand memorable and premium.",
    deliverables: ["Interactive 3D Web Scenes", "Motion Design Systems", "UI/UX Prototyping", "Design Language Systems"],
    tech: ["Three.js", "GSAP", "Framer Motion", "Figma"],
    accent: "#FF6B35",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#03000A] min-h-screen text-[#F0F0FF]">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Expertise in <br /><span className="text-gradient-full">Modern Engineering</span></h1>
            <p className="text-[#8888AA] text-lg leading-relaxed max-w-2xl">
              End-to-end digital engineering across six specialized disciplines. We don&apos;t just build features; we build products that scale businesses.
            </p>
          </motion.div>
        </section>

        {/* Detailed Service List */}
        <div className="space-y-32">
          {SERVICES_DETAIL.map((service, i) => (
            <motion.section
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
               <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="h-px w-20 mb-8" style={{ background: service.accent }} />
                  <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                  <div className="space-y-8">
                     <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8888AA] mb-2">The Problem</h4>
                        <p className="text-[#F0F0FF] text-lg leading-relaxed">{service.problem}</p>
                     </div>
                     <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8888AA] mb-2">Our Solution</h4>
                        <p className="text-[#8888AA] leading-relaxed">{service.solution}</p>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.deliverables.map(item => (
                           <div key={item} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#00FFB2]" />
                              <span className="text-sm font-medium">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className={`glass rounded-3xl p-10 border border-white/[0.08] relative overflow-hidden group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8888AA] mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                     {service.tech.map(t => (
                        <span key={t} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm group-hover:border-[#00FFB2]/30 transition-colors duration-300">
                           {t}
                        </span>
                     ))}
                  </div>

                  <div className="relative z-10 p-6 rounded-2xl bg-[#00FFB2]/5 border border-[#00FFB2]/10">
                     <p className="text-[#8888AA] text-sm mb-4 italic">&quot;Nova Tech delivered beyond our expectations. Their architectural choices made our scaling process completely seamless.&quot;</p>
                     <p className="text-[12px] font-bold text-[#F0F0FF]">James Odhiambo, CTO @ FreightLink</p>
                  </div>

                  <div className="mt-10">
                     <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:border-[#00FFB2]/30 hover:text-[#00FFB2] transition-all duration-300 text-sm font-bold tracking-widest uppercase">
                        Discuss your project <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </motion.section>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="mt-40 text-center py-20 glass rounded-3xl border border-white/[0.08]">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to engineering <br /> your <span className="text-gradient-full">next breakthrough?</span></h2>
           <p className="text-[#8888AA] max-w-xl mx-auto mb-10">
             Whether it&apos;s a complex enterprise platform or a cutting-edge AI integration, we have the technical prowess to bring it to life.
           </p>
           <Link href="/contact" className="inline-flex px-10 py-5 rounded-2xl bg-[#00FFB2] text-[#03000A] font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,255,178,0.4)] transition-all duration-300">
              Get Started Now
           </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
