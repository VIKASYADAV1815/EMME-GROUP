"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EntryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#fafafa] selection:bg-blue-600 selection:text-white">
      
      {/* --- High-Opacity SaaS Background Pattern --- */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.35]" 
        style={{ 
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/004/303/373/original/gradient-islamic-pattern-background-vector.jpg')`,
          backgroundSize: '800px', // Pattern size adjustment
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      ></div>

      {/* --- Ambient Lighting --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- Main Content --- */}
      <div className="z-10 text-center px-6 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-[1000] text-slate-900 mb-4 tracking-[-0.06em] leading-none">
            EMME<span className="text-blue-600">.</span>GROUP
          </h1>
          <p className="text-slate-500 text-base md:text-lg mb-12 font-semibold tracking-tight">
            Select a division to manage your operations.
          </p>
        </motion.div>

        {/* --- Sleek Wide Buttons --- */}
        <div className="flex flex-col md:flex-row gap-5 max-w-3xl mx-auto">
          
          {/* HotelCare - Sleek Wide Button */}
          <Link href="/home" className="group flex-1">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden h-28 px-8 rounded-[1.25rem] bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 flex items-center justify-between group-hover:border-blue-500 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                   <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">HotelCare</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hospitality Service</p>
                </div>
              </div>
              <div className="text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all font-black text-2xl">
                →
              </div>
            </motion.div>
          </Link>

          {/* EPW Technical - Sleek Wide Button */}
          <Link href="/epw" className="group flex-1">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden h-28 px-8 rounded-[1.25rem] bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 flex items-center justify-between group-hover:border-orange-500 group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">EPW Technical</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Engineering Solutions</p>
                </div>
              </div>
              <div className="text-orange-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all font-black text-2xl">
                →
              </div>
            </motion.div>
          </Link>

        </div>
      </div>

      {/* --- Micro-Copy Footer --- */}
      <footer className="absolute bottom-8 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
        Industrial Standard • Since 1998
      </footer>
    </div>
  );
}