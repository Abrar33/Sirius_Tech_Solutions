import { ServiceHeaderData } from "@/app/types/serviceType";
import finance from "@/public/assets/finance_header.jpg";
import ourService from "@/public/assets/our services.jpg";
import aboutUs from "@/public/assets/aboutus Header.jpg";
export const serviceHeaders: Record<string, ServiceHeaderData> = {
  bpo: {
    title: "Business Process Outsourcing (BPO)",
    description:
      "Outsource your customer service, technical support, and back-office operations to our expert BPO team. We deliver cost-effective solutions that enhance customer satisfaction and streamline your business processes.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  hr: {
    title: "HR Services",
    description:
      "Our HR services are designed to streamline your human resources operations, enhance employee engagement, and ensure compliance with labor laws. From recruitment and onboarding to payroll management and performance evaluation.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  virtualAssistant: {
    title: "Virtual Assistance",
    description:
      "Scale your productivity with world-class virtual talent. From administrative support to specialized technical tasks, we provide the engine for your business growth.",
    image: "/images/va-header.jpg",
  },
  digitalMarketing: {
    title: "Digital Marketing",
    description:
      "Drive traffic, engagement, and conversion with data-backed marketing strategies tailored for the modern digital landscape.",
    image: "/images/marketing-header.jpg",
  },
  financeAccounting: {
    title: "Finance & Accounting",
    description:
      "Optimize your financial operations with our comprehensive finance and accounting services, designed to enhance accuracy and efficiency.",
    image: finance,
  },
  ourServices: {
    title: "Our Services",
    description:
      "We offer a wide range of services to help your business thrive",
    image: ourService,
  },
  about_us: {
    title: "About Us",
    description: "Learn more about our company, mission, and values.",
    image: aboutUs,
  },
};
