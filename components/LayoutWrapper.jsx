"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide Navigation and Footer on the entry page (/), and EPW page (/epw)
  const isHiddenPage = pathname === "/" || pathname === "/epw";

  return (
    <>
      {!isHiddenPage && <Navigation />}
      <main className={!isHiddenPage ? "min-h-screen" : "min-h-screen"}>
        {children}
      </main>
      {!isHiddenPage && <Footer />}
    </>
  );
}
