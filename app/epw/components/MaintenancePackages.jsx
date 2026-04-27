"use client";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function MaintenancePackages() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner header */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 shadow-xl rounded-2xl p-8 text-center relative mb-12 border-4 border-white">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-700 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-700 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wider uppercase mb-2 drop-shadow-md">
            Limited Availability –
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wider uppercase drop-shadow-md">
            Maintenance Packages
          </h2>
        </div>

        <p className="text-center text-lg md:text-xl text-slate-700 max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
          Our maintenance packages allow companies to secure technical support in advance at a 
          reduced hourly rate compared to standard emergency interventions.
        </p>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 mb-20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b-2 border-slate-800">
                  <th className="py-6 px-8 text-xl font-bold text-slate-900">Hours</th>
                  <th className="py-6 px-8 text-xl font-bold text-slate-900">Electrical Package</th>
                  <th className="py-6 px-8 text-xl font-bold text-slate-900">Plumbing Package</th>
                  <th className="py-6 px-8 text-xl font-bold text-slate-900">Mixed Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">50</td>
                  <td className="py-5 px-8 text-slate-600">€ 1,900</td>
                  <td className="py-5 px-8 text-slate-600">€ 1,700</td>
                  <td className="py-5 px-8 text-slate-600">€ 1,800</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">100</td>
                  <td className="py-5 px-8 text-slate-600">€ 3,400</td>
                  <td className="py-5 px-8 text-slate-600">€ 3,000</td>
                  <td className="py-5 px-8 text-slate-600">€ 3,300</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">200</td>
                  <td className="py-5 px-8 text-slate-600">€ 6.400,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 6.200,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 6.300,00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">500</td>
                  <td className="py-5 px-8 text-slate-600">€ 15.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 14.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 14.500,00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">1000</td>
                  <td className="py-5 px-8 text-slate-600">€ 27.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 25.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 26.000,00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-8 font-semibold text-slate-700">2000</td>
                  <td className="py-5 px-8 text-slate-600">€ 50.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 46.000,00</td>
                  <td className="py-5 px-8 text-slate-600">€ 48.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Package Conditions Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-t-4 border-orange-500 shadow-xl shadow-blue-900/5">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3 tracking-tight">
            <FaExclamationTriangle className="text-yellow-500 text-3xl" />
            Package Conditions:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">Packages must be paid in advance.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">Valid for 12 months from the date of purchase.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">Hours can be used for both preventive and corrective maintenance.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">Priority response times apply to all package holders.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
              <p className="text-slate-700 text-lg leading-relaxed">Materials and spare parts are not included in the hourly rate.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}