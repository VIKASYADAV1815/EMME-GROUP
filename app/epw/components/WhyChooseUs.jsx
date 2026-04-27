"use client";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaTools, FaGlobeEurope } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGlobeEurope className="text-2xl text-blue-600" />,
      title: "European Coverage",
      description: "Operating across 8 countries with localized expertise.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaClock className="text-2xl text-indigo-600" />,
      title: "24/7 Availability",
      description: "Round-the-clock emergency support for critical systems.",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <FaTools className="text-2xl text-emerald-600" />,
      title: "Certified Technicians",
      description: "Highly trained professionals with industry certifications.",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <FaCheckCircle className="text-2xl text-sky-600" />,
      title: "Quality Guaranteed",
      description: "Rigorous quality control and safety standards.",
      bgColor: "bg-sky-50"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-700 text-sm font-bold mb-6">
            The EPW Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Why choose EPW Technical Group?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We deliver uncompromising quality and rapid response times to ensure your business operations never stop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 group">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
            <Image src="/epw/P5.png" alt="Our Team" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Dedicated Teams</h3>
              <p className="text-indigo-100">Ready to deploy at a moment's notice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
