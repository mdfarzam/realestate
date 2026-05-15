"use client";
import { Download } from "lucide-react"; // Using library icons as discussed

const propertyTypes = [
    { id: "01", title: "Luxury Villas", img: "/g1.jpg", span: "row-span-1" },
    { id: "02", title: "Penthouse Suites", img: "/g2.jpg", span: "row-span-2" },
    { id: "03", title: "Modern Apartments", img: "/g3.jpg", span: "row-span-1" },
    { id: "04", title: "Beachfront Properties", img: "/g4.jpg", span: "row-span-2" },
    { id: "05", title: "Golf Course Residences", img: "/g5.jpg", span: "row-span-1" },
    { id: "06", title: "Commercial Spaces", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", span: "row-span-2" },
    { id: "07", title: "Luxury Townhouses", img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80", span: "row-span-2" },
    { id: "08", title: "Waterfront Homes", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", span: "row-span-2" },
    { id: "09", title: "Holiday Homes", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80", span: "row-span-1" },
    { id: "10", title: "Investment Properties", img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80", span: "row-span-1" },
    { id: "11", title: "Eco-friendly Homes", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80", span: "row-span-2" },
    { id: "12", title: "Desert Retreats", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80", span: "row-span-1" },
];

export default function Grid() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-zinc-900 font-medium tracking-tight mb-4">
                    Discover Your Ideal <br /> Property Type
                </h2>
                <div className="flex justify-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
                {propertyTypes.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative overflow-hidden rounded-[2.5rem] border border-zinc-100 cursor-pointer ${item.span}`}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <span className="text-[11px] font-bold text-white/50 block mb-1 tracking-widest">{item.id}</span>
                            <p className="text-base md:text-lg font-medium leading-tight">{item.title}</p>
                        </div>
                    </div>
                ))}

                {/* UPDATED CTA BLOCK */}
                <div className="col-span-2 lg:col-span-2 row-span-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-zinc-300 rounded-[2.5rem] bg-zinc-50/50">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em] mb-6 leading-relaxed">
                        Explore Our Diverse Range <br /> and Find Your Match
                    </p>
                    
                    {/* FIXED PY AND FLEX BUTTON */}
                    <button className="group relative flex items-center justify-between gap-4 bg-zinc-900 text-white hover:text-zinc-900 pl-8 pr-2 py-2 rounded-full overflow-hidden transition-all duration-500 shadow-xl border border-zinc-900 hover:border-zinc-300 min-h-[52px]">
                        <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                        
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase relative z-10 whitespace-nowrap">
                            Catalog Download
                        </span>
                        
                        <div className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center relative z-10 group-hover:bg-zinc-900 transition-all flex-shrink-0">
                            <Download size={16} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}