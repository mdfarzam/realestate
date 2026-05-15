"use client";
import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Skyline Luxury Penthouse",
    image: "/r1.jpg",
    category: "Apartments",
  },
  {
    id: 2,
    title: "Modern Desert Villa",
    image: "/r2.jpg",
    category: "Villas",
  },
  {
    id: 3,
    title: "Marina Waterfront Residence",
    image: "/r3.jpg",
    category: "Apartments",
  },
  {
    id: 4,
    title: "Palm Beachfront Villa",
    image: "/r4.jpg",
    category: "For Rent",
  },
  {
    id: 5,
    title: "Royal Oasis Villa",
    image: "/r5.jpg",
    category: "Villas",
  },
  {
    id: 6,
    title: "Downtown Executive Suite",
    image: "/r6.jpg",
    category: "For Rent",
  },
  
];

export default function Listing() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Apartments", "Villas", "For Rent"];

  return (
    <section className="bg-[#1a1a1a] min-h-screen pt-20 pb-10 px-6 md:px-12 flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight">
          Explore Our Property Portfolio
        </h2>

        <div className="flex bg-[#2a2a2a] p-1 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-black shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {properties.filter(item => activeTab === "All" || item.category === activeTab).map((item) => (
          <div 
            key={item.id} 
            className="group relative cursor-pointer overflow-hidden rounded-[2.5rem]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <p className="text-white text-lg font-medium tracking-wide">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- NEW FOOTER AREA --- */}
      <div className="mt-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left spacer for centering (hidden on mobile) */}
        <div className="hidden md:block w-1/4"></div>

        {/* Center Button */}
        <button className="group relative flex items-center gap-6 bg-zinc-200 text-zinc-900 hover:text-white px-10 py-3.5 rounded-full overflow-hidden transition-colors duration-500 shadow-lg border border-zinc-200 hover:border-zinc-700">
          <div className="absolute inset-0 bg-zinc-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <span className="text-sm font-bold relative z-10">All Properties</span>
        </button>

        {/* Right Side Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:w-auto">
          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-[11px] leading-tight font-medium">Don't Miss Out on Hot Deals!</p>
            <p className="text-zinc-200 text-[11px] leading-tight font-bold">Follow Us on Social Media</p>
          </div>
          
          <div className="flex gap-2">
            {[
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>,
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.59.01 3.82.02l.13 4.25c-1.1-.01-2.12-.02-3.03-.02-1.28 0-1.63.18-1.63 1.25v2.96h4.37l-.14 4.38h-4.23v11.16h-4.38v-11.16h-2.12v-4.38h2.12v-3.23c0-3.35 1.5-5.23 5.11-5.23z"/></svg>
            ].map((icon, idx) => (
              <button key={idx} className="w-10 h-10 bg-[#2a2a2a] text-white flex items-center justify-center rounded-xl hover:bg-zinc-700 transition-colors">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}