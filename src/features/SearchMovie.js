import React, { useState } from "react";
import { Input} from "antd";
import MovieCard from "../features/movieList/MovieCard"
import "../features/movieList/MovieList.css"

const { Search } = Input;


export const SearchMovie = (props) => {

    const movies = props.movies;
    const [filteredList, setFilteredList] = new useState(movies);
    const [searchText, setSearchText] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);

    const onTextChange = (event) => {
        setSearchText(event.target.value);
      };

  const filterBySearch = () => {

    var updatedList = [...movies];

    updatedList = updatedList.filter((movie) => {
      return movie.movieName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
    setShowSearchResult(true);
    // setSearchText("");
  };


  return (
    <div className="box">
    <div>
      <Search placeholder="Search Movies" allowClear onSearch={filterBySearch} style={{ width: "500px"}} onChange={onTextChange} value={searchText}/>
  </div>
  {!showSearchResult  ? (
           <div className="movieList">
    
           {movies.map((item) => (
             <MovieCard movie={item} key={item.movieId} />
           ))}
         
            </div>
        ) : (
            (filteredList.length > 0) ? (

            <div className="movieList">
          {filteredList.map((item) => (
            <MovieCard movie={item} key={item.movieId} />
          ))}
           </div>

            ) : (

                <div >
                <p>No Search Results can be found.</p>
                </div>

            )
        )}

  
  </div>
  )
}
