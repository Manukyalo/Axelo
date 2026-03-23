"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal after 1.2s to make sure Three.js is ready
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#03000A] flex items-center justify-center p-6"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00FFB2] via-[#7B61FF] to-[#FF6B35] flex items-center justify-center shadow-[0_0_50px_rgba(0,255,178,0.3)]"
            >
              <div className="w-12 h-12 bg-[#03000A] rounded-xl rotate-45 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-[#00FFB2] to-[#7B61FF] opacity-80" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="text-center"
            >
               <h2 className="text-2xl font-bold text-[#F0F0FF] tracking-tighter uppercase mb-2">
                 Nova Tech <span className="text-[#00FFB2]">Africa</span>
               </h2>
               <div className="w-48 h-px bg-white/10 relative overflow-hidden mx-auto">
                 <motion.div 
                   initial={{ x: "-100%" }}
                   animate={{ x: "100%" }}
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFB2] to-transparent"
                 />
               </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
