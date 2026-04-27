"use client";
import Image from "next/image";
import WhyChooseUs from "../components/WhyChooseUs";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 text-center border-b-4 border-yellow-400 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="About Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/80"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-sm font-bold mb-6 shadow-sm">
            Company Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
            About EPW Technical Group
          </h1>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto">
            Setting the European standard for commercial infrastructure maintenance.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  EPW Technical Group was founded with a singular purpose: to provide unparalleled reliability in electrical and plumbing maintenance across Europe. We understand that in today's fast-paced business environment, infrastructure downtime is not an option.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-4xl font-extrabold text-orange-500 mb-2">1h</p>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Emergency Response</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-orange-500 mb-2">8</p>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">European Countries</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/epw/P1.png" alt="EPW Operations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
