"use client";
import { useEffect, useState, useRef } from "react";

// Individual Counter Component for precision
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeValue = progress * (2 - progress);
      setCount(Math.floor(easeValue * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function Stats() {
  const statsData = [
    { value: 74, suffix: "+", label: "Successful", subLabel: "Transactions Monthly" },
    { value: 72, suffix: "%", label: "Customer", subLabel: "Satisfaction Rate" },
    { value: 371, suffix: "", label: "Exquisite Properties", subLabel: "Ready for Your Selection" },
  ];

  const teamImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 flex flex-col md:flex-row gap-16 min-h-[80vh] items-center">
      
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col">
        <p className="text-[13px] leading-relaxed text-zinc-400 max-w-sm mb-12 font-medium">
          At FXRZM Real Estate, we offer more than just real estate services; 
          we provide an unparalleled experience tailored to meet your needs 
          and exceed your expectations.
        </p>

        {/* Team Avatars */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex -space-x-3">
            {teamImages.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                alt="team member"
              />
            ))}
          </div>
          <div className="text-[10px] tracking-widest uppercase text-zinc-400 font-bold leading-tight">
            Meet Our <br /> <span className="text-zinc-800">Professional Team</span>
          </div>
        </div>

        {/* Stats List */}
        <div className="flex flex-col border-t border-zinc-100">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-10 border-b border-zinc-100 group"
            >
              <h3 className="text-6xl text-zinc-900 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <div className="text-right">
                <p className="text-[11px] font-bold text-zinc-800 tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
                <p className="text-[11px] font-medium text-zinc-400 tracking-[0.1em] uppercase">
                  {stat.subLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 relative h-[700px]">
        <div className="w-full h-full p-1 bg-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <img
              src="s1.jpg"
              alt="Dubai Architecture"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
        </div>

        {/* Floating Contact Button */}
        <div className="absolute top-10 right-10">
            <button className="group relative flex items-center gap-6 bg-white/90 backdrop-blur-md text-zinc-900 hover:text-white pl-10 pr-3 py-3 rounded-full overflow-hidden transition-colors duration-500 shadow-xl border border-white/50 hover:border-zinc-800">
                <div className="absolute inset-0 bg-zinc-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="text-[10px] font-bold tracking-widest uppercase relative z-10">Contact Us Now</span>
                <div className="w-9 h-9 bg-zinc-900 text-white rounded-full flex items-center justify-center relative z-10 group-hover:bg-zinc-800 transition-colors">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A19 19 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.24 2.46.69 3.58a1 1 0 0 1-.27 1.11l-2.2 2.2z" /></svg>
                </div>
            </button>
        </div>

        {/* Bottom Floating Expert Card */}
        <div className="absolute bottom-10 right-10 left-10 md:left-auto">
            <div className="bg-white p-4 rounded-3xl shadow-2xl flex items-center gap-5 max-w-sm ml-auto">
                <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                      className="w-14 h-14 rounded-2xl object-cover" 
                      alt="expert"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                    </div>
                </div>
                <div>
                    <p className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase mb-1">Special Offer</p>
                    <p className="text-xs font-bold text-zinc-900 leading-tight">Get The Consultation<br />With Our Expert</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}