"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceHeaderData } from '@/app/types/serviceType';
// 1. Define the props interface


/**
 * ServiceHeader Component
 * A reusable hero section for service pages featuring a large image,
 * title, and description with a grid-pattern background.
 */
const ServiceHeader: React.FC<ServiceHeaderData> = ({ title, description, image }) => {
  const imageSrc = typeof image === 'object' ? image.src : image;
  return (
    <section className="relative bg-[#020a0a] text-white pt-32 pb-16 px-6 overflow-hidden">
      {/* 1. Side Glow Gradients */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-teal-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-teal-900/20 to-transparent pointer-events-none" />
      
      {/* 2. Background Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* IMAGE COMES FIRST */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl aspect-[21/8] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.1)] mb-10"
        >
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TITLE COMES SECOND */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-center"
        >
          {title}
        </motion.h1>

        {/* DESCRIPTION COMES THIRD */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed font-normal text-center max-w-5xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHeader;