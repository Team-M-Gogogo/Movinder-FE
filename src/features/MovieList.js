import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../api/movies";
import MovieCard from "./MovieCard";
import "./MovieList.css";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const movieCards =
    movies.length > 0 &&
    movies.map((movie) => {
      return <MovieCard movie={movie} key={movie.movieId} />;
    });
  return <div className="movieList">{movieCards}</div>;
}
