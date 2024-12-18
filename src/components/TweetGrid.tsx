import React from 'react';
import type { TweetGridProps } from '../types';
import { TweetCard } from './TweetCard';
import { EmptyState } from './EmptyState';

export function TweetGrid({ tweets }: TweetGridProps) {
  if (!tweets.length) {
    return <EmptyState />;
  }

  // Split tweets into three columns
  const columns = [[], [], []];
  tweets.forEach((tweet, index) => {
    columns[index % 3].push(tweet);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {columns.map((columnTweets, columnIndex) => (
        <div key={columnIndex} className="space-y-6 overflow-hidden">
          <div className="column-scroll space-y-6">
            {[...columnTweets, ...columnTweets].map((tweet, index) => (
              <TweetCard key={`${columnIndex}-${index}`} tweet={tweet} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}