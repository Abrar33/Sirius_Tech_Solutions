"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { TeamProps, TeamMember } from '@/app/types/serviceType';

const Team: React.FC<TeamProps> = ({ heading, members }) => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tighter">
          {heading}
        </h2>

        {/* Improved Grid with consistent sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((member: TeamMember, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container: High Aspect Ratio to show full body if needed */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 aspect-2/3 border border-white/5">
                <Image 
                  src={member.imageUrl} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              <div className="mt-6 px-2">
                <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                <div className="flex items-center text-teal-500 mt-2 group/link cursor-pointer">
                  <MoveRight className="w-5 h-5 mr-3 transition-transform group-hover/link:translate-x-2" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;