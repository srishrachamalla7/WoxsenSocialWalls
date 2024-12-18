import React from 'react';
import { Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/woxsen_logo_1.png"
              alt="Woxsen Logo"
              className="h-12 w-auto"
            />
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            <Instagram className="w-6 h-6 text-[#E1306C]" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 instagram-gradient text-white font-medium rounded-lg">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}