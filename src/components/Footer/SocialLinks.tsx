import React from 'react';
import { Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/Woxsen' },
  { icon: Instagram, href: 'https://www.instagram.com/woxsen_university/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/school/woxsen-university/' },
  { icon: Globe, href: 'https://woxsen.edu.in/' },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}