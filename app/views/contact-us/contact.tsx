import React from 'react';
import Hero from './hero';
import WhyConnect from './WhyContact';
import ContactSection from './contactSection';
import DynamicServiceSection from '@/app/views/components/dynamic_service';
import { ServiceItem, SupportLevel } from '@/app/types/serviceType';

// Data strictly following the provided content
const serviceData: ServiceItem[] = [
  {
    title: "Social Media Management",
    description: "Turn followers into loyal customers with a data-driven social strategy.",
    points: [
      "Account setup & brand alignment",
      "Content calendar planning & design",
      "Audience engagement & reputation management",
      "Paid social campaigns & analytics"
    ],
    buttonText: "Engage Your Audience Today",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Social-Media-Management.webp",
    reverse: false
  },
  {
    title: "Website Content & Design Development",
    description: "Your website is your digital storefront—it must impress, inform, and convert.",
    points: [
      "Custom website design & UI/UX",
      "Content development that resonates",
      "SEO optimization for visibility",
      "E-commerce integration & performance tracking"
    ],
    buttonText: "Build a Website That Converts",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Website-Content-Design-Development.webp",
    reverse: true
  }
];

const supportLevels: SupportLevel[] = [
  { id: "Level 1", label: "Support", desc: "First-line help desk for common issues, password resets, and user guidance." },
  { id: "Level 2", label: "Support", desc: "Technical troubleshooting, system configurations, and incident resolution." },
  { id: "Level 3", label: "Support", desc: "Advanced issue handling, bug fixes, system updates, and vendor coordination." }
];

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      
      {/* Dynamic Services Section using the typed data */}
      <section className="py-20">
        {serviceData.map((service, index) => (
          <DynamicServiceSection key={index} {...service} />
        ))}
      </section>

      {/* Support Levels Section (Level 1, 2, 3) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportLevels.map((level) => (
            <div key={level.id} className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-teal-500/50 transition-all">
              <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">{level.id} {level.label}</span>
              <p className="text-zinc-400 mt-4 leading-relaxed">{level.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyConnect />
      <ContactSection />
    </div>
  );
};

export default ContactPage;