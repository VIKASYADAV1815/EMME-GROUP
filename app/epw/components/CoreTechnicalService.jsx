"use client";
import Image from "next/image";
import { FaTools, FaCheckCircle } from "react-icons/fa";

export default function CoreTechnicalService() {
  const electricalServices = [
    "Preventative checks for lighting systems and emergency lights",
    "Replacing light bulbs and diffusers",
    "Replacing components of the electrical system (switchboards, distribution boards, lighting panels, general control panels)",
    "General system audits",
  ];

  const plumbingServices = [
    "Preventative checks for sanitary systems (hot and cold water lines)",
    "Replacing gaskets, taps, and mixers",
    "Changing sanitary fixtures (sinks, bidets, toilet bowls, urinals, shower trays, bathtubs)",
    "Draining blockages in siphons or columns using specific products or a pump",
    "General system audits",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
            Core Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Technical Services
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Specialized in comprehensive electrical and plumbing maintenance to ensure your facilities operate at peak efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Services Content */}
          <div className="space-y-12">
            {/* Electrical Services */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <FaTools className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Electrical System Maintenance
                </h3>
              </div>
              <ul className="space-y-5 relative z-10">
                {electricalServices.map((service, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                      <FaCheckCircle className="text-orange-600 flex-shrink-0 text-sm" />
                    </div>
                    <span className="text-slate-700 font-semibold leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plumbing Services */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:-rotate-12 transition-transform duration-300">
                  <FaTools className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Plumbing System Maintenance
                </h3>
              </div>
              <ul className="space-y-5 relative z-10">
                {plumbingServices.map((service, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <FaCheckCircle className="text-blue-600 flex-shrink-0 text-sm" />
                    </div>
                    <span className="text-slate-700 font-semibold leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Image Grid */}
          <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 shadow-indigo-900/10">
            <Image
              src="https://images.unsplash.com/photo-1683295083329-4d4738291f3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technical Services Overview"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h4 className="text-white text-2xl font-bold mb-2">Professional Execution</h4>
              <p className="text-indigo-100 font-medium">All interventions are documented and certified.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
