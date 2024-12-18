import React from 'react';
import type { Tweet } from '../types';

interface TweetCardProps {
  tweet: Tweet;
  index: number;
}

export function TweetCard({ tweet }: TweetCardProps) {
  return (
    <div className="instagram-card bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        {/* <div className="flex items-center space-x-3 mb-4"> */}
          {/* <div className="w-10 h-10 rounded-full overflow-hidden instagram-gradient p-[2px]"> */}
            {/* <div className="bg-white w-full h-full rounded-full p-[2px]">
              <img
                src="/src/assets/woxsen_logo_1.png"
                alt="Woxsen"
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}
          {/* </div> */}
          <div>
            {/* <h3 className="font-semibold text-sm">Woxsen University</h3>
            <p className="text-xs text-gray-500">@Woxsen</p> */}
          {/* </div> */}
        </div>
        <blockquote className="twitter-tweet" data-conversation="none">
          <a href={tweet.url}>Loading Tweet...</a>
        </blockquote>
      </div>
    </div>
  );
}
