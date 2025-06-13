import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) =>{
    const trailerVideo = useSelector((store) => store.movies.trailerVideo)
    const dispatch = useDispatch();
    const getMoviesVideo = async () => {
        const json = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const data = await json.json();
        const filteredData = data.results.filter((video)=> video.type === "trailer" );
        const trailer = filteredData.length > 0 ? filteredData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
  }
  useEffect(() => {
   !trailerVideo && getMoviesVideo();
  }, []);
}
export default useMovieTrailer;