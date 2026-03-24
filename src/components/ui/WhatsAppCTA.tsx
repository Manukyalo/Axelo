"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/254700000000?text=Hi%20Axelo%2C%20I%27d%20like%20to%20discuss%20a%20project";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2C8.268 2 2 8.268 2 16c0 2.45.633 4.748 1.74 6.745L2 30l7.448-1.716A13.941 13.941 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
        fill="white"
      />
      <path
        d="M23.472 20.108c-.31-.155-1.835-.906-2.12-.99-.284-.077-.49-.116-.697.116-.207.232-.8.99-.98 1.197-.18.206-.36.231-.67.077-.31-.155-1.308-.482-2.49-1.536-.92-.82-1.54-1.832-1.72-2.143-.18-.31-.019-.478.135-.632.139-.139.31-.36.465-.542.155-.18.207-.31.31-.516.103-.207.052-.387-.026-.542-.077-.155-.697-1.68-.955-2.3-.252-.604-.508-.52-.697-.53a12.52 12.52 0 0 0-.593-.01c-.206 0-.542.077-.826.387-.284.31-1.08 1.055-1.08 2.574 0 1.52 1.107 2.99 1.261 3.196.155.206 2.179 3.326 5.278 4.664.737.318 1.312.508 1.759.65.74.235 1.413.202 1.944.123.593-.09 1.835-.75 2.094-1.474.258-.724.258-1.345.18-1.474-.077-.13-.283-.207-.593-.362Z"
        fill="#6366F1"
      />
    </svg>
  );
}

export function WhatsAppCTA() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipTimer, setTooltipTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    const t = setTimeout(() => setShowTooltip(true), 1000);
    setTooltipTimer(t);
  };

  const handleMouseLeave = () => {
    if (tooltipTimer) clearTimeout(tooltipTimer);
    setTooltipTimer(null);
    setShowTooltip(false);
  };

  const btnSize = isMobile ? 48 : 56;

  return (
    <div
      className="fixed z-[9999]"
      style={{ bottom: 24, right: 24 }}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Mobile static label */}
      {isMobile && (
        <div className="flex items-center gap-2 mb-1 justify-end">
          <span className="text-[10px] font-mono text-white/80 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
            Chat with us
          </span>
        </div>
      )}

      <div className="relative flex items-center">
        {/* Desktop tooltip */}
        <AnimatePresence>
          {showTooltip && !isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 whitespace-nowrap bg-[#1A1A2E] text-[#F0F0FF] text-[12px] font-medium px-4 py-2 rounded-xl border border-white/10 shadow-xl pointer-events-none"
            >
              Chat with us on WhatsApp
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#1A1A2E]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            width: btnSize,
            height: btnSize,
            backgroundColor: "#6366F1",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
            cursor: "pointer",
          }}
          className="hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] transition-shadow duration-300"
          aria-label="Chat with Axelo on WhatsApp"
        >
          <WhatsAppIcon size={isMobile ? 24 : 28} />
        </motion.a>
      </div>
    </div>
  );
}
