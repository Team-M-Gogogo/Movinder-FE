import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../api/movies";
import MovieCard from "./MovieCard";
import { addMovies } from "./movieSlice";
import "./MovieList.css";

export default function MovieList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies()
      .then((response) => {
        dispatch(addMovies(response.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const movies = useSelector((state) => {
    return state.movie.movies;
  });
  const movieCards = movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.movieId} />;
  });
  return <div className="movieList">{movieCards}</div>;
}
