"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { whoWeAreData } from "@/app/data/who_we_are";
import { WhoWeAreSection } from "@/app/types/serviceType";

export default function WhoWeAre() {
  return (
    <section className="bg-black py-28 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center text-5xl font-extrabold md:text-7xl"
        >
          <span className="bg-gradient-to-b from-teal-400 to-teal-900 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(20,184,166,0.35)]">
            Who We Are
          </span>
        </motion.h2>

        <div className="space-y-24">
          {whoWeAreData.map((section: WhoWeAreSection, idx: number) => (
            <React.Fragment key={section.id}>
              <div className={`grid grid-cols-1 items-center gap-20 md:grid-cols-2`}>
                
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`space-y-8 ${section.reverse ? "order-1 md:order-2" : "order-1"}`}
                >
                  {section.points.map((text, pIdx) => (
                    <ListItem key={pIdx} text={text} />
                  ))}
                </motion.div>

                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`relative ${section.reverse ? "order-2 md:order-1" : "order-2"}`}
                >
                  <ImageCard img={section.image} />
                </motion.div>
              </div>

              {/* Add Divider between items, but not after the last one */}
              {idx < whoWeAreData.length - 1 && (
                <div className="h-px w-full bg-gray-800" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Keep ListItem, ImageCard, and highlightNumbers functions as they are below --- */

function ListItem({ text }: { text: string }): React.ReactElement {
  return (
    <div className="group">
      <div className="flex items-center gap-6">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xl font-bold transition group-hover:scale-110">
          →
        </span>
        <p className="text-lg leading-relaxed text-gray-200">
          {highlightNumbers(text)}
        </p>
      </div>
      <div className="mt-6 ml-[72px] h-px w-[75%] bg-gradient-to-r from-gray-800 to-transparent" />
    </div>
  );
}

function ImageCard({ img }: { img: string | any }): React.ReactElement {
  const src = typeof img === 'object' ? img.src : img;
  return (
    <>
      <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <img
          src={src}
          alt="About Sirius Tech"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 -z-10 rounded-2xl bg-teal-500/15 blur-3xl" />
    </>
  );
}

function highlightNumbers(text: string): ReactNode[] {
  return text.split(/(\d+\+?)/g).map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="font-semibold text-teal-400">
        {part}
      </span>
    ) : (
      part
    )
  );
}