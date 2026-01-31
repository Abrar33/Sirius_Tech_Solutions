"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FeatureHighlightProps,
  HighlightReason,
} from "@/app/types/serviceType";
import { useRouter } from "next/navigation";

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  title,
  subtitle,
  reasons,
  image,
  buttonText,
}) => {
  const router = useRouter();

  // --- LOGIC: SCROLL OR NAVIGATE ---
  const handleAction = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      // Scenario A: Contact section is on the current page
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scenario B: Navigate to the contact page with the hash
      router.push(`/contact`);
    }
  };

  return (
    <section className="bg-black px-6 py-20 text-white md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-gray-400">{subtitle}</p>}

          <div className="mt-10 space-y-8">
            {reasons.map((item: HighlightReason, index: number) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                    <ArrowUpRight size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
                {index !== reasons.length - 1 && (
                  <div className="mt-6 h-px w-full bg-gray-800" />
                )}
              </div>
            ))}
          </div>

          {/* Updated Button with onClick handler */}
          <button
            onClick={handleAction}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-black transition hover:bg-teal-400"
          >
            {buttonText}
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-teal-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
