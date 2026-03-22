"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NexGen ERP",
    category: "Cloud Software",
    description: "A comprehensive, AI-driven enterprise resource planning system tailored for multinational logistics.",
  },
  {
    title: "Aura Pay",
    category: "FinTech Platform",
    description: "Secure, high-frequency trading platform with real-time analytics and predictive ML modeling.",
  },
  {
    title: "Lumina Health",
    category: "SaaS Application",
    description: "Healthcare management platform connecting over 10,000 providers with predictive patient care.",
  }
];

const ProjectItem = memo(({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    } gpu`}
  >
    {/* Fake Image Container */}
    <div className="flex-1 w-full aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden group cursor-pointer shadow-2xl bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#7000ff]/20 group-hover:scale-105 transition-transform duration-700 pointer-events-none z-10" />
      <div className="absolute inset-0 border border-white/10 rounded-2xl glass flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#7000ff] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
        <span className="text-gray-500 font-heading text-xl md:text-3xl group-hover:text-white transition-colors duration-500 z-20">
          {project.title} Dashboard
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col justify-center">
      <span className="text-[#00f0ff] font-semibold tracking-widest uppercase text-sm mb-4">
        {project.category}
      </span>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">{project.title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        {project.description}
      </p>
      <button className="self-start px-8 py-4 rounded-full border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300 font-medium tracking-wide gpu">
        Read Case Study
      </button>
    </div>
  </motion.div>
));

ProjectItem.displayName = "ProjectItem";

export const Portfolio = memo(() => {
  return (
    <section className="py-24 px-6 relative z-10 w-full bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Delivering excellence across industries.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-[#00f0ff] transition-colors pb-2">
            View All Work <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

