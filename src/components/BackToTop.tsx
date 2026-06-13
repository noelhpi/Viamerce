import React, { useState, useEffect } from "react";
import {ChevronUp} from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#10B981] text-[#0A1628] flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:scale-110 transition-all duration-300"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
