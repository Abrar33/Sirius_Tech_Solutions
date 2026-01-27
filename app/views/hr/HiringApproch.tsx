"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- TYPES & INTERFACES ---

interface Step {
  step: string;
  title: string;
  text: string;
  position: string;
}

// --- COMPONENT ---

/**
 * HiringApproach Component
 * A visual timeline of the recruitment process with interactive hover states.
 */
const HiringApproach: React.FC = () => {
  // 1. Explicitly type the state for the hovered index
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  // 2. Define the steps array with the Step interface
  const steps: Step[] = [
    {
      step: "01",
      title: "Workforce Needs Analysis",
      text: "We begin with a strategic workforce planning exercise, mapping business objectives against current talent capabilities.",
      position: "lg:ml-0 lg:mt-0"
    },
    {
      step: "02",
      title: "Role Definition & Benchmarking",
      text: "Our HR team crafts role-based competency frameworks and benchmarks job profiles against industry standards.",
      position: "lg:ml-[30%] lg:-mt-12"
    },
    {
      step: "03",
      title: "Multi Channel Talent Sourcing",
      text: "Leveraging global networks and AI-driven sourcing tools to find specialized experts for IT and operations.",
      position: "lg:ml-[15%] lg:mt-8"
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 lg:px-24 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="mb-16 lg:w-1/3">
          <p className="text-[#17B2AD] font-mono tracking-tighter uppercase text-sm mb-2">
            Sirius Tech Solutions
          </p>
          <h2 className="text-5xl font-bold mb-6">Hiring Approach</h2>
          <p className="text-gray-400 leading-relaxed">
            At Sirius, we don't just fill positions; we engineer workforce excellence. 
            Our approach ensures every hire drives organizational growth.
          </p>
          <button className="mt-8 bg-[#17B2AD] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#14a09b] transition-colors">
            START NOW
          </button>
        </div>

        {/* The Connective SVG (Desktop Only) */}
        <svg 
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" 
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <motion.path
            d="M 350 200 L 550 200 L 550 400 L 350 400 L 350 600 L 550 600"
            fill="transparent"
            stroke="#17B2AD"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>

        {/* Steps Container */}
        <div className="flex flex-col gap-12 lg:gap-0 relative z-10">
          {steps.map((item: Step, index: number) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative w-full lg:w-[450px] p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${item.position} ${
                hoveredIndex === index 
                ? "bg-gradient-to-br from-[#17B2AD] to-[#0a4d4a] border-transparent scale-105 shadow-2xl shadow-[#17B2AD]/20" 
                : "bg-zinc-900/50 border-white/10"
              }`}
            >
              <div className="flex items-start gap-6">
                {/* Step Circle */}
                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs ${
                  hoveredIndex === index ? "bg-white text-black" : "bg-[#17B2AD] text-black"
                }`}>
                  Step {item.step}
                </div>

                <div>
                  <h3 className={`text-xl font-bold mb-3 ${hoveredIndex === index ? "text-white" : "text-gray-100"}`}>
                    {item.title}
                  </h3>
                  
                  {/* Dynamic text reveal */}
                  <p className={`leading-relaxed transition-all duration-300 ${
                    hoveredIndex === index ? "text-white/90" : "text-gray-400 line-clamp-2"
                  }`}>
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Line */}
              {hoveredIndex === index && (
                <motion.div 
                  layoutId="activeGlow"
                  className="absolute -inset-[1px] rounded-3xl border border-[#17B2AD] pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#17B2AD]/10 blur-[120px] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#17B2AD]/5 blur-[120px] rounded-full" aria-hidden="true" />
    </section>
  );
};

export default HiringApproach;