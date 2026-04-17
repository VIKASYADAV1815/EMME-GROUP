"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import p5 from "../../assets/epw/P5.png";
import p6 from "../../assets/epw/P6.png";

export default function WhyChooseUs() {
  const reasons = [
    "We guarantee intervention within one hour from the call.",
    "Fixed and agreed costs – \"extra charges\" are not part of the way we work.",
    "Professional expertise in electrical and plumbing works with certified technicians.",
    "Structured technical support available 24/7 for businesses.",
    "Scalable service across multiple locations or facilities."
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100L100 0M50 100L100 50M0 50L50 0M-25 25L25 -25M75 125L125 75' stroke='%23000000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      ></div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full flex-grow">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-10 font-quicksand tracking-wide">
          WHY COMPANIES CHOOSE EPW TECHNICAL GROUP ?
        </h2>

        {/* Bulleted List */}
        <div className="max-w-4xl mx-auto mb-12">
          <ul className="space-y-4">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-black text-xl mr-3 leading-none mt-0.5">•</span>
                <span className="text-black font-medium text-sm md:text-base font-montserrat">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-lg md:text-xl font-bold italic text-black font-montserrat">
            WE OPERATE IN 8 EUROPEAN COUNTRIES WITH OUR TECHNICAL TEAMS.
          </h3>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Image 1 */}
          <div className="relative p-2 bg-white rounded-[2rem] shadow-xl border border-gray-300 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="rounded-3xl overflow-hidden border-2 border-gray-100 aspect-[4/3] md:h-80 w-full">
              <Image src={p5} alt="Electrical Panel Maintenance" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="relative p-2 bg-white rounded-[2rem] shadow-xl border border-gray-300 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="rounded-3xl overflow-hidden border-2 border-gray-100 aspect-[4/3] md:h-80 w-full">
              <Image src={p6} alt="Plumbing Pipes Installation" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

      </div>

      {/* Footer / Contact Banner Section */}
      <div className="w-full bg-white relative z-10 pt-10 pb-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <h3 className="text-sm md:text-lg font-bold text-black font-montserrat italic mb-8 uppercase tracking-wide">
            FOR FURTHER INFORMATION OR TO ARRANGE A MEETING<br/>
            AT YOUR PREMISES, PLEASE FEEL FREE TO CONTACT US<br/>
            USING THE DETAILS BELOW:
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            {/* Contact Button */}
            <Link href="mailto:epw.tech.group@gmail.com" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-[#4169E1] hover:bg-[#2B4B8C] text-white text-lg md:text-2xl font-bold py-3 md:py-4 px-8 md:px-10 rounded-full shadow-[0_8px_20px_rgba(65,105,225,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-white ring-2 ring-[#4169E1]/30">
                CONTACT US
              </button>
            </Link>

            {/* Contact Details */}
            <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-auto">
              <a href="tel:+35677516307" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-[#E87A24] transition-colors">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <span className="text-black font-bold text-base md:text-xl font-montserrat">+356 77516307</span>
              </a>
              <a href="mailto:epw.tech.group@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center group-hover:bg-[#E87A24] transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
                <span className="text-black font-bold text-base md:text-xl font-montserrat">epw.tech.group@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Bottom Legal Text */}
          <div className="text-center text-xs md:text-sm font-bold text-black leading-snug font-montserrat">
            <p>E.P.W. Technical Group a service operated by Emme Construction Ltd</p>
            <p className="font-medium text-gray-700">The Core, Valley Road, Msida, MSD9021</p>
            <p className="font-medium text-gray-700">Vat Number: MT29199312 - Registered Office: C102165</p>
          </div>
        </div>

        {/* Decorative Bottom Corner Shapes */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 pointer-events-none overflow-hidden">
           <div className="absolute bottom-[-50%] left-[-50%] w-[150%] h-[150%] bg-[#E87A24] rounded-full"></div>
           <div className="absolute bottom-[-60%] left-[-60%] w-[150%] h-[150%] bg-[#2B4B8C] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}