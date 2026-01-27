import { 
  Headphones, UserRound, TrendingUp, 
  Settings, DollarSign, Rocket 
} from 'lucide-react';

export interface NavLink {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export interface ServiceGroup {
  links: NavLink[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    links: [
      { name: "BPO Services", icon: <Headphones className="w-4 h-4" />, path: "/services/bpo" },
      { name: "HR Services", icon: <UserRound className="w-4 h-4" />, path: "/services/hr" },
      { name: "IT Services", icon: <Settings className="w-4 h-4" />, path: "/services/it" },
    ]
  },
  {
    links: [
      { name: "Virtual Assistance", icon: <Rocket className="w-4 h-4" />, path: "/services/virtual-assistance" },
      { name: "Digital Marketing", icon: <TrendingUp className="w-4 h-4" />, path: "/services/digital-marketing" },
      { name: "Finance & Accounts", icon: <DollarSign className="w-4 h-4" />, path: "/services/finance" },
    ]
  }
];