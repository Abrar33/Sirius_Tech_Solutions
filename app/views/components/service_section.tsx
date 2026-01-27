"use client";

import React from 'react';
import Link from 'next/link'; // 1. Import Link
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ServiceItem, ServicesSectionProps } from '@/app/types/serviceType';

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const imageSrc = typeof service.image === 'object' ? service.image.src : service.image;

  return (
    <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 px-6 max-w-7xl mx-auto`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <h2 className="text-4xl font-bold text-white">{service.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
        
        <div className="space-y-4">
          {service.points.map((point, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="bg-gray-800 p-2 rounded-full group-hover:bg-teal-500 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:text-white" />
              </div>
              <p className="text-gray-200 border-b border-gray-700 pb-2 w-full">{point}</p>
            </div>
          ))}
        </div>
    {/* 2. Wrap the button in a Link component */}
        <Link href="/contact">
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 px-6 rounded-md transition-all mt-6 group">
            {service.buttonText}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </Link>
      </motion.div>

      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <img src={imageSrc} alt={service.title} className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => {
  return (
    <section className="bg-black py-12">
      {data.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
};

export default ServicesSection;