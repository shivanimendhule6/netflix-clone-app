import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({movieId}) => {

  const getMoviesVideo = async () => {
    const json = await fetch('https://api.themoviedb.org/3/movie/movie_id/videos', API_OPTIONS);
    const data = await json.json();
    console.log(data);
  }
  useEffect(() => {
    getMoviesVideo();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default VideoBackground