"use client";
import { Map, Menu, ArrowRight, Download, Phone } from "lucide-react";

export default function Hero() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col md:flex-row overflow-hidden relative">

            {/* Left Column: Content */}
            <div className="w-full md:w-1/2 flex flex-col p-6 md:px-12 md:py-8 relative z-10">

                {/* Header/Logo Area */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col group cursor-pointer">
                        <span className="text-lg font-bold tracking-[0.2em] text-zinc-900 transition-all group-hover:tracking-[0.6em]">FXRZM</span>
                    </div>

                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-all shadow-sm">
                            <Map size={16} strokeWidth={1.5} className="text-zinc-600" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg">
                            <Menu size={18} strokeWidth={2} />
                        </button>
                    </div>
                </div>

                {/* Center Text Area */}
                <div className="flex-1 flex flex-col justify-center relative py-8">

                    <p className="text-[11px] tracking-[0.5em] text-zinc-400 uppercase font-black mb-6 flex items-center gap-4">
                        {/* <span className="w-6 h-[1px] bg-zinc-900/10" /> */}
                        A New Standard of Living
                    </p>

                    <h1 className="text-5xl md:text-[4.5rem] xl:text-[5rem] leading-[0.9] text-zinc-900 mb-6 tracking-tighter font-medium">
                        Find Your <br />
                        <span className="italic font-light text-zinc-400 font-serif">Paradise</span> <br />
                        In Dubai
                    </h1>

                    <p className="text-sm text-zinc-500 max-w-sm leading-relaxed mb-8">
                        Curating the most prestigious properties in the world's most dynamic city. Investment-ready, living-perfect.
                    </p>

                    {/* Main CTA — white sweep from right + border on hover */}
                    <button className="group relative flex items-center gap-6 bg-zinc-900 text-white hover:text-zinc-900 pl-10 pr-3 py-3 rounded-full overflow-hidden transition-colors duration-500 w-fit border border-zinc-900 hover:border-zinc-300">
                        <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase relative z-10">Contact Us Now</span>
                        <div className="w-9 h-9 bg-white text-zinc-900 rounded-full flex items-center justify-center group-hover:bg-zinc-100 transition-all relative z-10 border border-zinc-200/0 group-hover:border-zinc-300">
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>

                {/* Bottom Actions */}
                <div className="flex justify-between items-center pt-6 border-t border-zinc-50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center">
                            <Phone size={13} className="text-zinc-900" />
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-zinc-900 uppercase">+971 4 123 4567</span>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-zinc-900 tracking-widest uppercase">Dubai Marina</p>
                            <p className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase">From $1.2M</p>
                        </div>
                        <div className="relative w-12 h-12 overflow-hidden rounded-2xl shadow-xl border-2 border-white transform transition-transform group-hover:scale-110 group-hover:-rotate-3">
                            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=150&q=80" alt="property" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen p-4 md:p-6 flex items-stretch">
                <div className="relative w-full">
                    <img
                        src="/h1.jpg"
                        alt="Dubai Burj Al Arab"
                        className="w-full h-full rounded-[3rem] object-cover shadow-2xl brightness-95"
                    />

                    {/* Catalog Button — dark sweep from right + border on hover */}
                    <div className="absolute bottom-8 right-8">
                        <button className="group relative bg-white/95 backdrop-blur-md text-zinc-900 hover:text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 shadow-2xl overflow-hidden transition-colors duration-500 border border-white/50 hover:border-zinc-700">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                            <span className="text-[11px] font-black tracking-[0.4em] uppercase relative z-10">
                                Catalog 2026
                            </span>
                            <div className="w-9 h-9 bg-zinc-900 text-white rounded-full flex items-center justify-center group-hover:bg-zinc-700 group-hover:rotate-180 transition-all duration-500 relative z-10 border border-zinc-800/0 group-hover:border-zinc-600">
                                <Download size={16} strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}