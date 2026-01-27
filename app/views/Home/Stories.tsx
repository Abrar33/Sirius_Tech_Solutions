"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';

// 1. Define the Interface for our Story objects
interface Story {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  challenges: string[];
  solutions: string[];
}

const stories: Story[] = [
  {
    id: 1,
    title: "SaaS Startup Achieves 2.8x ROI on Ad Spend",
    subtitle: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    challenges: ["Low lead-to-customer conversion rates.", "Inefficient ad spend on unqualified leads."],
    solutions: ["Data-driven LinkedIn & Google targeting.", "Heatmap-based landing page optimization.", "3.5x increase in qualified leads."]
  },
  {
    id: 2,
    title: "E-commerce Giant Scales Revenue by 40% YoY",
    subtitle: "Automation & Personalization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    challenges: ["High cart abandonment rates.", "Lack of personalized customer journeys."],
    solutions: ["AI-driven product recommendations.", "Automated email marketing workflows.", "Reduced churn by 15% in 6 months."]
  },
  {
    id: 3,
    title: "FinTech Firm Streamlines Compliance with AI",
    subtitle: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    challenges: ["Slow manual verification processes.", "Increasing regulatory pressure."],
    solutions: ["Integrated automated KYC verification.", "Reduced processing time by 60%.", "Achieved 100% compliance accuracy."]
  }
];

export default function SuccessStories(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0); 
  const AUTOPLAY_INTERVAL = 8000;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // 2. Type the Slide Variants
  const slideVariants: Variants = {
    enter: (d: number) => ({
      x: d > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (d: number) => ({
      x: d < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    })
  };

  return (
    <section className="min-h-screen bg-[#020a0a] text-white py-24 px-6 relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#14b8a610_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <header className="mb-16 text-center lg:text-left lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-[#14b8a6]/30 bg-[#14b8a6]/5 text-[#14b8a6] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Impact
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Global <span className="text-[#14b8a6]">Success</span> <br className="hidden md:block" /> Stories.
          </h2>
        </header>

        <div className="relative px-0 lg:px-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="lg:col-span-5 relative h-[300px] lg:h-auto overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  src={stories[currentIndex].image} 
                  alt={stories[currentIndex].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020a0a] via-transparent to-transparent opacity-80" />
                <div className="absolute top-10 left-10">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Project Type</span>
                  <span className="text-white text-lg font-semibold">{stories[currentIndex].subtitle}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center relative">
                <h3 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
                  {stories[currentIndex].title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-[#14b8a6] text-[10px] font-black uppercase tracking-[0.2em] border-b border-[#14b8a6]/20 pb-2">The Challenge</h4>
                    <ul className="space-y-4">
                      {stories[currentIndex].challenges.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/20 pb-2">Key Outcomes</h4>
                    <ul className="space-y-4">
                      {stories[currentIndex].solutions.map((item, i) => (
                        <li key={i} className="text-gray-200 text-sm font-medium flex gap-3 italic">
                          <span className="text-[#14b8a6]">/</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <button className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase hover:text-[#14b8a6] transition-colors">
                    Explore Details <MoveRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute -bottom-20 right-0 lg:right-12 flex gap-4">
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}