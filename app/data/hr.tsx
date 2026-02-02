import { HRService } from "@/app/types/serviceType";
import hrOne from "@/public/assets/hr 1.jpg";
import hrTwo from "@/public/assets/hr 2.jpg";
import hrThree from "@/public/assets/hr 3.jpg";
const hrData: HRService[] = [
  {
    title: "Payroll Management",
    description:
      "Managing payroll with compliance and accuracy is a challenge most businesses face. NCRI streamlines payroll through robust systems backed by certified experts, handling $500M in wages annually.",
    buttonText: "Simplify Payroll",
    image: hrOne,
    listTitle: "Our Payroll Services Cover",
    points: [
      "Wage administration and compensation",
      "Customized reporting and analytics for workforce insights",
      "Tax filings and compliance with statutory regulations",
      "End-to-end payroll management for global teams",
    ],
    reverse: false,
  },
  {
    title: "Performance Management",
    description:
      "We help organizations build a culture of accountability and excellence by aligning individual goals with organizational objectives.",
    buttonText: "Boost Workforce Performance",
    image: hrTwo,
    listTitle: "Our Solutions Include",
    points: [
      "Skill Matrix Development to identify and map employee competencies",
      "Clear role based competency frameworks",
      "Objective setting workshops for alignment across teams",
      "SMART KPIs tailored to each role",
      "Ongoing performance tracking and optimization",
    ],
    reverse: true,
  },
  {
    title: "Psychometric Assessments",
    description:
      "Our certified organizational psychologists deliver scientifically validated tools to evaluate workforce potential. This helps organizations make data-driven talent decisions while improving team dynamics and employee engagement.",
    buttonText: "Build High-Performing Teams",
    image: hrThree,
    listTitle: "Our Assessments Include",
    points: [
      "Cognitive ability tests to measure problem solving skills",
      "Stress management and adaptability evaluations",
      "Personality profiling for cultural alignment",
      "Behavioral interviews and scenario based assessments",
    ],
    reverse: false,
  },
];
export default hrData;
