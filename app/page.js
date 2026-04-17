"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegBuilding, FaWrench, FaChevronRight } from "react-icons/fa";

export default function EntryPage() {
  return (
    <div className="h-screen min-h-[700px] lg:overflow-hidden font-satoshi flex flex-col items-center justify-center relative bg-slate-50 text-slate-600 selection:bg-blue-600 selection:text-white">
      
      {/* --- Premium Light SaaS Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ 
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`, 
          backgroundSize: '48px 48px' 
        }}></div>
        
        {/* Soft Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        
        {/* Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50"></div>
      </div>

      {/* --- Main Content (2-Column Layout on Desktop) --- */}
      <div className="z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center h-full py-12 overflow-y-auto lg:overflow-visible">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-max">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
              Industrial Excellence
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            EMME CONSTRUCTION LTD
          </h1>

          <div className="space-y-4 text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
            <p>
              At <strong className="text-slate-900 font-bold">EMME Construction Ltd</strong>, we bring visions to life through precision, expertise, and uncompromising quality. Built upon solid foundations across multiple sectors, we specialize in delivering high-performance construction solutions, custom-tailored to meet diverse industrial requirements.
            </p>
            <p>
              Our core competencies span civil, industrial, and maritime construction—fields in which we execute projects characterized by structural integrity and technical excellence. We also extend our capabilities to the hospitality sector, creating spaces that seamlessly blend functionality with refined design.
            </p>
            <p>
              Beyond construction itself, we provide comprehensive solutions for plumbing and electrical systems, ensuring that every project is equipped with infrastructure that is reliable, efficient, and future-proof.
            </p>
            <div className="pl-4 border-l-2 border-blue-500 mt-6">
              <p className="text-slate-500 italic font-semibold text-sm">
                "From concept to completion, EMME Construction Ltd is committed to building with trust, innovation, and excellence."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0 lg:pl-6"
        >
          <div className="mb-2 text-center lg:text-left">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Explore Our Divisions
            </h2>
            <p className="text-xs text-slate-500 mt-1">Select the section that best suits your needs.</p>
          </div>

          {/* HotelCare Card */}
          <Link href="/home" className="group block">
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-all duration-500"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <FaRegBuilding className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    Hotel Care
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    Discover our expertise in hospitality construction and the execution of high-end projects.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-xs group-hover:text-blue-700">
                    <span>Explore Division</span>
                    <FaChevronRight className="ml-1 w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* EPW Card */}
          <Link href="/epw" className="group block">
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-100 transition-all duration-500"></div>
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  <FaWrench className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    EPW Technical
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    Delve into our advanced solutions for electrical and plumbing systems. Reliable and future-proof.
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold text-xs group-hover:text-orange-700">
                    <span>Explore Division</span>
                    <FaChevronRight className="ml-1 w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </motion.div>
      </div>
    </div>
  );
}