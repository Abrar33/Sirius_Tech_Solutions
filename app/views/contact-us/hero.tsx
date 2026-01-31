"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import contact from '@/public/assets/contact.jpg'
const Hero: React.FC = () => {
  return (
    /* Added pt-20 (mobile) and pt-24 (desktop) to push content below the navbar */
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-black pt-20 lg:pt-24">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={contact} // Make sure to add your image path here!
          alt="Contact Support Background" 
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Gradient Overlay - darkened slightly for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          {/* Adjusted font sizes for better mobile scaling */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
            Let’s Build Something <br />
            <span className="text-teal-500 italic">Extraordinary Together</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
            We are your trusted partner in growth, offering a comprehensive suite 
            of business solutions that help companies thrive across industries. 
            Many businesses are already shining with our support—yours could be next.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 px-10 rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-teal-500/20">
              Contact Us
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;