import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function EPWLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
