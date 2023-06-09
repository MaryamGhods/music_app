import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const TopChartCard = ({i, song, data}) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return(
    <div className="w-full flex flex-row items-center hover:bg-[#b05bcc7a] py-1 p-2 rounded-lg cursor-pointer mb-1">
      <span className="text-white font-semibold pl-4">{i+1}. </span>
      <img src={song.song_info.song_image.cover.url} alt={song.song_info.name} className="bg-white/10 w-14 h-14 rounded-lg" />  
      <div className="flex-1 flex flex-col justify-center mx-3">
        <h4 className="text-white text-base truncate">
          <Link to={`/songs/${song?.song_info.name}`}>
            {song.song_info.name}
          </Link>
        </h4>
        <p className="text-gray-400 text-sm truncate pt-1">
            <Link to={`/artists/${song?.artist_info.fullName}`}>
              {song.artist_info.fullName}
            </Link>
          </p>
      </div>
      <PlayPause 
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  )
};

export default TopChartCard;