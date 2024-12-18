import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeSelector } from '../ThemeSelector';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const ThemeIcon = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube
  }[theme];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/Woxsen.png"
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <ThemeIcon className="w-6 h-6 theme-color" />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSelector />
            <button 
              onClick={() => navigate('/contact')}
              className="px-4 py-2 theme-gradient text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}