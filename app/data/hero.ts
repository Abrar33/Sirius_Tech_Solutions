import { HeroSlide } from '@/app/types/serviceType';
import tech from "@/public/assets/tech.jpg";
import digi from "@/public/assets/tash.jpg";
// data for hero section on home page
export const heroSlides: HeroSlide[] = [
  {
    title: "Smart Solutions for a ",
    subtitle: "Digital World",
    description: "Delivering intelligent, scalable digital solutions that help businesses adapt, grow, and lead in an ever-evolving digital landscape.",
    image: digi,
  },
  {
    title: "Building the Future, Supporting",
    subtitle: "the Present",
    description: "We create robust digital platforms that solve today’s challenges while preparing your business for tomorrow’s opportunities.",
    image: tech,
  },
  {
    title: "Innovating the Way ",
    subtitle: "You Work",
    description: "Transforming workflows through modern technology, seamless user experiences, and efficient digital systems built for performance.",
    image: "/hero3.jpg",
  },
  {
    title: "Where High Tech Meets ",
    subtitle: "High Touch",
    description: "Blending advanced technology with a human-centered approach to deliver solutions that feel as good as they perform.",
    image: "/hero3.jpg",
  }
];