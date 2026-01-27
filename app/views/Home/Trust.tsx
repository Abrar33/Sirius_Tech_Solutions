"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Globe, ShieldCheck, BadgeCheck, ClipboardCheck, Users } from 'lucide-react';

// 1. Define the interface for the Trust Points
interface TrustPoint {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const trustPoints: TrustPoint[] = [
  {
    id: 1,
    title: "500+ Certified Experts",
    description: "Covering IT, CX, Data, and Business Services",
    icon: <BadgeCheck className="w-12 h-12 text-[#14b8a6]" />,
  },
  {
    id: 2,
    title: "Advanced Data Integrity & Security",
    description: "We prioritize your business safety through strict internal privacy protocols, multi-layer data encryption, and a 100% commitment to confidential handling of all client assets.",
    icon: <ShieldCheck className="w-12 h-12 text-[#14b8a6]" />,
  },
  {
    id: 3,
    title: "Proven Results",
    description: "80% reduced costs, 99% on-time delivery, and 100% client satisfaction.",
    icon: <ClipboardCheck className="w-12 h-12 text-[#14b8a6]" />,
  },
  {
    id: 4,
    title: "Flexible Engagements",
    description: "Onshore, Offshore, and Nearshore staffing options",
    icon: <Users className="w-12 h-12 text-[#14b8a6]" />,
  },
];

export default function TrustSection(): React.ReactElement {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Header & Global Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-12 border-b border-gray-800">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Why Businesses Trust <br /> Sirius Tech Solutions
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start"
          >
            <Globe className="w-14 h-14 text-[#14b8a6] flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Global Presence</h3>
              <p className="text-gray-400 text-lg">
                Serving clients across North America, Europe, Middle East, Africa & Asia
              </p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: The 4-item Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 mt-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 mt-1">
                {point.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 leading-tight">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}