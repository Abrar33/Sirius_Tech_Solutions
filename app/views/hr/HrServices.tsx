"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { HRService } from '@/app/types/serviceType';

const HRServiceSection: React.FC<HRService> = ({
  title,
  description,
  buttonText,
  image,
  listTitle,
  points,
  reverse = false,
}) => {
  return (
    <section className="bg-black text-white py-16 px-6 lg:px-24 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Header & Image Area */}
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-12`}>
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl">
              <img src={image} alt={title} className="w-full h-auto object-cover aspect-[16/9] lg:aspect-[4/3]" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {description}
            </p>
            <button className="flex items-center gap-2 bg-[#0fb8ad] hover:bg-[#0da298] text-white px-6 py-3 rounded-lg font-semibold transition-all group">
              {buttonText}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Feature List Area */}
        <div className="pt-8">
          <h3 className="text-2xl font-bold mb-8">{listTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 py-4 border-b border-gray-900 group"
              >
                <div className="bg-gray-900 p-2 rounded-full group-hover:bg-[#0fb8ad]/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0fb8ad]" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HRServiceSection;