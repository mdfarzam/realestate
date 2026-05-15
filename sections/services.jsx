"use client";

const services = [
  { 
    id: "01", 
    title: "Market Analysis", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/><path d="m19 9-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    id: "02", 
    title: "Property Valuation", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    id: "03", 
    title: "Legal Support", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="18" x="3" y="3" rx="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7h10M7 12h10M7 17h10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
  { 
    id: "04", 
    title: "Investment Strategy", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) 
  },
];

export default function Services() {
  return (
    <section className="bg-[#1a1a1a] py-32 px-6 md:px-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Heading (Refined) */}
        <div className="w-full lg:w-2/5">
          <p className="text-[11px] font-bold text-zinc-500 tracking-[0.4em] uppercase mb-6">Our Expertise</p>
          <h2 className="text-white text-5xl md:text-7xl font-medium leading-[1] mb-10 tracking-tight">
            Tailored <br /> 
            Solutions <br /> 
            <span className="text-zinc-500 italic">For You</span>
          </h2>
          
          <button className="group relative flex items-center gap-6 bg-zinc-800/40 text-zinc-400 hover:text-zinc-900 pl-10 pr-3 py-3 rounded-full border border-white/5 overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase relative z-10 group-hover:text-zinc-900 transition-colors">All Services</span>
            <div className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center relative z-10 group-hover:bg-zinc-900 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right Column: Balanced Icon Pills */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-white p-2.5 pr-8 rounded-full border border-white/5 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                {/* Balanced Icon Container */}
                <div className="w-20 h-20 rounded-full bg-zinc-800/80 group-hover:bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 transition-all duration-500 border border-white/5">
                  {service.icon}
                </div>
                
                {/* Title and ID */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors tracking-tighter">
                    {service.id}
                  </span>
                  <span className="text-zinc-200 group-hover:text-zinc-900 text-xl md:text-3xl font-medium transition-colors tracking-tight">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 group-hover:border-zinc-200 text-zinc-600 group-hover:text-zinc-900 transition-all duration-500 group-hover:rotate-45">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}