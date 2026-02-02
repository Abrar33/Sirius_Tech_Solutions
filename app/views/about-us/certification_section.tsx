"use client";

import React from "react";
import Image from "next/image";
import greatPlaceT from "@/public/assets/GREAT-PLACE-TO-WORK.webp";
import oesm from "@/public/assets/OECM-GOLD.webp";

const CertificationsSection = () => {
  const certifications = [
    { id: 1, src: greatPlaceT, alt: "Great Place to Work" },
    
    { id: 3, src: oesm, alt: "OECM Gold Partner" },
  ];

  // We need enough items to fill the width twice
  const duplicatedLogos = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <section className="bg-black py-16 overflow-hidden">
      {/* 1. The Global CSS for the Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          Certifications and Awards
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pause-on-hover">
        {/* Gradient masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />

        <div className="overflow-hidden flex">
          {/* 2. The Animated Track */}
          <div className="flex w-max gap-12 md:gap-24 items-center animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-none w-28 md:w-36 h-28 md:h-36 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  priority={index < 6}
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;