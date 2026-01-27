import React from 'react';
import {
  Database,
  Megaphone,
  Code2,
  Filter,
  LucideIcon // 1. Import the type for Lucide icons
} from "lucide-react";

// 2. Define the Interface for the service structure
interface Service {
  title: string;
  icon: LucideIcon;
  points: string[];
}

const services: Service[] = [
  {
    title: "BPO & Strategic Communication",
    icon: Database,
    points: [
      "The Voice of Your Growth",
      "We act as a natural extension of your brand by handling every customer conversation with empathy and professional clarity.",
      "Our specialists focus on identifying high-quality prospects and initiating the meaningful dialogues that fill your sales pipeline.",
      "Every interaction is backed by a rigorous internal audit process to ensure your business maintains a clinical standard of excellence."
    ],
  },
  {
    title: "IT & App Development",
    icon: Megaphone,
    points: [
      "Engineering Your Digital Future",
      "We transform complex business requirements into intuitive digital experiences that your users will actually enjoy navigating.",
      "Our development team builds robust and scalable mobile and web infrastructures designed to grow alongside your increasing demands.",
      "Every line of code undergoes thorough performance testing to guarantee a secure and seamless launch for your global audience."
    ],
  },
  {
    title: "Social Media & Creative Suite",
    icon: Code2,
    points: [
      "Amplifying Your Brand Story",
      "We manage the daily pulse of your online community to ensure your business remains relevant and engaged in a fast-moving digital world.",
      "Our creative suite pairs strategic platform management with high-impact visuals that turn casual scrollers into loyal brand advocates.",
      "We produce professional video content and graphic assets that capture the unique personality and premium quality of your brand."
    ],
  },
  {
    title: "Virtual Assistant & Admin Support",
    icon: Filter,
    points: [
      "Reclaiming Your Executive Focus",
      "We step in to handle the essential daily logistics so you can finally redirect your energy toward high-level strategy and vision.",
      "Our assistants provide the administrative backbone your business needs by managing complex schedules and meticulous data operations with ease.",
      "You gain access to a dedicated partner who streamlines your back-office tasks and ensures your operations run smoothly behind the scenes."
    ],
  },
];

/**
 * VirtualAssistantServices Component
 * Renders a grid of specialized service cards with dynamic icons.
 */
const VirtualAssistantServices: React.FC = () => {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="mb-14 text-4xl font-bold leading-tight md:text-5xl">
          Our Virtual Assistance <br /> Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service: Service, index: number) => {
            // Assigning to a capitalized variable allows rendering it as a JSX tag
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur transition hover:border-teal-500/40"
              >
                {/* Header */}
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-gray-300">
                  {service.points.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VirtualAssistantServices;