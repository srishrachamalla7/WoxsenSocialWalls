import React from 'react';
import type { Tweet } from '../../types';

interface TweetCardProps {
  tweet: Tweet;
  index: number;
}

export function TweetCard({ tweet }: TweetCardProps) {
  return (
    <div className="instagram-card bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <blockquote className="twitter-tweet" data-conversation="none">
          <a href={tweet.url}>Loading Tweet...</a>
        </blockquote>
      </div>
    </div>
  );
}