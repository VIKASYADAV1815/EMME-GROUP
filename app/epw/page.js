"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/epw/LOGO.png";
import p1 from "../../assets/epw/P1.png";
import p2 from "../../assets/epw/P2.png";
import CoreTechnicalService from "./CoreTechnicalService";
import MaintenancePackages from "./MaintenancePackages";
import WhyChooseUs from "./WhyChooseUs";

export default function EPWPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src={logo} alt="EPW Technical Group Logo" className="h-10 md:h-14 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-blue-950">
            <a href="tel:+35677516307" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <FaPhoneAlt className="text-orange-500" /> +356 77516307
            </a>
            <a href="mailto:epw.tech.group@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <FaEnvelope className="text-orange-500" /> epw.tech.group@gmail.com
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center py-12 md:py-20 relative overflow-hidden">
        
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content (Left Column) */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
                  Electrical & Plumbing Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 font-quicksand leading-[1.1] tracking-tight">
                  EPW Technical <span className="text-orange-500 block mt-2">Group</span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                  Providing professional electrical and plumbing maintenance services across Europe for commercial, retail, and private structures. We deliver reliable support, rapid intervention, and cost-efficient solutions.
                </p>
              </div>

              {/* Key Features Cards */}
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500 group-hover:w-2 transition-all"></div>
                  <h3 className="font-bold text-blue-950 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                    Priority Intervention
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Guaranteed technical intervention within <strong className="text-orange-500 font-bold">1 hour</strong> for urgent requirements.
                  </p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 group-hover:w-2 transition-all"></div>
                  <h3 className="font-bold text-blue-950 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                    Maintenance Packages
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Exclusive support and predictable costs for clients with active maintenance agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Images Composition (Right Column) */}
            <div className="relative h-[400px] sm:h-[500px] w-full mt-8 lg:mt-0">
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-blue-100 to-orange-50 rounded-full blur-3xl -z-10 opacity-70"></div>
              
              {/* Image 1 (Electrical - Top Right) */}
              <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border-4 border-white z-10 transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
                <Image src={p1} alt="Electrical Technical Service" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
              </div>
              
              {/* Image 2 (Plumbing - Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border-4 border-white z-20 transform hover:-translate-y-2 hover:-rotate-1 transition-all duration-500">
                <Image src={p2} alt="Plumbing Technical Service" className="object-cover w-full h-full" />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Core Technical Service Section */}
      <CoreTechnicalService />

      {/* Maintenance Packages Section */}
      <MaintenancePackages />

      {/* Why Choose Us & Footer Section */}
      <WhyChooseUs />

    </div>
  );
}