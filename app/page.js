"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EntryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#fafafa] selection:bg-black selection:text-white">
      
      {/* --- High-Contrast Background Pattern --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Grid/Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.6]" style={{ 
          backgroundImage: `radial-gradient(#d1d5db 2px, transparent 2px)`, 
          backgroundSize: '32px 32px' 
        }}></div>
        
        {/* The Image Pattern - Highlighted more */}
        <div 
          className="absolute inset-0 opacity-[0.45] mix-blend-multiply"
          style={{ 
            backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/004/303/373/original/gradient-islamic-pattern-background-vector.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.3)'
          }}
        ></div>

        {/* The Gradient Fade (Vignette) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/80 via-transparent to-[#fafafa]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa]/80 via-transparent to-[#fafafa]/80"></div>
      </div>

      {/* --- Ambient Glow Dots --- */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-orange-200/40 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- Main Content --- */}
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-slate-100 border border-slate-200">
            <p className="text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-slate-500">
              Industrial Excellence
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl font-[1000] text-slate-900 mb-8 tracking-tighter leading-none">
            EMME GROUP
          </h1>
          <p className="text-slate-600 text-base md:text-xl mb-14 font-semibold leading-relaxed max-w-xl mx-auto opacity-90">
            Premium technical and engineering solutions. Select your division to begin.
          </p>
        </motion.div>

        {/* --- Sharp & High-Highlight Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-sm sm:max-w-3xl mx-auto">
          
          {/* HotelCare Button */}
          <Link href="/home" className="group w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-5 rounded-2xl border-2 border-blue-600 bg-white shadow-[0_15px_35px_rgba(37,99,235,0.15)] transition-all duration-300 flex items-center justify-between sm:justify-start gap-6"
            >
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-black uppercase tracking-widest text-slate-900 leading-tight">
                  Hotelcare
                </span>
                <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-tighter">
                  Technical Service
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-300 group-hover:bg-blue-700 transition-all duration-300">
                <span className="text-xl font-bold">→</span>
              </div>
            </motion.div>
          </Link>

          {/* EPW Technical Button */}
          <Link href="/epw" className="group w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-5 rounded-2xl border-2 border-orange-500 bg-white shadow-[0_15px_35px_rgba(234,88,12,0.15)] transition-all duration-300 flex items-center justify-between sm:justify-start gap-6"
            >
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-black uppercase tracking-widest text-slate-900 leading-tight">
                  EPW Technical
                </span>
                <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-tighter">
                  Engineering Hub
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-300 group-hover:bg-orange-600 transition-all duration-300">
                <span className="text-xl font-bold">→</span>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-10 w-full flex justify-center opacity-30">
        <div className="h-[1px] w-20 bg-slate-400"></div>
      </div>
      
    </div>
  );
}