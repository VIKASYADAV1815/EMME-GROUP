"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="relative py-24 text-center border-b-4 border-yellow-400 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" alt="Contact Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-orange-600/90"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold mb-6 shadow-sm">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
            Contact EPW Team
          </h1>
          <p className="text-xl text-orange-50 font-medium max-w-2xl mx-auto">
            Our dispatch center is available 24/7 for emergency interventions and consultations.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">How can we help?</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Whether you need immediate emergency assistance, want to inquire about our maintenance packages, or have questions about our services, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0 border border-blue-100 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">24/7 Dispatch Center</h3>
                    <p className="text-slate-600 font-medium">+356 77516307</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shadow-sm flex-shrink-0 border border-orange-100 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">Email Support</h3>
                    <p className="text-slate-600 font-medium">epw.tech.group@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-bl-full -z-0"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight relative z-10">Request a Quote</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-500">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
