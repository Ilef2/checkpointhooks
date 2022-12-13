import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="App-header">
      {movies.map((mov) => (
        <MovieCard key={mov.id} mov={mov} />
      ))}
    </div>
  );
};

export default MovieList;
