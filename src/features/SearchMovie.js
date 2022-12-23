import React, { useState } from "react";
import { Input} from "antd";
import MovieCard from "../features/movieList/MovieCard"
import "../features/movieList/MovieList.css"

const { Search } = Input;


export const SearchMovie = (props) => {

    const movies = props.movies;
    const [filteredList, setFilteredList] = useState(movies);
    const [searchText, setSearchText] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);

    const showAllMovieList = (<div className="movieList">
      {movies.map((item) => (
      <MovieCard movie={item} key={item.movieId} />
    ))}</div>);

    const showFilteredList = (<div className="movieList">
    {filteredList.map((item) => (
      <MovieCard movie={item} key={item.movieId} />
    ))}</div>);

    const onTextChange = (event) => {
        setSearchText(event.target.value);
      };

  const filterBySearch = () => {

    let updatedList = [...movies];

    updatedList = updatedList.filter((movie) => {
      return movie.movieName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
    setSearchText("");
    setShowSearchResult(true);
  };


  return (
    <div className="box">
    <div>
      <Search placeholder="Search Movies" allowClear onSearch={filterBySearch} style={{ width: "500px"}} onChange={onTextChange} value={searchText}/>
  </div>
  {!showSearchResult  ? (showAllMovieList) : (
            (filteredList.length > 0) ? (showFilteredList) : (
                <div >
                <p>No Search Results can be found.</p>
                </div>
            )
        )}

  
  </div>
  )
}
