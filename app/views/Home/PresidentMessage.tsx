import React from 'react';
import { Quote } from 'lucide-react';

export default function PresidentsMessage() {
  return (
    <section className="bg-[#020a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-8 md:p-16 rounded-3xl bg-gradient-to-br from-[#0f3d39] to-black border border-emerald-500/20 shadow-2xl overflow-hidden">
          
          {/* Decorative Background Icon */}
          <Quote className="absolute -top-10 -left-10 w-40 h-40 text-emerald-500/5 rotate-12" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-8">
              <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm">
                President&apos;s Message
              </span>
              <div className="h-1 w-12 bg-emerald-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium italic text-gray-100 leading-relaxed max-w-4xl">
              &quot;At Sirius Tech Solutions, we are committed to delivering reliable, innovative, and client-focused technology solutions. Our goal is to build lasting partnerships through trust, quality, and continuous improvement. With a dedicated team and a clear vision, we strive to create value and drive sustainable growth.&quot;
            </h2>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Muhammad Farooq
              </h3>
              <p className="text-emerald-400 font-medium">President, Sirius Tech Solutions</p>
            </div>
            
            {/* Signature flourish or divider */}
            <div className="mt-6 flex items-center gap-4 opacity-30">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-emerald-500"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}