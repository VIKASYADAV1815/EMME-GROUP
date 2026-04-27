"use client";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-blue-400 mb-6 font-quicksand uppercase tracking-tight">
              EPW Technical Group
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              A service operated by Emme Construction Ltd. Providing premium technical maintenance solutions across 8 European countries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white/90">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/epw" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Home</Link></li>
              <li><Link href="/epw/services" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Services</Link></li>
              <li><Link href="/epw/packages" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Maintenance Packages</Link></li>
              <li><Link href="/epw/about" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/epw/contact" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white/90">Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 font-medium">Electrical Maintenance</li>
              <li className="text-slate-400 font-medium">Plumbing Systems</li>
              <li className="text-slate-400 font-medium">Technical Support</li>
              <li className="text-slate-400 font-medium">Preventive Checks</li>
              <li className="text-slate-400 font-medium">Emergency Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white/90">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 font-medium">The Core, Valley Road, Msida, MSD9021</span>
              </li>
              <li className="flex gap-4">
                <FaPhoneAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 font-medium">+356 77516307</span>
              </li>
              <li className="flex gap-4">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 font-medium break-all">epw.tech.group@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} EPW Technical Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <p>Vat Number: MT29199312</p>
            <p>Registered Office: C102165</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
