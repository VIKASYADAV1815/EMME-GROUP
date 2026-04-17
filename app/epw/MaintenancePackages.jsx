"use client";

export default function MaintenancePackages() {
  const packages = [
    { hours: 50, electrical: "€ 1,900", plumbing: "€ 1,700", mixed: "€ 1,800" },
    { hours: 100, electrical: "€ 3,400", plumbing: "€ 3,000", mixed: "€ 3,300" },
    { hours: 200, electrical: "€ 6.400,00", plumbing: "€ 6.200,00", mixed: "€ 6.300,00" },
    { hours: 500, electrical: "€ 15.000,00", plumbing: "€ 14.000,00", mixed: "€ 14.500,00" },
    { hours: 1000, electrical: "€ 27.000,00", plumbing: "€ 25.000,00", mixed: "€ 26.000,00" },
    { hours: 2000, electrical: "€ 50.000,00", plumbing: "€ 46.000,00", mixed: "€ 48.000,00" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Area */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="relative inline-block w-full max-w-3xl">
            {/* Background Blue Box */}
            <div className="absolute inset-0 bg-[#2B4B8C] translate-y-3 translate-x-3 md:translate-x-4 md:translate-y-4 rounded-sm"></div>
            
            {/* Foreground Orange Box */}
            <div className="relative bg-[#E87A24] text-white px-6 md:px-12 py-6 md:py-8 flex items-center justify-center text-center shadow-lg rounded-sm">
              {/* Left Circle */}
              <div className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 w-6 h-6 md:w-10 md:h-10 bg-[#2B4B8C] rounded-full shadow-inner"></div>
              {/* Right Circle */}
              <div className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-6 h-6 md:w-10 md:h-10 bg-[#2B4B8C] rounded-full shadow-inner"></div>
              
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-quicksand uppercase tracking-wider leading-snug">
                Limited Availability –<br />Maintenance Packages
              </h2>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-black text-sm md:text-lg font-medium font-montserrat leading-relaxed">
            Our maintenance packages allow companies to secure technical support in advance at a reduced hourly rate compared to standard emergency interventions.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-12 md:mb-20 pb-4">
          <table className="w-full min-w-[600px] text-left border-collapse font-montserrat">
            <thead>
              <tr className="border-t-[3px] border-b-[3px] border-black">
                <th className="py-4 md:py-6 px-4 font-bold text-black text-base md:text-xl">Hours</th>
                <th className="py-4 md:py-6 px-4 font-bold text-black text-base md:text-xl border-l-2 border-slate-200">Electrical Package</th>
                <th className="py-4 md:py-6 px-4 font-bold text-black text-base md:text-xl border-l-2 border-slate-200">Plumbing Package</th>
                <th className="py-4 md:py-6 px-4 font-bold text-black text-base md:text-xl border-l-2 border-slate-200">Mixed Package</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, idx) => (
                <tr key={idx} className={`text-slate-800 hover:bg-slate-50 transition-colors ${idx === packages.length - 1 ? 'border-b-[3px] border-black' : 'border-b border-slate-100'}`}>
                  <td className="py-4 md:py-5 px-4 font-medium text-sm md:text-lg">{pkg.hours}</td>
                  <td className="py-4 md:py-5 px-4 font-medium text-sm md:text-lg border-l-2 border-slate-200">{pkg.electrical}</td>
                  <td className="py-4 md:py-5 px-4 font-medium text-sm md:text-lg border-l-2 border-slate-200">{pkg.plumbing}</td>
                  <td className="py-4 md:py-5 px-4 font-medium text-sm md:text-lg border-l-2 border-slate-200">{pkg.mixed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conditions */}
        <div className="max-w-3xl mx-auto relative">
          <h3 className="text-xl md:text-2xl font-bold text-black text-center uppercase tracking-widest mb-6 md:mb-10 font-quicksand">
            Package Conditions :
          </h3>
          <ul className="space-y-3 md:space-y-4 text-slate-700 font-montserrat font-medium text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-3 text-black font-bold mt-0.5">•</span>
              Hours are used as consumed and have no expiration date.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black font-bold mt-0.5">•</span>
              Priority intervention reserved for clients with maintenance packages.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black font-bold mt-0.5">•</span>
              Standard hourly rate without package : <strong className="ml-1 text-black">€45 / hour.</strong>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black font-bold mt-0.5">•</span>
              Fixed price works available upon quotation.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}