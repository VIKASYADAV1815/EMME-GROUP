"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EliteWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-8 right-8 z-[9999]"
        >
          <a
            href="https://wa.me/393663078074"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            {/* The "Glow" - Intentionally tight and deep */}
            <div className="absolute inset-0 rounded-[20px] bg-[#25D366] opacity-0 blur-xl group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />

            {/* The Box */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="relative h-[60px] w-[60px] flex items-center justify-center rounded-[20px] bg-[#25D366] overflow-hidden shadow-[0_12px_24px_-6px_rgba(37,211,102,0.5)]"
            >
              {/* Internal Refinement: Double Border for Depth */}
              <div className="absolute inset-0 rounded-[20px] border border-white/20 z-20 pointer-events-none" />
              <div className="absolute inset-[1.5px] rounded-[18.5px] border border-black/10 z-20 pointer-events-none" />
              
              {/* Premium Gradient - Gives the "Jewel" look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 z-10" />

              {/* Icon: Precise Sizing. (32px icon in 60px box = Perfect 1:1.875 Ratio) */}
              <FaWhatsapp className="text-white text-[32px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-30 transition-transform duration-500 group-hover:scale-105" />

              {/* The "Liquid" Shine - High speed, high quality */}
              <motion.div 
                initial={{ x: "-150%", skewX: -45 }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full z-40"
              />
            </motion.div>

            {/* Status Indicator - Integrated into the silhouette */}
            <div className="absolute -top-1 -right-1 z-50">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-[3px] border-white shadow-sm"></span>
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}