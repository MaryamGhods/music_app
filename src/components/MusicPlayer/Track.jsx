import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.song_info.song_image.cover.url} alt={activeSong?.song_info.name} className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.song_info.name ? activeSong?.song_info.name  : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {/* {activeSong?.artists ? activeSong?.artists : 'No active Song'} */}
      </p>
    </div>
  </div>
);

export default Track;
