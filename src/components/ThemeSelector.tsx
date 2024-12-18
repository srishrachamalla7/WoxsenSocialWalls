import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('instagram')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          theme === 'instagram' ? 'instagram-gradient text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Instagram
      </button>
      <button
        onClick={() => setTheme('facebook')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          theme === 'facebook' ? 'facebook-gradient text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        Facebook
      </button>
      <button
        onClick={() => setTheme('youtube')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          theme === 'youtube' ? 'youtube-gradient text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        YouTube
      </button>
    </div>
  );
}