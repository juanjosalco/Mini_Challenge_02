import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <>
      {!movies ? <p>Loading...</p> : movies.map((movie, index) => {
        return (
          <>
            <h1 key={index}>Nombre: {movie.name}</h1>
            <h2 key={index}>Duración: {movie.duration}</h2>
          </>
        );
      })}
    </>
  );
}

export default Movie;