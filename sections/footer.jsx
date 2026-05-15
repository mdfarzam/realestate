"use client";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Our Properties", href: "#" },
  { name: "Our Advantages", href: "#" },
  { name: "Our Services", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-24 pb-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-10 flex items-end gap-0.5">
                {/* Changed bars to white/zinc-400 */}
                <div className="w-1 bg-zinc-600 h-2"></div>
                <div className="w-1 bg-zinc-400 h-4"></div>
                <div className="w-1 bg-white h-8"></div>
                <div className="w-1 bg-zinc-500 h-5"></div>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">FXRZM</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
              Building Your Dreams In Real Estate
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-8">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-zinc-200 text-lg font-medium hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Founder */}
          <div>
            <div className="flex items-center gap-4 mb-8">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Ethan Thompson" 
                    className="w-12 h-12 rounded-full object-cover grayscale border border-zinc-700"
                />
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">FXRZM Founder</p>
                    <p className="text-white font-medium">Ethan Thompson</p>
                </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-8 leading-tight">
                We are here to change <br /> your future.
            </h3>
            <div className="flex items-center gap-4">
                <button className="group relative flex items-center bg-white text-zinc-900 hover:text-white px-8 py-2.5 rounded-full overflow-hidden transition-colors duration-500 border border-white hover:border-zinc-700">
                    <div className="absolute inset-0 bg-zinc-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <span className="text-[11px] font-bold uppercase tracking-widest relative z-10">Contact Us</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
            </div>
          </div>

          {/* Newsletter & Map */}
          <div className="flex flex-col gap-8">
             <div>
                <h4 className="text-lg font-medium text-white mb-2">Subscribe to our news</h4>
                <p className="text-zinc-400 text-[11px] leading-relaxed mb-6">Stay Informed and Never Miss a Beat. Subscribe to Our Exclusive News Updates!</p>
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full bg-transparent border-b border-zinc-700 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                    <button className="absolute right-0 bottom-2 text-white hover:translate-x-1 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
             </div>
             
             <div className="flex items-start gap-4">
                <div className="w-24 h-16 rounded-xl overflow-hidden grayscale opacity-50 border border-zinc-800">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=200&q=80" alt="Map Location" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-xs text-zinc-200 font-medium">123 Zayed Road,</p>
                    <p className="text-[10px] text-zinc-500">Dubai Marina,</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Dubai, UAE</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-500 font-medium">
            Copyright 2026 © Golden Gate Properties
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Terms Of Service</a>
            <a href="#" className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}