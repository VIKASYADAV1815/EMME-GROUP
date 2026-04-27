"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBolt, FaWater, FaChartLine, FaShieldAlt } from "react-icons/fa";
import WhyChooseUs from "./components/WhyChooseUs";

export default function EPWPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section - Colorful Premium Light Theme */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-blue-900/80 to-slate-900/95"></div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px] z-0 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[100px] z-0 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-yellow-300 text-sm font-semibold mb-8">
                <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
                Premium Technical Maintenance
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
                Smart infrastructure for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
                  modern enterprises.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
                European-wide electrical and plumbing maintenance with guaranteed 1-hour response times. Keep your operations running seamlessly with our certified technical teams.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/epw/contact">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 border border-orange-400">
                    Get a free quote <FaArrowRight className="text-sm" />
                  </button>
                </Link>
                <Link href="/epw/services">
                  <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm">
                    Explore services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Structured Components instead of a giant image */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 translate-y-8 group hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
                    <FaBolt className="text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Electrical</h3>
                  <p className="text-blue-100 text-sm">Full grid audits, lighting, and power repairs.</p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-md">Online</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 -translate-y-4 group hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-blue-400/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                    <FaWater className="text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Plumbing</h3>
                  <p className="text-blue-100 text-sm">Sanitary systems and leak detection.</p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-md">Online</span>
                  </div>
                </div>

                {/* Card 3 (Image integration) */}
                <div className="col-span-2 bg-white/10 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/20 flex items-center gap-6 mt-4 group hover:bg-white/20 transition-all">
                   <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/20">
                      <Image src="/epw/P2.png" alt="Operations" fill className="object-cover" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white mb-1">Live Monitoring</h3>
                     <p className="text-blue-100 text-sm">24/7 technical dispatch center across 8 countries.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="py-4">
              <p className="text-4xl font-extrabold text-indigo-600 tracking-tight">8+</p>
              <p className="text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">European Countries</p>
            </div>
            <div className="py-4">
              <p className="text-4xl font-extrabold text-blue-600 tracking-tight">24/7</p>
              <p className="text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">Dedicated Support</p>
            </div>
            <div className="py-4">
              <p className="text-4xl font-extrabold text-indigo-600 tracking-tight">1h</p>
              <p className="text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wider">Guaranteed Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Structured Image Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] -z-10"></div>
              <div className="space-y-4 translate-y-8">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-white">
                  <Image src="/epw/P2.png" alt="Maintenance 1" fill className="object-cover" />
                </div>
                <div className="bg-indigo-600 rounded-3xl p-6 shadow-lg text-white">
                  <FaChartLine className="text-3xl mb-4 text-indigo-200" />
                  <p className="font-bold text-lg leading-tight">Optimizing performance daily.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                  <FaShieldAlt className="text-3xl mb-4 text-blue-500" />
                  <p className="font-bold text-slate-900 text-lg leading-tight">Certified Quality Assurance</p>
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-white">
                  <Image src="/epw/P3.png" alt="Maintenance 2" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                Comprehensive Interventions
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Complete technical coverage for your facilities.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our certified technicians specialize in both preventive and corrective maintenance for commercial and industrial facilities. From complex electrical grids to high-capacity plumbing systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBolt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Electrical Maintenance</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Full grid audits, lighting solutions, and power system repairs ensuring 100% uptime.</p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWater className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Plumbing Systems</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Sanitary installations, leak detection, and efficient water management systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden text-center">
        {/* Custom Pattern & Yellow/Orange Blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 z-0"></div>
        {/* Custom Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply z-0"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
            Ready to secure your infrastructure?
          </h2>
          <p className="text-orange-50 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join hundreds of European businesses that trust EPW Technical Group with their critical maintenance needs.
          </p>
          <Link href="/epw/contact">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto hover:scale-105 active:scale-95 border border-slate-700">
              Request a free consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
