"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as SimpleContact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#03000A] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#00FFB2] mb-6 block">Contact Us</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                 Let&apos;s Build the <br /> <span className="text-gradient-full">Future Together</span>
              </h1>
              <p className="text-[#8888AA] text-xl leading-relaxed max-w-2xl mx-auto">
                 Whether you have a fully formed brief or just the seed of an idea, we&apos;re here to help bring it to life.
              </p>
           </motion.div>
        </section>

        {/* Existing Contact Component Reuse */}
        <SimpleContact />

        {/* Map Section Placeholder */}
        <section className="mt-20 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 aspect-video rounded-3xl glass border border-white/[0.08] relative overflow-hidden flex items-center justify-center p-12 text-center">
                 <div className="absolute inset-0 bg-[#03000A]/40 z-10" />
                 {/* This would be an iframe for Google Maps or similar */}
                 <div className="relative z-20">
                    <div className="w-16 h-16 rounded-2xl bg-[#00FFB2]/10 border border-[#00FFB2]/20 flex items-center justify-center mx-auto mb-6">
                       <MapPin className="w-8 h-8 text-[#00FFB2]" />
                    </div>
                    <p className="text-2xl font-bold mb-2">Our Nairobi HQ</p>
                    <p className="text-[#8888AA]">Westlands Business Park, Nairobi, Kenya</p>
                 </div>
              </div>

              <div className="glass rounded-3xl p-10 border border-white/[0.08] flex flex-col justify-center">
                 <h3 className="text-xl font-bold mb-6">Project Checklist</h3>
                 <p className="text-[#8888AA] text-sm mb-6 leading-relaxed">To help us prepare for our first call, please consider having the following ready:</p>
                 <ul className="space-y-4 text-sm text-[#F0F0FF]/80">
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
                       Core business objective
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
                       Target user demographic
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                       Preferred launch timeline
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
                       Key features / MVP scope
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
                       Estimated project budget
                    </li>
                 </ul>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
