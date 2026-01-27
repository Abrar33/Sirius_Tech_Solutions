import { TeamMember } from '../types/serviceType';
import FaisalImage from '@/public/assets/faisal.jpeg';
import Abrar from '@/public/assets/Abrar 8.jpeg';
import mazhar from '@/public/assets/mazhar.jpeg';
import laiba from '@/public/assets/Laiba.jpeg'
import noman from '@/public/assets/Noman Yaseen.jpeg';
import Arshad from '@/public/assets/Arshad Abbasi.jpeg';
export const teamMembers: TeamMember[] = [
  {
    name: "Faisal Khan",
    role: "Virtual Assistant",
    imageUrl: FaisalImage, 
  },
  {
    name: "Abrar",
    role: "Web Developer Manager",
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