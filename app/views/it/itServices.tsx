"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

// 1. Define types for the different layout variations
interface BaseService {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

interface StandardService extends BaseService {
  type: "standard" | "grid";
  points: string[];
  image: string;
  subheading?: string;
}

interface SupportLevel {
  id: string;
  label: string;
  desc: string;
}

interface SupportService extends BaseService {
  type: "support";
  levels: SupportLevel[];
}

// 2. Combine into a Union type
type ServiceItem = StandardService | SupportService;

const servicesData: ServiceItem[] = [
  {
    id: 1,
    type: "standard",
    title: "Social Media Management",
    description:
      "Turn followers into loyal customers with a data-driven social strategy. Our social media experts manage everything from content creation to community engagement.",
    points: [
      "Account setup & brand alignment",
      "Content calendar planning & design",
      "Audience engagement & reputation management",
      "Paid social campaigns & analytics",
    ],
    buttonText: "Engage Your Audience Today",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    reverse: false,
  },
  {
    id: 2,
    type: "grid",
    title: "IT Staff Augmentation",
    description:
      "Scale your team instantly with 500+ certified IT experts across leading technologies. From front-end and back-end developers to mobile engineers, UI/UX designers, DevOps specialists, testers, and project managers, we provide the right talent, right when you need it.",
    subheading: "Our Talent Pool Includes:",
    points: [
      "90+ Front-End & Back-End Developers (Vue.js, Node.js)",
      "70+ DevOps Engineers (Docker, Jenkins, Kubernetes, Azure)",
      "100+ Mobile App Developers (Swift, Flutter, React Native & more)",
      "60+ QA & SQA Engineers (Selenium, JUnit, Cypress)",
      "50+ UI/UX Designers (Figma, Webflow, Adobe, Framer)",
      "Certified Project Managers (Agile, Jira, Asana)",
    ],
    buttonText: "Hire Certified IT Experts",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    reverse: true,
  },
  {
    id: 3,
    type: "grid",
    title: "Software Development",
    description:
      "With 200+ successful projects delivered, we specialize in custom-built software that solves complex business needs.",
    points: [
      "Web Development (Frontend, Backend, Full-Stack)",
      "E-commerce Platforms & Payment Systems",
      "Mobile Apps (iOS, Android, Cross-Platform)",
      "UI/UX Prototyping",
      "API Development & Integrations",
      "QA & Testing",
      "SaaS & Enterprise Solutions",
      "Ongoing Support & Feature Enhancements",
    ],
    buttonText: "Build Custom Software Today",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    reverse: false,
  },
  {
    id: 4,
    type: "support",
    title: "Level 1, Level 2 & Level 3 Support Services",
    description:
      "We deliver 24/7 end-to-end support to keep your business running smoothly. With a 99% resolution rate and fast response times, our multi-level support ensures no issue goes unresolved. From quick fixes to complex escalations, we ensure seamless operations and zero downtime.",
    buttonText: "Get 24/7 IT Support",
    levels: [
      {
        id: "Level 1",
        label: "Support",
        desc: "First-line help desk for common issues, password resets, and user guidance.",
      },
      {
        id: "Level 2",
        label: "Support",
        desc: "Technical troubleshooting, system configurations, and incident resolution.",
      },
      {
        id: "Level 3",
        label: "Support",
        desc: "Advanced issue handling, bug fixes, system updates, and vendor coordination.",
      },
    ],
  },
];

// Reusable Button Component
const ActionButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-white px-6 py-3 rounded-md font-semibold transition-all group mt-6"
  >
    {text}
    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </button>
);

// Reusable List Item Component
const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-4 group py-3 border-b border-gray-800">
    <div className="mt-1 bg-gray-800 p-1.5 rounded-full shrink-0 group-hover:bg-[#14b8a6] transition-colors">
      <ArrowRight className="w-3.5 h-3.5 text-[#14b8a6] group-hover:text-white" />
    </div>
    <p className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
      {text}
    </p>
  </div>
);

const ItServices: React.FC = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact#contact");
  };
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-teal-500/30">
      {servicesData.map((service) => (
        <section
          key={service.id}
          className="py-20 px-6 border-b border-gray-900"
        >
          <div
            className={`max-w-7xl mx-auto flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}
          >
            {/* Left/Right Text Side */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {service.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>

              <ActionButton
                onClick={handleNavigation}
                text={service.buttonText}
              />

              {/* Grid List Logic */}
              {service.type === "grid" && service.subheading && (
                <h3 className="text-xl font-bold text-white pt-8">
                  {service.subheading}
                </h3>
              )}

              {service.type === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 pt-4">
                  {service.points.map((point, i) => (
                    <ListItem key={i} text={point} />
                  ))}
                </div>
              )}

              {/* Standard List Logic */}
              {service.type === "standard" && (
                <div className="space-y-1 pt-4">
                  {service.points.map((point, i) => (
                    <ListItem key={i} text={point} />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Image/Support Side */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {service.type === "support" ? (
                <div className="space-y-6">
                  {service.levels.map((level, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
                    >
                      <div className="bg-[#111] border border-gray-800 rounded-lg px-6 py-4 min-w-45 text-center shadow-xl group-hover:border-teal-500/50 transition-colors">
                        <span className="text-[#14b8a6] font-bold text-xl">
                          {level.id}
                        </span>
                        <span className="text-white font-semibold text-xl ml-2">
                          {level.label}
                        </span>
                      </div>
                      <p className="text-gray-400 text-base flex-1">
                        {level.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-teal-500/20 to-blue-500/20 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-4xl w-full h-auto object-cover border border-gray-800 shadow-2xl"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ItServices;
