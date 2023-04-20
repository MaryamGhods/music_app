import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/api';
import { ArtistCard , Loader , Error} from "../components";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching){
    return <Loader title="موارد در حال بارگزاری هستند. لطفا کمی صبر کنید!" />
  }
  if (error){
    return <Error />
  }
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-xl font-bold text-white m-4">خواننده های برتر</h1>
      <div className="flex flex-wrap md:justify-start justify-center items-center gap-4">
        {data.results?.map( (song, i) => (
          <ArtistCard 
              key={i}
              i={i}
              song={song}
              data={data}
            /> 
          ))}
      </div>
    </div>
  )
};

export default TopArtists;