"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * TalentAcquisition Component
 * Showcases HR and recruitment capabilities with motion effects and SEO-friendly structure.
 */
const TalentAcquisition: React.FC = () => {
  // SEO & Brand Constants
  const companyName: string = "Sirius Tech Solutions";
  const serviceName: string = "Talent Acquisition & HR";
  
  // Typed list of value propositions
  const valueProps: string[] = ['IT Staffing', 'Virtual Assistants', 'HR Consulting'];

  return (
    <section 
      id="talent-acquisition" 
      className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-24"
      aria-labelledby="talent-hero-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* H2 with primary keywords for SEO */}
          <h2 
            id="talent-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
          >
            Scale Your Team with <br/>
            <span className="text-[#17B2AD]">Expert {serviceName}</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Finding the right talent is the engine of growth. <strong>{companyName}</strong> 
            delivers precision-driven recruitment, leveraging advanced psychometric 
            testing and industry-specific vetting to find your next top performer.
          </p>

          {/* Value Props */}
          <ul className="mb-10 space-y-3">
            {valueProps.map((item: string) => (
              <li key={item} className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 size={18} className="text-[#17B2AD]" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="/contact?inquiry=talent-acquisition" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-[#17B2AD] hover:bg-[#14a09b] text-white px-8 py-4 rounded-lg font-bold shadow-[0_10px_20px_-10px_rgba(23,178,173,0.5)] transition-all"
          >
            Hire with {companyName}
            <ArrowUpRight size={22} />
          </motion.a>
        </motion.div>

        {/* Visual Content Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism Effect Background */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#17B2AD] opacity-10 blur-[100px] rounded-full" aria-hidden="true"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <img 
              src="/images/recruitment-specialist.webp" 
              alt={`${companyName} recruitment specialist interviewing a candidate for a virtual assistant position`}
              title={`${serviceName} Services - ${companyName}`}
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TalentAcquisition;