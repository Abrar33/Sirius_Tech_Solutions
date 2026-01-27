// components/blog/SocialShare.tsx
"use client";
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export const SocialShare = ({ title, url }: { title: string; url: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    { 
      icon: <Facebook size={20} />, 
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Twitter size={20} />, 
      link: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-sky-500"
    },
    { 
      icon: <Linkedin size={20} />, 
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-blue-700"
    },
  ];

  return (
    <div className="bg-teal-500 rounded-2xl p-6 sticky top-32 h-fit">
      <h3 className="text-black font-bold mb-4">Share with your community!</h3>
      <div className="flex gap-3">
        {platforms.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white p-2 rounded-lg text-black transition-all ${p.color} hover:text-white`}
          >
            {p.icon}
          </a>
        ))}
      </div>
    </div>
  );
};