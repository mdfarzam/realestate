"use client";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(0.8);
  const [borderRadius, setBorderRadius] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      // Calculate progress: 0 when top is at bottom of screen, 1 when top is at top of screen
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / windowH));

      // Scale from 0.8 to 1.0
      const currentScale = 0.8 + progress * 0.2;
      // Border radius from 80px (pill) to 48px (consistent with your other sections)
      const currentRadius = 80 - (progress * 32);

      setScale(currentScale);
      setBorderRadius(currentRadius);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-24 px-4 md:px-12 overflow-hidden flex justify-center h-[120vh]"
    >
      <div className="sticky top-20 w-full flex justify-center">
        <div 
          className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden shadow-2xl transition-transform duration-100 ease-out"
          style={{ 
            transform: `scale(${scale})`, 
            borderRadius: `${borderRadius}px`,
            willChange: "transform, border-radius"
          }}
        >
          {/* Background Image */}
          <img 
            src="c1.jpg" 
            alt="Built Your Future With Us" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-24">
            <h2 className="text-white text-8xl font-medium leading-[1.05] tracking-tight mb-10">
              Build Your Home <br /> With Us
            </h2>
            
            <button className="group relative flex items-center gap-6 bg-white/20 backdrop-blur-xl border border-white/40 text-white hover:text-zinc-900 pl-8 pr-2 py-2 rounded-full overflow-hidden transition-colors duration-500 shadow-xl w-fit">
              <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase relative z-10">Explore Journey</span>
              <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center relative z-10 group-hover:bg-zinc-900 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Bottom Branding Tag */}
          <div className="absolute bottom-10 right-10 hidden md:block">
            <span className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">
              FXRZM Real Estate • 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}