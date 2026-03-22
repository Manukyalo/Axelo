import { HeroSceneDynamic as HeroScene } from "@/components/3d/HeroSceneDynamic";
import { HeroContent } from "@/components/sections/HeroContent";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#050505]">
      {/* 3D Background - Loaded dynamically to prioritize LCP */}
      <HeroScene />
      
      {/* Immersive Freestanding Hero Typography */}
      <HeroContent />

      {/* 2D Scroll Experience Sections */}
      <div className="relative z-10 w-full flex flex-col">
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
