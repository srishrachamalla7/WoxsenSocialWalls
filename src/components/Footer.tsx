import React from 'react';
import { Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/Woxsen' },
    { icon: Instagram, href: 'https://www.instagram.com/woxsen_university/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/school/woxsen-university/' },
    { icon: Globe, href: 'https://woxsen.edu.in/' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Woxsen University</h3>
            <p className="text-gray-600 text-sm">
              Stay connected with our social media
            </p>
          </div>
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
          <div className="text-right text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Woxsen University
          </div>
        </div>
      </div>
    </footer>
  );
}