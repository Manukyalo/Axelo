"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Globe, Users, Trophy, Code2 } from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    title: "Engineering Excellence",
    desc: "We don&apos;t settle for &apos;good enough&apos;. Every line of code is optimized, every pixel is intentional, and every architecture is built to withstand enterprise loads.",
    icon: Code2,
    accent: "#6366F1",
  },
  {
    title: "Global Vision",
    desc: "Founded in Nairobi but engineered for the world. We combine Silicon Valley-level standards with deep insights into Africa&apos;s digital infrastructure.",
    icon: Globe,
    accent: "#7B61FF",
  },
  {
    title: "Customer Obsession",
    desc: "We are partners, not vendors. Your business goals are our engineering requirements. We measure our success by the outcomes we deliver for you.",
    icon: Trophy,
    accent: "#FF6B35",
  },
  {
    title: "Elite Talent",
    desc: "Our team consists of the top 1% of engineering and design talent in the region, bringing together years of experience in high-growth startups and enterprises.",
    icon: Users,
    accent: "#6366F1",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#03000A] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Engineered in Nairobi, <br />
              <span className="text-gradient-full">Built for the World.</span>
            </h1>
            <p className="text-[#8888AA] text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Axelo is a premium software engineering and AI studio. We transform ambitious ideas into market-leading products that scale seamlessly for global enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-3xl overflow-hidden border border-white/[0.08]">
             {[
               { label: "Founded", value: "2022" },
               { label: "Engineers", value: "20+" },
               { label: "Projects", value: "50+" },
               { label: "Continents", value: "3" },
             ].map((stat, i) => (
                <div key={i} className="bg-[#03000A] p-10 flex flex-col items-center justify-center text-center">
                   <p className="text-4xl font-bold text-[#F0F0FF] mb-2">{stat.value}</p>
                   <p className="font-mono text-[10px] tracking-widest text-[#8888AA] uppercase">{stat.label}</p>
                </div>
             ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
              <p className="text-[#8888AA] text-lg leading-relaxed mb-6">
                To be the most trusted engineering partner for enterprises and high-growth startups globally, starting from the heart of Africa.
              </p>
              <p className="text-[#8888AA] text-lg leading-relaxed">
                We believe that the best digital products are born from a fusion of technical mastery, elegant design, and a deep understanding of human needs. Our mission is to build the digital infrastructure that fuels Africa&apos;s next decade of growth and global competitiveness.
              </p>
           </motion.div>
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-10 border border-white/[0.08] relative aspect-square lg:aspect-video flex items-center justify-center overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-[#7B61FF]/5 to-transparent" />
              <div className="relative text-center">
                 <div className="w-20 h-20 rounded-2xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center mx-auto mb-6">
                    <Code2 className="w-10 h-10 text-[#6366F1]" />
                 </div>
                 <p className="text-[12px] font-mono tracking-widest text-[#8888AA] uppercase">Built for Enterprises</p>
              </div>
           </motion.div>
        </section>

        {/* Values */}
        <section className="mb-40">
           <div className="text-center mb-20">
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#6366F1] mb-4 block">Our Values</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Principles That <br /> <span className="text-gradient-full">Drive Us Forward</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-3xl border border-white/[0.08] p-10 hover:border-white/[0.15] transition-all duration-300 flex flex-col items-start gap-6 group"
                >
                   <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${v.accent}12`, border: `1px solid ${v.accent}25` }}
                   >
                      <v.icon 
                        className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" 
                        style={{ color: v.accent }} 
                      />
                   </div>
                   <h3 className="text-2xl font-bold">{v.title}</h3>
                   <p className="text-[#8888AA] leading-relaxed mb-4">{v.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Join our team CTA */}
        <section className="text-center py-24 glass rounded-[40px] border border-white/[0.1] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-transparent pointer-events-none" />
           <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">We&apos;re Always Looking For <br /> <span className="text-gradient-indigo">Exceptional Talent</span></h2>
           <p className="text-[#8888AA] text-lg max-w-xl mx-auto mb-12 relative z-10">
              Join a team of elite engineers and designers building the next generation of digital products.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-2 text-[#6366F1] font-bold tracking-[0.2em] uppercase text-sm hover:gap-4 transition-all duration-300 relative z-10">
              View Open Positions <ArrowRight className="w-4 h-4" />
           </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
