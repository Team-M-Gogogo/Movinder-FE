import { SearchMovie } from "../features/SearchMovie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../api/movies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  localStorage.getItem("searchText");
  return <div>
   
    <SearchMovie movies={movies}/>
    </div>;
}

