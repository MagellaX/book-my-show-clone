import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Component";

/**
 * Component for rendering the hero section of a movie page.
 * This component displays the movie poster, information, and action buttons.
 */
const MovieHero = () => {

  // Access movie context to get current movie data...

  const { movie } = useContext(MovieContext);

  // Return null if movie data is not available

  if (!movie) return null;

  // Extract genres from movie data

  const genres = movie.genres?.map(({ name }) => name).join(",");

  return (
    <div className="relative w-full">

      {/* Mobile & Tab Screen Size */}

      <div className="lg:hidden">

        {/* Display movie poster */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="cover poster"
          className="m-4 rounded"
          style={{ width: "calc(100% - 2rem)" }}
        />
        {/* Display movie information and action buttons */}

        <div className="flex flex-col gap-3 px-4 my-3">
          <div className="text-black flex flex-col gap-2">
            <h4>5k rating</h4>
            <h4>spanish, English, Hindi, Telugu</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
          <div className="flex items-center gap-3 w-full text-xl">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹ 149
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹ 599
            </button>
          </div>
        </div>
      </div>

      {/* Large Screen Device */}

      <div className="hidden lg:block">

        {/* Display movie poster, info, and action buttons */}

        <div className="absolute z-10 left-24 top-10 flex gap-10">
          <div className="w-64 h-96">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Movie Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            {/* Render additional movie information */}

            <MovieInfo movie={movie} />
          </div>
        </div>
        {/* Display background poster */}

        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="background poster"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default MovieHero;
