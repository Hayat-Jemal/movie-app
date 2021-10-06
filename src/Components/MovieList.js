import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getMoviesBySearchTitle } from "./API/API";

const MovieList = ({userInput , type}) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getMoviesBySearchTitle(userInput ,type);
      setMovies(data);
    }
    fetchData();
  }, [userInput, type]);
  //  console.log(movies);
  return (
    <div>
      <div style={{ display: "flex",}}>
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <MovieCard
                poster={movie.Poster}
                id={movie.imdbID}
                title={movie.Title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
