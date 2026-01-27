import { WhoWeAreSection } from '@/app/types/serviceType';
import teamImg from "@/public/assets/sirius.jpeg";

export const whoWeAreData: WhoWeAreSection[] = [
  {
    id: 1,
    points: [
      "Operating a seamless global network across multiple continents",
      "Empowering enterprises with borderless technology and strategic insights.",
      "Guided by a visionary leadership team with over 20 years of industry mastery.",
    ],
    image: 'https://images.pexels.com/photos/5990042/pexels-photo-5990042.jpeg',
    reverse: false
  },
  {
    id: 2,
    points: [
      "Tailored Solutions: Custom-built strategies designed to fit your unique business scale.",
      "24/7 Global Support: Reliable round-the-clock assistance across all time zones.",
      "End-to-End Excellence: Quality-assured results from initial code to final customer interaction"
    ],
    image: teamImg,
    reverse: true
  }
];