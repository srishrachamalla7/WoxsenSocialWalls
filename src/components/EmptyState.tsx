import React from 'react';
import { TwitterIcon } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
      <TwitterIcon className="w-12 h-12 mb-4" />
      <p>No tweets to display</p>
    </div>
  );
}