"use client";

import React from 'react';
import { Zap, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Interface for the benefit items
 */
interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: <Zap className="text-teal-400 w-8 h-8" />,
    title: "Fast Response Time",
    description: "Our dedicated team ensures a reply within 24 hours to keep your momentum going."
  },
  {
    icon: <Globe className="text-teal-400 w-8 h-8" />,
    title: "Global Expertise",
    description: "Seamlessly serving enterprise clients across the US, Canada, UK, UAE & Pakistan."
  }
];

/**
 * WhyConnect Component
 * A clean, professional section highlighting the key value propositions 
 * for initiating a partnership.
 */
const WhyConnect: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            Why Connect <br /> 
            <span className="text-teal-500">With Us?</span>
          </h2>
          <p className="text-zinc-400 italic text-xl md:text-2xl leading-relaxed max-w-md">
            "Your success is our priority. Let's start the conversation that transforms your business today."
          </p>
        </motion.div>

        {/* Right Side: Benefits List */}
        <div className="space-y-10">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex gap-6 ${index !== 0 ? 'border-t border-zinc-800 pt-10' : ''}`}
            >
              <div className="shrink-0 p-3 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-bold text-teal-400 text-xl mb-2">
                  {benefit.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Support Indicator */}
          <div className="flex items-center gap-3 text-zinc-500 text-sm font-medium pt-4">
            <MessageSquare size={16} className="text-teal-500" />
            <span>24/7 Technical Support Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyConnect;