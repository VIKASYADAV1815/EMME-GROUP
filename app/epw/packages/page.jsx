"use client";
import MaintenancePackages from "../components/MaintenancePackages";

export default function PackagesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 text-center border-b-4 border-teal-500 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" alt="Packages Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 to-teal-700/80"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-teal-50 text-sm font-bold mb-6 shadow-sm">
            Priority Access
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
            Maintenance Packages
          </h1>
          <p className="text-xl text-teal-100 font-medium max-w-2xl mx-auto">
            Secure technical support in advance at a reduced hourly rate compared to standard emergency interventions.
          </p>
        </div>
      </div>

      <MaintenancePackages />

      {/* Terms & Conditions */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight border-b border-slate-100 pb-4">
              Terms & Conditions
            </h3>
            <ul className="space-y-6 text-slate-600">
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                <p>One ticket equals 1 hour of labor for a specialized technician.</p>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                <p>For urgent interventions requested within 24 hours of notification, 2 tickets per hour will be deducted.</p>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                <p>For interventions scheduled on public holidays or nighttime hours (18:00 - 06:00), 2 tickets per hour will be deducted.</p>
              </li>
              <li className="flex gap-4">
                <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0 mt-0.5">4</span>
                <p>A "Call-out Fee" applies per intervention, covering travel expenses and minor materials, deducting 1 ticket per technician.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
