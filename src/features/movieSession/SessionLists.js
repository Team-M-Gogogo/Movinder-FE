import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSessions } from "../../api/session";
import { addSessions } from "../movieSlice";
import Session from "./Session";

function SessionLists() {
  const sessionsStore = useSelector((state) => {
    return state.movie.sessions;
  });
  const [sessions, setSessions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getSessions(
      /*movieId*/ "63a03d05a8c97353fa8cb52f",
      /*cinemaId*/ "63a03cdca8c97353fa8cb52e"
    ).then((response) => {
      setSessions(response.data);
      dispatch(addSessions(response.data));
    });
  }, [dispatch]);
  console.log(sessionsStore);
  return sessions.map((session) => {
    return <Session session={session} key={session.sessionId} />;
  });
}

export default SessionLists;
