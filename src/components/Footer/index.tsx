import React from 'react';
import { SocialLinks } from './SocialLinks';

export function Footer() {
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
          <SocialLinks />
          <div className="text-right text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Woxsen University
          </div>
        </div>
      </div>
    </footer>
  );
}