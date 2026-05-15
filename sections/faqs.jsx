"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of properties do we offer in Dubai?",
    answer: "We offer a diverse portfolio including luxury villas, high-end penthouse suites, beachfront apartments, and prime commercial spaces across Dubai's most prestigious zones."
  },
  {
    question: "What are the payment options available for purchasing a property?",
    answer: "Payment plans vary by developer but typically include initial down payments followed by installments linked to construction milestones or post-handover payment options."
  },
  {
    question: "Can foreign nationals buy property in Dubai?",
    answer: "Yes, foreign nationals can enjoy 100% freehold ownership in designated areas, which include the majority of Dubai's popular investment and residential hubs."
  },
  {
    question: "What is the process for obtaining a residency visa through property investment?",
    answer: "Investors purchasing property above a certain value (typically 750,000 AED or 2M AED for Golden Visas) are eligible to apply for various residency visa options."
  },
  {
    question: "Are there any additional costs associated with property ownership in Dubai?",
    answer: "Standard costs include DLD fees (4%), registration fees, and annual service charges for maintenance and community management."
  },
  {
    question: "Do we offer property management services for rental properties?",
    answer: "Yes, we provide comprehensive management services including tenant screening, rent collection, maintenance, and legal compliance for your peace of mind."
  },
  {
    question: "Can we assist with property financing for non-resident buyers?",
    answer: "We work with leading financial institutions to help non-residents secure competitive mortgage rates and financing solutions tailored to their investment goals."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Header */}
        <div className="w-full md:w-2/5">
          <h2 className="text-zinc-900 text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Frequent Asked <br /> Questions
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
            At FXRZM, we offer more than just real estate services; we provide an 
            unparalleled experience tailored to meet your needs and exceed your expectations.
          </p>
        </div>

        {/* Right Side: Updated with bg-zinc-50 for visibility on white bg */}
        <div className="w-full md:w-3/5 bg-zinc-50/80 rounded-[2.5rem] p-6 md:p-10 border border-zinc-100 shadow-sm">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-zinc-200 last:border-0 transition-colors duration-300 ${openIndex === index ? 'bg-white/40 -mx-4 px-4 rounded-xl' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-7 text-left group"
              >
                <span className={`text-base md:text-lg font-medium pr-4 transition-colors ${openIndex === index ? 'text-zinc-900' : 'text-zinc-700'}`}>
                  {faq.question}
                </span>
                <span className={`text-xl transition-all duration-300 ${openIndex === index ? 'rotate-45 text-zinc-900 scale-110' : 'rotate-0 text-zinc-400'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-60 pb-8' : 'max-h-0'}`}>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}``