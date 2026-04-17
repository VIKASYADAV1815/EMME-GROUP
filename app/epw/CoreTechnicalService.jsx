"use client";
import Image from "next/image";
import p3 from "../../assets/epw/P3.png";
import p4 from "../../assets/epw/P4.png";

export default function CoreTechnicalService() {
  const servicesLeft = [
    "Electrical Systems Maintenance",
    "Plumbing Systems Maintenance",
    "Technical Support & Repairs",
  ];
  
  const servicesRight = [
    "Emergency Technical Intervention",
    "Preventive Maintenance Programs",
    "Maintenance Contracts for Businesses"
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Top Left Curve */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#2B4B8C] rounded-br-full opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="relative inline-flex items-center justify-center border-2 border-[#2B4B8C] rounded-full px-6 md:px-12 py-3 bg-white max-w-[95vw]">
            <h2 className="text-lg md:text-3xl font-bold text-black font-quicksand tracking-wider uppercase text-center">
              CORE TECHNICAL SERVICE
            </h2>
            {/* Sparkle Icons */}
            <span className="absolute -top-3 md:-top-4 left-4 md:left-8 text-[#2B4B8C] text-lg md:text-2xl">✦</span>
            <span className="absolute -top-3 md:-top-4 right-4 md:right-8 text-[#2B4B8C] text-lg md:text-2xl">✦</span>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-6 max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="space-y-4">
            {servicesLeft.map((service, index) => (
              <div key={`left-${index}`} className="flex items-start md:items-center gap-3">
                <div className="flex-shrink-0 text-[#E87A24] font-bold text-lg md:text-xl flex mt-0.5 md:mt-0">
                  <span className="translate-x-1">›</span>
                  <span className="text-[#2B4B8C] -translate-x-1">›</span>
                </div>
                <span className="text-black font-medium font-montserrat text-sm md:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {servicesRight.map((service, index) => (
              <div key={`right-${index}`} className="flex items-start md:items-center gap-3">
                <div className="flex-shrink-0 text-[#E87A24] font-bold text-lg md:text-xl flex mt-0.5 md:mt-0">
                  <span className="translate-x-1">›</span>
                  <span className="text-[#2B4B8C] -translate-x-1">›</span>
                </div>
                <span className="text-black font-medium font-montserrat text-sm md:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="relative p-2 border border-gray-200 rounded-2xl shadow-sm bg-white group hover:shadow-md transition-all duration-300">
            <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-64 md:h-80 border border-gray-100">
              <Image src={p3} alt="Electrical Technical Service" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          
          <div className="relative p-2 border border-gray-200 rounded-2xl shadow-sm bg-white group hover:shadow-md transition-all duration-300">
            <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-64 md:h-80 border border-gray-100">
              <Image src={p4} alt="Plumbing Technical Service" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Bottom Text Content */}
        <div className="max-w-4xl mx-auto space-y-6 font-montserrat text-black text-sm md:text-base font-semibold leading-relaxed text-center sm:text-left">
          <p>
            EPW Technical Group maintenance packages are designed to provide businesses with predictable costs and priority technical support. Hours can be used for any required intervention within the electrical and plumbing maintenance scope.
          </p>
          
          <div className="space-y-2">
            <p>For many businesses, a technical problem means lost time, lost customers and unexpected costs.</p>
            <p>EPW Technical Group was created to provide companies with fast, reliable and predictable technical support.</p>
          </div>
        </div>

        {/* Wrench Icon Bottom Center */}
        <div className="flex justify-center mt-10 md:mt-16">
          <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-90">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-3 md:h-4 bg-[#E83524] rounded-full transform rotate-45 border-2 border-white shadow-sm"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 h-3 md:h-4 bg-[#4A4A4A] rounded-full transform -rotate-45 border-2 border-white shadow-sm"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-inner"></div>
          </div>
        </div>

      </div>
    </section>
  );
}