"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// --- TYPES & INTERFACES ---

interface SupportLevel {
  id: string | number;
  label: string;
  desc: string;
}

interface DynamicServiceSectionProps {
  layout?: "standard" | "grid" | "support" | "banner";
  image: string;
  title: string;
  description: string;
  subheading?: string;
  points?: string[];
  levels?: SupportLevel[];
  buttonText?: string;
  reverse?: boolean;
  contactPath?: string; // Optional: specify the contact page path
}

interface ActionButtonProps {
  text: string;
  outline?: boolean;
  onClick?: () => void;
}

interface ListItemProps {
  text: string;
}

// --- COMPONENT ---

const DynamicServiceSection: React.FC<DynamicServiceSectionProps> = ({
  layout = "standard",
  image,
  title,
  description,
  subheading,
  points = [],
  levels = [],
  buttonText,
  reverse = false,
  contactPath = "/contact", // Default path to your contact page
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // --- LOGIC: SCROLL OR NAVIGATE ---
  const handleAction = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      // Scenario A: We are on the page where the contact section exists
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scenario B: We are on a different page (like Home or Services)
      // We navigate to the contact page.
      // Note: If you want it to scroll automatically after load,
      // ensure the contact page has the section with id="contact"
      router.push(`${contactPath}#contact`);
    }
  };

  // Animation Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // --- SUB-COMPONENTS ---
  const ActionButton: React.FC<ActionButtonProps> = ({
    text,
    outline = false,
    onClick,
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all group mt-6 ${
        outline
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "bg-[#14b8a6] hover:bg-[#0d9488] text-white"
      }`}
    >
      {text}
      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  );

  const ListItem: React.FC<ListItemProps> = ({ text }) => (
    <div className="flex items-start gap-4 group py-3 border-b border-gray-800">
      <div className="mt-1 bg-gray-800 p-1.5 rounded-full shrink-0 group-hover:bg-[#14b8a6] transition-colors">
        <ArrowRight className="w-3.5 h-3.5 text-[#14b8a6] group-hover:text-white" />
      </div>
      <p className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
        {text}
      </p>
    </div>
  );

  // --- LAYOUT RENDERING ---

  if (layout === "banner") {
    return (
      <section className="px-6 py-12 bg-[#020A0A]">
        <div className="relative max-w-7xl mx-auto h-100 rounded-4xl overflow-hidden flex items-center justify-center text-center">
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            alt="CTA"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="relative z-10 px-4 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              {title}
            </h2>
            <p className="text-gray-200 text-lg">{description}</p>
            {buttonText && (
              <div className="flex justify-center">
                <ActionButton
                  text={buttonText}
                  outline
                  onClick={handleAction}
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-20 px-6 border-b border-gray-900">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}
      >
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>

          {buttonText && (
            <ActionButton text={buttonText} onClick={handleAction} />
          )}

          {subheading && (
            <h3 className="text-xl font-bold pt-6">{subheading}</h3>
          )}

          <div
            className={`pt-4 ${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-x-8" : "space-y-1"}`}
          >
            {points.map((p, i) => (
              <ListItem key={i} text={p} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {layout === "support" ? (
            <div className="space-y-6">
              {levels.map((level, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
                >
                  <div className="bg-[#111] border border-gray-800 rounded-lg px-6 py-4 min-w-45 text-center group-hover:border-teal-500/50 transition-colors">
                    <span className="text-[#14b8a6] font-bold text-xl">
                      {level.id}
                    </span>
                    <span className="text-white font-semibold text-xl ml-2">
                      {level.label}
                    </span>
                  </div>
                  <p className="text-gray-400 text-base flex-1">{level.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="rounded-4xl w-full h-auto border border-gray-800 shadow-2xl"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicServiceSection;
