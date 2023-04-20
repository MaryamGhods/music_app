import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({song, i, data}) => {

  return (
    <div className="flex flex-col md:w-[200px] w-[160px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer">
      <div className="relative group">
        <img src={song.artist_info.artist_image.cover.url} alt={song.artist_info.fullName} className="rounded-2xl" />
      </div>
      <div cl assName="flex flex-col pt-2">
        <p className="text-gray-500 text-sm truncate pt-1">
          <Link to={`/artists/${song?.artist_info.fullName}`}>
            {song.artist_info.fullName}
          </Link>
        </p>
      </div>
    </div>
  )
};

export default ArtistCard;