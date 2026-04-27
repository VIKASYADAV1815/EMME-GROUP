"use client";
import { FaBuilding, FaIndustry, FaStore, FaHotel, FaWarehouse, FaHospital } from "react-icons/fa";

export default function WhatCompaniesDo() {
  const sectors = [
    {
      icon: <FaHotel className="text-3xl" />,
      title: "Hotels & Hospitality",
      description: "Ensuring 24/7 operational excellence for guest comfort.",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      title: "Commercial Offices",
      description: "Maintaining productive environments for modern workspaces.",
      color: "from-orange-400 to-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: <FaStore className="text-3xl" />,
      title: "Retail Chains",
      description: "Rapid interventions to keep stores open and safe.",
      color: "from-yellow-400 to-yellow-500",
      bg: "bg-yellow-50"
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Manufacturing Facilities",
      description: "Heavy-duty electrical and plumbing support.",
      color: "from-slate-600 to-slate-700",
      bg: "bg-slate-50"
    },
    {
      icon: <FaWarehouse className="text-3xl" />,
      title: "Logistics Hubs",
      description: "Preventative care for high-traffic distribution centers.",
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: <FaHospital className="text-3xl" />,
      title: "Healthcare Clinics",
      description: "Critical infrastructure maintenance with strict compliance.",
      color: "from-red-500 to-red-600",
      bg: "bg-red-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold mb-6 shadow-sm">
            What Companies Do
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Industries We Empower
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our specialized technical teams provide tailored maintenance solutions across a diverse range of commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${sector.color} opacity-5 rounded-bl-full -z-10 transition-all group-hover:scale-150`}></div>
              
              <div className={`w-16 h-16 ${sector.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white`}>
                <div className={`bg-clip-text text-transparent bg-gradient-to-r ${sector.color}`}>
                  {sector.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {sector.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}