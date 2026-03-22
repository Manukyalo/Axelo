import dynamic from "next/dynamic";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

// Aggressive performance: Load 3D scene only on client, non-blocking
const HeroScene = dynamic(() => import("@/components/3d/HeroScene").then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050505]" />
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050505]">
      {/* 3D Background - Loaded dynamically to prioritize LCP */}
      <HeroScene />
      
      {/* Hero Content Overlay */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pointer-events-none">
        <div className="glass p-8 md:p-12 rounded-3xl max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,240,255,0.05)] border border-white/10 pointer-events-auto mt-16 md:mt-0 gpu">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tighter leading-tight drop-shadow-2xl">
            Building Africa&apos;s <br />
            <span className="text-gradient">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Innovation in elegant software, AI integrations, and resilient platforms. We engineer premium digital experiences for tomorrow&apos;s global market leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] gpu">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 glass text-white font-semibold tracking-wide hover:bg-white/10 transition-colors duration-300 gpu">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* 2D Scroll Experience Sections */}
      <div className="relative z-10 w-full bg-[#050505] flex flex-col">
        <Services />
        <About />
        <Portfolio />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
