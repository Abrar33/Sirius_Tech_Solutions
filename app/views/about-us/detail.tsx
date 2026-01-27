"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
interface HighlightItem {
  id: number;
  iconName: string; // Changed from icon: LucideIcon
  text: string;
}
interface HighlightsProps {
  data: HighlightItem[];
}

const CompanyHighlights: React.FC<HighlightsProps> = ({ data }) => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {data.map((item, index) =>{

            const LucideIcon = (Icons as any)[item.iconName] || Icons.HelpCircle;
           return(
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-5 py-8 border-b border-gray-800 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0f0f0f] border border-gray-800 flex items-center justify-center group-hover:border-teal-500/50 transition-colors">
                <LucideIcon className="w-6 h-6 text-teal-500" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <p className="text-gray-200 text-lg font-medium leading-snug">
                {item.text}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;