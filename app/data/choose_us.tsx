import { FeatureHighlightProps } from '@/app/types/serviceType';
import { Award, BarChart3, Briefcase, Calculator, Clock, Code2, Coins, Globe, Layers, LineChart, Mail, MessageSquare, PieChart, Search, Settings, ShieldCheck, TrendingDown, TrendingUp, Users } from 'lucide-react';
import whyHr from '@/public/assets/why_hr.jpg';
import whyVa from '@/public/assets/why_va.jpg';
// data for why choose us section in virtual assistance page
export const vaHighlight: FeatureHighlightProps = {
  title: "Why Choose Virtual Assistance?",
  subtitle: "Business leaders face the same challenges.",
  image: whyVa,
  buttonText: "Partner with World-Class Virtual Talent",
  reasons: [
    {
      title: "Operational Freedom",
      description: "Focus on strategy while we handle repetitive tasks ",
    },
    {
      title: " Secure & Reliable",
      description:" Advanced data privacy, multi-layer encryption, and strict confidentiality."
    },
    {title:"Proven Results",
      description:' 80% cost reduction, 99% on-time delivery, 100% client satisfaction.'
    },
    {
      title:"Flexible Engagements",
      description:"Onshore, offshore, and nearshore staffing tailored to your needs"
    }


    // ... add the rest of your reasons here
  ]
};
// data for why choose us section in hr service page
export const hrHighlight: FeatureHighlightProps = {
  title: "Why Choose Sirius Tech HR Solutions?",
  subtitle: "Streamline your workforce, boost employee engagement, and stay fully compliant with labor laws. Our global HR services cover talent acquisition, payroll management, performance tracking, and HR consulting all tailored to your business.",
  image: whyHr,
  buttonText: "Transform Your HR Today",
  reasons: [
    {
      title: "Expert Talent Acquisition",
      description: "Hire top IT & operational professionals perfectly matched to your needs.",
    },
    {
        title: "Payroll made easy",
        description: "Accurate, compliant, and hassle-free.",
    },
    {
      title: "Performance & Development",
      description: "Align goals and drive results.",
    },
    {
      title: "Psychometric Assessments",
      description: "Build high-performing teams.",
    },
    {
      title: "Global Expertise",
      description: "Supporting businesses across multiple countries.",}
    
  ]
};
export const BpoChooseUs = [
  { 
    icon: <Globe size={24} className="text-emerald-400" />, 
    text: "Elite Global Talent – Skilled professionals delivering world-class service." 
  },
  { 
    icon: <Clock size={24} className="text-emerald-400" />, 
    text: "24/7 Customer Support – Round-the-clock availability for maximum satisfaction." 
  },
  { 
    icon: <ShieldCheck size={24} className="text-emerald-400" />, 
    text: "Ironclad Security – Top-tier data protection for sensitive business information." 
  },
  { 
    icon: <TrendingDown size={24} className="text-emerald-400" />, 
    text: "Cost-Effective Solutions – Reduce operational costs without compromising quality." 
  },
  { 
    icon: <MessageSquare size={24} className="text-emerald-400" />, 
    text: "Multi-Channel Expertise – Engage customers via Phone, Email, Chat & Social Media seamlessly." 
  },
  { 
    icon: <Award size={24} className="text-emerald-400" />, 
    text: "Proven Track Record – Hundreds of satisfied clients across multiple industries." 
  },
];
export const ItChooseUs = [
  { 
    id: 1,
    icon: <Users size={24} className="text-emerald-400" />, 
    text: "Expert IT Talent – 500+ certified developers, engineers, and designers ready to scale your team." 
  },
  { 
    id: 2,
    icon: <Code2 size={24} className="text-emerald-400" />, 
    text: "Custom Software Solutions – Tailored web, mobile, SaaS, and enterprise applications." 
  },
  { 
    id: 3,
    icon: <Settings size={24} className="text-emerald-400" />, 
    text: "24/7 Support – Multi-level IT support ensuring zero downtime for your critical infrastructure." 
  },
  { 
    id: 4,
    icon: <BarChart3 size={24} className="text-emerald-400" />, 
    text: "Proven Results – Successfully delivered 200+ projects with measurable business impact." 
  },
  { 
    id: 5,
    icon: <Layers size={24} className="text-emerald-400" />, 
    text: "End-to-End Services – From development and integration to maintenance and optimization." 
  }
];
export const MarketingChooseUs = [
  { 
    id: 1,
    icon: <TrendingUp size={24} className="text-emerald-400" />, 
    text: "Data-Driven Strategies – Turn followers into loyal customers with targeted social media campaigns." 
  },
  { 
    id: 2,
    icon: <Search size={24} className="text-emerald-400" />, 
    text: "SEO & Content Expertise – Boost visibility with SEO-optimized websites, blogs, and multimedia content." 
  },
  { 
    id: 3,
    icon: <Mail size={24} className="text-emerald-400" />, 
    text: "Email Marketing Automation – Nurture leads and drive sales with personalized campaigns." 
  },
  { 
    id: 4,
    icon: <Globe size={24} className="text-emerald-400" />, 
    text: "Global Reach – Multilingual support across 20+ languages for worldwide audiences." 
  },
  { 
    id: 5,
    icon: <PieChart size={24} className="text-emerald-400" />, 
    text: "Proven Results – Real-time reporting, measurable ROI, and strategic brand alignment across platforms." 
  }
];
export const FinanceChooseUs = [
  { 
    id: 1,
    icon: <Briefcase size={24} className="text-emerald-400" />, 
    text: "Expert Financial Talent – Certified accountants with global experience handling complex financial operations." 
  },
  { 
    id: 2,
    icon: <Calculator size={24} className="text-emerald-400" />, 
    text: "Accuracy & Efficiency – Streamlined bookkeeping, full-cycle accounting, and automated processes reduce errors by 90%." 
  },
  { 
    id: 3,
    icon: <LineChart size={24} className="text-emerald-400" />, 
    text: "Strategic Insights – FP&A, dashboards, and reporting to support smarter business decisions." 
  },
  { 
    id: 4,
    icon: <ShieldCheck size={24} className="text-emerald-400" />, 
    text: "Secure & Compliant – Ironclad data security and adherence to all regulatory requirements." 
  },
  { 
    id: 5,
    icon: <Coins size={24} className="text-emerald-400" />, 
    text: "Proven Results – 30% faster month-end closings, 100% invoice visibility, and $500M+ processed annually." 
  }
];