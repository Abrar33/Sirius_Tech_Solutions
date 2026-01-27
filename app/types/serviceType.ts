import { StaticImageData } from 'next/image';
// src/types/services.ts
import { ReactElement } from 'react';

export interface Feature {
  icon: ReactElement;
  text: string;
}

export interface HRService {
  title: string;
  description: string;
  listTitle: string;
  points: string[];
  buttonText: string;
  image: string;
  reverse?: boolean;
}

export interface SupportLevel {
  id: string | number;
  label: string;
  desc: string;
}
// why choose us which used for virtual assistance page and hr page
export interface HighlightReason {
  title: string;
  description: string;
}

export interface FeatureHighlightProps {
  title: string;
  subtitle?: string;
  reasons: HighlightReason[];
  image: string;
  buttonText: string;
}
// src/app/views/Home/WhoWeAre.tsx
export interface WhoWeAreSection {
  id: number;
  points: string[];
  image: string | any; // Supports both URLs and imported StaticImageData
  reverse?: boolean;   // Controls text/image order
}
// src/app/views/Home/Hero.tsx
export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string | any; // Supports URLs and static imports
}
// src/app/views/services_header.tsx
export interface ServiceHeaderData {
  title: string;
  description: string;
  image: string | any; // Supports URLs and local assets
}
//BPO types and service_section.tsx
export interface BPOFeature {
  icon: React.ReactElement;
  text: string;
}

export interface BPOService {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  image: string;
  reverse: boolean;
}

export interface BPOData {
  header: {
    title: string;
    description: string;
    image: string;
  };
  banner: {
    title: string;
    description: string;
    image: string;
    buttonText: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  image: string | any; // Supports URLs and static imports
  reverse?: boolean;
}

export interface ServicesSectionProps {
  data: ServiceItem[];
}// Finance impact.tsx
export interface ImpactStat {
  id: number;
  percentage: string;
  label: string;
}

export interface ProvenImpactProps {
  title?: string;
  stats: ImpactStat[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string | StaticImageData;
}

export interface TeamProps {
  heading: string;
  members: TeamMember[];
}