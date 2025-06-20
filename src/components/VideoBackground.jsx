import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
useMovieTrailer(movieId);
const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      {trailerVideo && (
        <div className='w-[100%]'>
          <iframe className="w-[100%] aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default VideoBackground;