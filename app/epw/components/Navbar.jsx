"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "/epw" },
    { name: "Solutions", href: "/epw/services" },
    { name: "Pricing", href: "/epw/packages" },
    { name: "Company", href: "/epw/about" },
    { name: "Support", href: "/epw/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/epw" className="hover:opacity-80 transition-opacity flex items-center">
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image src="/epw/LOGO.png" alt="EPW Technical Group Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-indigo-600 ${
                  isActive(link.href) ? "text-indigo-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <Link href="/epw/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95">
                Get a quote
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 text-2xl hover:text-indigo-600 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200 flex flex-col gap-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-bold transition-colors hover:text-indigo-600 block px-2 py-1 ${
                  isActive(link.href) ? "text-indigo-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/epw/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95">
                Get a quote
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
