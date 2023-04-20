import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/api';
import { SongCard, Error, Loader } from "../components";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  
  if (isFetching){
    return <Loader title="آهنگ ها در حال بارگزاری هستند. لطفا کمی صبر کنید!" />
  }
  if (error){
    return <Error />
  }
  return (
    <div className="w-full flex flex-col">
        <h1 className="text-xl font-bold text-white m-4">صفحه اصلی</h1>
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

export default Discover;