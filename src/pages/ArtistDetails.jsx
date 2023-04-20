import { useParams } from "react-router-dom";
import { useGetTopChartsQuery } from "../redux/services/api";
import { Link } from "react-router-dom";
import { SongCard, Error, Loader } from "../components";
import { useSelector } from "react-redux";

const ArtistDetails = () => {
  const {artistName} = useParams();
  const { data, isFetching, error } = useGetTopChartsQuery();
  const artistSongs = data?.results?.filter((artistData) => artistData.artist_info.fullName === artistName)
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching){
    return <Loader title="آهنگ ها در حال بارگزاری هستند. لطفا کمی صبر کنید!" />
  }
  if (error){
    return <Error />
  }
  return (
    <div>
      <div className="relative mt-5">
        <div className="bg-gradient-to-r from-transparent to-black sm:h-40 h-28" />
        <div className="absolute inset-0 flex items-center">
          <img src={artistSongs[0].artist_info.artist_image.cover.url} alt={artistSongs[0].artist_info.fullName} className="sm:w-40 w-28 sm:h-40 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />
            <div className="mr-6">
              <p className="text-gray-400 text-xl truncate pt-2">
                <Link to={`/artists/${artistSongs[0]?.artist_info.fullName}`}>
                  {artistSongs[0].artist_info.fullName}
                </Link>
              </p>
            </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
          {artistSongs?.map( (song, i) => (
            <SongCard 
              key={i}
              i={i}
              song={song}
              data={artistSongs}
              isPlaying={isPlaying}
              activeSong={activeSong}
            /> 
          ))}
      </div>
    </div>

  )
};

export default ArtistDetails;