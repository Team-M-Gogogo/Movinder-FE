import React, { useEffect, useState } from "react";
import { getSessions } from "../../api/movies";
import Session from "./Session";

function SessionLists(props) {
  const { cinema, movie } = props;
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getSessions(/*movieId*/ movie.movieId, /*cinemaId*/ cinema.cinemaId).then(
      (response) => {
        setSessions(response.data);
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
