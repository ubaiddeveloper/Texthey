"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "default" | "pricing" | "hero";
  className?: string;
}

export default function AnimatedBackground({
  variant = "default",
  className = "",
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle floating animation to orbs
    const orbs = containerRef.current?.querySelectorAll(".floating-orb");

    orbs?.forEach((orb, index) => {
      const element = orb as HTMLElement;
      const delay = index * 1000; // Stagger animations

      // Animate with CSS for better performance
      element.style.animationDelay = `${delay}ms`;
    });
  }, []);

  const getBackgroundElements = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            {/* Floating gradient orbs */}
            <div className="floating-orb absolute top-1/4 left-1/4 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl animate-float"></div>
            <div className="floating-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl animate-float-delayed"></div>
          </>
        );

      case "pricing":
        return (
          <>
            {/* Animated gradient mesh */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="floating-orb absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
              <div className="floating-orb absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-delayed"></div>
              <div className="floating-orb absolute -bottom-40 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float-slow"></div>
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`floating-orb absolute w-2 h-2 bg-white/20 rounded-full animate-particle-${
                    i % 3
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                  }}
                />
              ))}
            </div>
          </>
        );

      default:
        return (
          <>
            {/* Default subtle background */}
            <div className="floating-orb absolute top-20 left-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-2xl animate-float"></div>
            <div className="floating-orb absolute bottom-20 right-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-2xl animate-float-delayed"></div>
          </>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {getBackgroundElements()}
    </div>
  );
}
