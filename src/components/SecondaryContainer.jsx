import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  if (!movies || movies.length === 0) return <p>No movies to display</p>;
  return (
    <div className="bg-black">
      <div className="">
        <MovieList movies={movies.nowPlayingMovies}  title={"NOW PLAYING MOVIES"}/>
        <MovieList movies={movies.nowPopularMovies}  title={"POPULAR"}/>
        <MovieList movies={movies.upcomingMovies}  title={"UPCOMING MOVIES"}/>
      </div>
    </div>
  )
}

export default SecondaryContainer