import { Navbar } from "@/components/layout/Navbar";
import { HeroSceneDynamic as HeroScene } from "@/components/3d/HeroSceneDynamic";
import { HeroContent } from "@/components/sections/HeroContent";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { StatsRow } from "@/components/sections/StatsRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#03000A]">
        {/* Hero — Full viewport with 3D particle field */}
        <div className="relative w-full">
          <HeroScene />
          <HeroContent />
        </div>

        {/* Content Sections */}
        <div className="relative z-10 w-full flex flex-col">
          <TrustBar />
          <Services />
          <Portfolio />
          <Process />
          <About />
          <TechStack />
          <StatsRow />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
