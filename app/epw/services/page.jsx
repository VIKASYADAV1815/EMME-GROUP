"use client";
import CoreTechnicalService from "../components/CoreTechnicalService";
import WhatCompaniesDo from "../components/WhatCompaniesDo";

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 text-center border-b-4 border-orange-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" alt="Services Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/80"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-300 text-sm font-bold mb-6 shadow-sm">
            Technical Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto">
            Comprehensive electrical and plumbing maintenance tailored for commercial facilities.
          </p>
        </div>
      </div>

      <WhatCompaniesDo />
      <CoreTechnicalService />
    </div>
  );
}
