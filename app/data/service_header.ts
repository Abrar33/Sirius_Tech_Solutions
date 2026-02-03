import { ServiceHeaderData } from "@/app/types/serviceType";
import bpo from "@/public/assets/bpo_header.jpeg";
import it from "@/public/assets/it_header.jpg";
import hr from "@/public/assets/hr_header.jpeg";
import finance from "@/public/assets/finance_header.jpg";
import ourService from "@/public/assets/our services.jpg";
import aboutUs from "@/public/assets/aboutus Header.jpg";
import va from "@/public/assets/va_header.jpg";
import dm from "@/public/assets/digitalmar_header.jpg";

export const serviceHeaders: Record<string, ServiceHeaderData> = {
  bpo: {
    title: "Business Process Outsourcing (BPO)",
    description:
      "At Sirius Tech Solutions, our BPO services help businesses reduce costs, improve efficiency, and deliver exceptional customer experiences through reliable outsourcing solutions.",
    image: bpo,
  },
 it: {
    title: "IT Services",
    description:
      "We provide scalable IT services, including software support, infrastructure management, and technical solutions that keep your business secure, connected, and future-ready.",
    image: it,
  },
 
  hr: {
    title: "HR Services",
    description:
      "Our HR services cover recruitment, payroll, compliance, and HR outsourcing—helping organisations build strong teams and manage their workforce efficiently.",
    image: hr,
  },
  virtualAssistant: {
    title: "Virtual Assistance",
    description:
      "Sirius Tech Solutions offers professional virtual assistant services to handle administrative tasks, lead generation, scheduling, and back-office support—so you can focus on growth.",
    image: va,
  },
  digitalMarketing: {
    title: "Digital Marketing",
    description:
      "Our digital marketing services drive online growth through SEO, social media marketing, paid advertising, and content strategies that increase visibility and conversions.",
    image: dm,
  },
  financeAccounting: {
    title: "Finance & Accounting",
    description:
      "We deliver accurate and compliant finance and accounting services, including bookkeeping, payroll, financial reporting, and accounts management—ensuring clarity and control over your finances.",
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
