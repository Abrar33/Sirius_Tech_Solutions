import { TeamMember } from '../types/serviceType';

import Abrar from '@/public/assets/Abrar 8.jpeg';
import mazhar from '@/public/assets/mazhar.jpeg';
import laiba from '@/public/assets/Laiba.jpeg'
import noman from '@/public/assets/Noman Yaseen.jpeg';
import Arshad from '@/public/assets/Arshad Abbasi.jpeg';
import Farooq from '@/public/assets/Farooq.jpeg';
import Umer from '@/public/assets/Umer.jpeg';
import Usman from '@/public/assets/usman.jpeg';
export const teamMembers: TeamMember[] = [
  {
    name:"Muhammad Farooq",
    role:"President ",
    imageUrl:Farooq
  },

  {
    name: "Abrar",
    role: "Web Developer ",
    imageUrl: Abrar,
  },

  {
    name: "Mazhar Iqbal",
    role: "Business Manager",
    imageUrl: mazhar,
  },
  {
    name:"Laiba",
role:"Virtual Assistant Manager",
imageUrl:laiba
  },
  {name:"Umer Hafiz",
role:"Digital Marketing Manager",
imageUrl:Umer
  },
  {name:"Usman Butt",
role:"BPO Services Manager",
imageUrl:Usman
  },
    {
    name:"Arshad Abbasi",
role:"HR Manager",
imageUrl:Arshad
  },
    {
    name:"Noman Yaseen",
role:"Client Success Manager",
imageUrl:noman
  }
];