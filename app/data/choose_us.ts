import { FeatureHighlightProps } from '@/app/types/serviceType';
// data for why choose us section in virtual assistance page
export const vaHighlight: FeatureHighlightProps = {
  title: "Why Choose Virtual Assistance?",
  subtitle: "Business leaders face the same challenges.",
  image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Why-Choose-Virtual-Assistance.webp",
  buttonText: "Partner with World-Class Virtual Talent",
  reasons: [
    {
      title: "Operational Freedom",
      description: "Redirect your energy toward big-picture strategy while we handle repetitive tasks.",
    },
    // ... add the rest of your reasons here
  ]
};
// data for why choose us section in hr service page
export const hrHighlight: FeatureHighlightProps = {
  title: "Why Choose Our HR Solutions?",
  subtitle: "Streamline your workforce management efficiently.",
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  buttonText: "Transform Your HR Today",
  reasons: [
    {
      title: "Compliance Mastery",
      description: "Stay ahead of labor laws and regulations with our expert-led compliance auditing.",
    },
    {
        title: "Cultural Alignment",
        description: "We don't just find skills; we find people who fit your company's unique DNA.",
    }
  ]
};