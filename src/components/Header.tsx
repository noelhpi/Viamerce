import React, { useState, useEffect } from "react";
import {ShoppingCart} from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/98 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0A1628]/95 backdrop-blur-sm"
      } border-b border-cyan-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/Logo fundo trasparente.png" 
              alt="Viamerce Logo" 
              className="h-9 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-static-lumi.artvibe.ai/77/77ad5eb98a186b1b2cd8da206fb0c05f.png";
              }}
            />
            <span className="text-xl font-bold text-white tracking-tight">Viamerce</span>
          </div>

          {/* Nav */}
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              Fale com o Consultor
            </button>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#00D9FF] to-[#10B981] text-[#0A1628] px-5 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(0,217,255,0.6)] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 text-sm btn-shine cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Mobile button */}
          <button
            onClick={scrollToContact}
            className="sm:hidden bg-gradient-to-r from-[#00D9FF] to-[#10B981] text-[#0A1628] px-4 py-2 rounded-full font-semibold text-sm hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300 active:scale-95 btn-shine cursor-pointer"
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  );
}
