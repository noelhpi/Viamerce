import React, { useRef, useState } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  color?: "cyan" | "green" | "amber";
}

export function Card({ children, className = "", color = "cyan" }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const colors = {
    cyan:  { border: "rgba(0,217,255,0.15)", hover: "rgba(0,217,255,0.5)",  glow: "rgba(0,217,255,0.2)",  light: "rgba(0,217,255,0.12)"  },
    green: { border: "rgba(16,185,129,0.15)", hover: "rgba(16,185,129,0.5)", glow: "rgba(16,185,129,0.15)", light: "rgba(16,185,129,0.10)" },
    amber: { border: "rgba(245,158,11,0.15)", hover: "rgba(245,158,11,0.5)", glow: "rgba(245,158,11,0.15)", light: "rgba(245,158,11,0.10)" },
  };

  const c = colors[color];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mx", "-100px");
    card.style.setProperty("--my", "-100px");
    setIsActive(false);
  };

  // Touch Event Handlers for Mobile & Tablets
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    card.style.setProperty("--mx", `${touch.clientX - rect.left}px`);
    card.style.setProperty("--my", `${touch.clientY - rect.top}px`);
    setIsActive(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    card.style.setProperty("--mx", `${touch.clientX - rect.left}px`);
    card.style.setProperty("--my", `${touch.clientY - rect.top}px`);
  };

  const handleTouchEnd = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mx", "-100px");
    card.style.setProperty("--my", "-100px");
    setIsActive(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`card-glow h-full w-full ${isActive ? "glow-active" : ""} ${className}`}
      style={{
        "--border-color": c.border,
        "--hover-border": c.hover,
        "--glow-color": c.glow,
        "--light-color": c.light,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
