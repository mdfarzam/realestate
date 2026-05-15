"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [scrollData, setScrollData] = useState({
    scale: 0.55,
    borderRadius: 24,
    opacity: 0,
    bgColor: "#fff",
    yOffset: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const entryProgress = Math.max(0, Math.min(1, (windowH - rect.top) / windowH));
      const internalScrolled = Math.max(0, -rect.top);
      const totalInternalScroll = rect.height - windowH;
      const internalProgress = Math.max(0, Math.min(1, internalScrolled / totalInternalScroll));

      let s = 0.55, r = 24, o = 0, bg = "#fff", y = 0;

      if (rect.top > 0) {
        s = 0.55 + entryProgress * 0.45;
        r = 24 * (1 - entryProgress);
        o = entryProgress;
      } else if (internalProgress <= 0.4) {
        s = 1.0;
        r = 0;
        o = 1;
        y = internalProgress * -100;
        const bgProgress = Math.max(0, (internalProgress - 0.2) / 0.2);
        const colorVal = Math.floor(245 - (bgProgress * (245 - 26)));
        bg = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
      } else {
        const phaseProgress = (internalProgress - 0.4) / 0.6;
        s = 1.0 - (phaseProgress * 0.10);
        r = 12 * phaseProgress;
        o = 1 - phaseProgress;
        bg = "#1a1a1a";
      }

      setScrollData({ scale: s, borderRadius: r, opacity: o, bgColor: bg, yOffset: y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh", backgroundColor: scrollData.bgColor }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* The Frame */}
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{
            width: "100vw", height: "100vh",
            transform: `scale(${scrollData.scale})`,
            borderRadius: `${scrollData.borderRadius}px`,
            willChange: "transform",
          }}
        >
          {/* Background Image with Zoom Parallax */}
          <img
            src="b1.jpg"
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1.2 - scrollData.scale * 0.2})`,
              filter: "brightness(0.4) saturate(1.2)"
            }}
          />

          {/* Centre Marquee */}
          <div
            className="absolute inset-0 flex items-center pointer-events-none z-10 overflow-hidden"
            style={{ opacity: scrollData.opacity }}
          >
            <div className="flex whitespace-nowrap animate-ticker">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-white/10 text-[18vw] font-black uppercase tracking-tighter leading-none flex items-center">
                  <span className="mx-16">Luxury Standard</span>
                  <span className="text-[10vw] mx-8 opacity-40">●</span>
                </span>
              ))}
            </div>
          </div>

          {/* Geometric Blueprint Grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

          {/* Floating Stats/Captions */}
          <div
            className="absolute bottom-20 left-20 text-white z-20 transition-all duration-700"
            style={{ transform: `translateX(${scrollData.opacity * 20 - 20}px)`, opacity: scrollData.opacity }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-zinc-400 mb-2">Our Philosophy</p>
            <p className="text-2xl font-light max-w-md leading-tight">
              We don't just sell spaces. We curate <span className="italic font-serif">living art</span> in the heart of the desert.
            </p>
          </div>

          {/* Floating Coordinates */}
          <div className="absolute top-20 right-20 text-white/40 font-mono text-[10px] space-y-1 text-right z-20">
            <p>LAT: 25.2048° N</p>
            <p>LNG: 55.2708° E</p>
            <p>ALT: 828m</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
}