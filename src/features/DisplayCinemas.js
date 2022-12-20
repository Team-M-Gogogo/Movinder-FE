import React, { useEffect, useState } from "react";
import { getCinemasByMovieId } from "../api/movies";
import Cinema from "./Cinema";

const DisplayCinemas = (props) => {
  const [cinemas, setCinemas] = useState([]);

  const movie = props.selectedMovie;

  useEffect(() => {
    getCinemasByMovieId(movie.movieId).then((response) => {
      setCinemas(response.data);
    });
  }, [movie.movieId]);
  const cinemaList =
    cinemas.length > 0 &&
    cinemas.map((cinema) => {
      return <Cinema cinema={cinema} key={cinema.cinemaId} />;
    });
  return (
    <>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h1>Available Cinemas</h1>
        {cinemaList}
      </div>
    </>
  );
};

export default DisplayCinemas;
