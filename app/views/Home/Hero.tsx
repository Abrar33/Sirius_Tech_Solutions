"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import StatsCard from "./StatCard";
import { heroSlides } from "@/app/data/hero";
import { HeroSlide } from "@/app/types/serviceType";

export default function Hero(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper to handle both URL strings and Imported Object sources
  const getImgSrc = (img: any): string => {
    return typeof img === 'object' ? img.src : img;
  };

  const currentSlide = heroSlides[index];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={getImgSrc(currentSlide.image)}
            alt={`Hero Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Using standard Tailwind v3 gradient class */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#072220]/80 via-[#072220]/60 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {currentSlide.title} <br />
              <span className="text-teal-400">{currentSlide.subtitle}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              {currentSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-teal-400">
            Book a Free Consultation →
          </button>
        </motion.div>

        {/* SINGLE Stats Card (Not Sliding) */}
        <StatsCard />
      </div>
      
    </section>
  );
}