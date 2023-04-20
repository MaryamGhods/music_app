import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/api';
import { SongCard, Loader, Error } from "../components";

const TopSongs = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching){
    return <Loader title="آهنگ ها در حال بارگزاری هستند. لطفا کمی صبر کنید!" />
  }
  if (error){
    return <Error />
  }
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-xl font-bold text-white m-4">آهنگ های برتر</h1>
      <div className="flex flex-wrap md:justify-start justify-center items-center gap-4">
        {data.results?.map( (song, i) => (
          <SongCard 
              key={i}
              i={i}
              song={song}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            /> 
          ))}
      </div>
    </div>
  )
};

export default TopSongs;