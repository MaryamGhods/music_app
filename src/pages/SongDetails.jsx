import { useParams } from "react-router-dom";
import { useGetTopChartsQuery } from "../redux/services/api";
import { Link } from "react-router-dom";

const SongDetails = () => {
  const { songName } = useParams();
  const { data, isFetching, error } = useGetTopChartsQuery();
  const song = data.results?.find((songData) => songData.song_info.name === songName);

  return (
    <div>
      <div className="relative mt-5">
        <div className="bg-gradient-to-r from-transparent to-black sm:h-40 h-28" />
        <div className="absolute inset-0 flex items-center">
          <img src={song.song_info.song_image.cover.url} alt={song.song_info.name} className="sm:w-40 w-28 sm:h-40 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />
            <div className="mr-6">
              <h4 className="text-white text-lg truncate">
                <Link to={`/songs/${song?.song_info.name}`}>
                  {song.song_info.name}
                </Link>
              </h4>
              <p className="text-gray-400 text-base truncate pt-2">
                <Link to={`/artists/${song?.artist_info.fullName}`}>
                  {song.artist_info.fullName}
                </Link>
              </p>
              <p className="text-gray-600 text-sm truncate pt-2">
                تعداد دانلود: 
                {' '}
                {song.song_info.sumSongsDownloadsCount}
              </p>
            </div>
        </div>
      </div>
      <p className='text-white my-8'>متن آهنگ</p>
    </div>

  )
};

export default SongDetails;