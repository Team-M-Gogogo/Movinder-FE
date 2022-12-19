import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSessions } from "../../api/session";
import Session from "./Session";

function SessionLists() {
  const movie = useSelector((state) => {
    return state.movie.selectedMovie;
  });
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions(
      /*movieId*/ "63a03d05a8c97353fa8cb52f",
      /*cinemaId*/ "63a03cdca8c97353fa8cb52e"
    ).then((response) => {
      console.log(response.data);
      setSessions(response.data);
    });
  }, []);
//   const toDate = (session) => {
//     const date = new Date(session.datetime);
//     return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
//   };
//   const uniqueDate = new Set(sessions.map((session) => toDate(session)));
//   console.log(sessions.filter((session) => toDate(session) == uniqueDate[0]));
  return sessions.map((session) => {
    return <Session session={session} key={session.sessionId} />;
  });
}

export default SessionLists;
