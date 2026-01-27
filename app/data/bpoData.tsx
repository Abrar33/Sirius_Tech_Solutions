import { ServiceItem } from '@/app/types/serviceType';

export const bpoServices: ServiceItem[] = [
  {
    title: "Inbound Customer Support",
    description: "Your customers deserve fast, reliable, and empathetic service. Our 24/7 inbound call center support ensures every query is handled with care and precision.",
    points: [
      "Order management, billing queries & technical support",
      "Complaint resolution with first call resolution focus",
      "Multi channel availability: Phone, Email, Chat & Social support",
    ],
    buttonText: "Engage Your Audience Today",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Inbound-Customer-Support.webp",
    reverse: false,
  },
  {
    title: "Lead Generation & Sales",
    description: "Fuel your pipeline with qualified leads and close more deals with our sales focused call center solutions.",
    points: [
      "Outbound calls & appointment setting",
      "B2B & B2C lead qualification",
      "Upselling & cross-selling campaigns",
      "Real-time CRM integration & reporting",
    ],
    buttonText: "Boost Convertion now",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Lead-Generation-Sales.webp",
    reverse: true,
  },
  {
    title: "Quality Assurance (QA)",
    description: "Our QA services safeguard compliance and brand consistency while improving customer satisfaction.",
    points: [
      "Call monitoring & evaluation",
      "Compliance checks & script adherence",
      "Customer feedback analysis",
      "Performance reporting & coaching recommendations",
    ],
    buttonText: "Optimize Your Service Quality",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Quality-Assurance.webp",
    reverse: false,
  },
];