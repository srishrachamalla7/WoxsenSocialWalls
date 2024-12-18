import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'instagram', icon: Instagram, label: 'Instagram', color: 'text-[#E1306C]' },
    { id: 'facebook', icon: Facebook, label: 'Facebook', color: 'text-[#0088F7]' },
    { id: 'youtube', icon: Youtube, label: 'YouTube', color: 'text-[#FF0000]' }
  ];

  return (
    <div className="flex items-center gap-2">
      {themes.map(({ id, icon: Icon, label, color }) => (
        <button
          key={id}
          onClick={() => setTheme(id as any)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg transition-all
            ${theme === id 
              ? 'theme-gradient text-white font-medium shadow-md' 
              : `bg-white border border-gray-200 ${color} hover:bg-gray-50`
            }
          `}
          title={label}
        >
          <Icon className="w-5 h-5" />
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}