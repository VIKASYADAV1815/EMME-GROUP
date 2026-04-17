"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegBuilding, FaWrench, FaChevronRight } from "react-icons/fa";

export default function EntryPage() {
  return (
    <div className="h-screen min-h-[700px] lg:overflow-hidden font-satoshi flex flex-col items-center justify-center relative bg-slate-50 text-slate-600 selection:bg-blue-600 selection:text-white">
      
      {/* --- Premium Light SaaS Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden bg-slate-50">
        
        {/* Unsplash Image Background */}
        <div 
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1675445991060-14c7f43d8fd6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.7) contrast(1.1)'
          }}
        ></div>

        {/* Subtle Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ 
          backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`, 
          backgroundSize: '24px 24px' 
        }}></div>
        
        {/* Premium Gradient Mesh (Soft Glows) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-blue-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-orange-100/60 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
        
        {/* Gradient Mask for fading edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/70 via-transparent to-slate-50/70"></div>
        
        {/* Central Readability Glow */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[60vw] h-[80vh] bg-white/60 rounded-full blur-[120px]"></div>
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
            <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-300/60 transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-100/80 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center border border-blue-100/80 text-blue-600 shadow-sm group-hover:scale-110 group-hover:shadow-blue-200 transition-all duration-500">
                  <FaRegBuilding className="text-2xl" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 flex items-center justify-between">
                    Hotel Care
                    <FaChevronRight className="w-3 h-3 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-0 font-medium">
                    Discover our expertise in hospitality construction and the execution of high-end projects.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* EPW Card */}
          <Link href="/epw" className="group block">
            <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] hover:border-orange-300/60 transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-100/80 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 flex items-center justify-center border border-orange-100/80 text-orange-600 shadow-sm group-hover:scale-110 group-hover:shadow-orange-200 transition-all duration-500">
                  <FaWrench className="text-2xl" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 flex items-center justify-between">
                    EPW Technical
                    <FaChevronRight className="w-3 h-3 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-0 font-medium">
                    Delve into our advanced solutions for electrical and plumbing systems. Reliable and future-proof.
                  </p>
                </div>
              </div>
            </div>
          </Link>

        </motion.div>
      </div>
    </div>
  );
}