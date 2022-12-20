import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSessions } from "../../api/movies";
import Session from "./Session";

function SessionLists(props) {
  const cinema = props.cinema;
  const [sessions, setSessions] = useState([]);
  const movie = useSelector((state) => {
    return state.movie.selectedMovie;
  });
  console.log(movie);
  console.log(cinema);
  useEffect(() => {
    getSessions(/*movieId*/ movie.movieId, /*cinemaId*/ cinema.cinemaId).then(
      (response) => {
        setSessions(response.data);
        console.log(response.data);
      }
    );
  }, [movie.movieId, cinema.cinemaId]);
  return (
    sessions.length > 0 &&
    sessions.map((session) => {
      return (
        <Session cinema={cinema} session={session} key={session.sessionId} />
      );
    })
  );
}

export default SessionLists;
