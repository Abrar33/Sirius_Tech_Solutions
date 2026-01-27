"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- TYPES & INTERFACES ---

interface Feature {
  /** The Lucide icon component or any React element */
  icon: React.ReactElement;
  /** The descriptive text for the feature */
  text: string;
}

interface WhyChoosesProps {
  /** Optional custom title for the section */
  title?: string;
  /** Array of feature objects containing icons and text */
  features: Feature[];
}

// --- COMPONENT ---

const WhyChooses: React.FC<WhyChoosesProps> = ({ title, features }) => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {title || "Why Choose Us?"}
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-8 bg-[#0a0a0a] border border-white/10 rounded-[2rem] hover:border-teal-500/50 transition-colors group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 p-4 bg-white/5 rounded-2xl group-hover:bg-teal-500/10 transition-colors">
                {/* React.cloneElement allows us to inject classes into the passed icon 
                   while maintaining type safety for the element.
                */}
                {React.cloneElement(feature.icon, { 
                  className: "w-8 h-8 text-teal-500" 
                } as React.HTMLAttributes<SVGElement>)}
              </div>

              {/* Text Content */}
              <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooses;