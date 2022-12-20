import React, { useEffect, useState } from "react";
import { getSessions } from "../../api/session";
import Session from "./Session";

function SessionLists() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions(
      /*movieId*/ "63a03d05a8c97353fa8cb52f",
      /*cinemaId*/ "63a03cdca8c97353fa8cb52e"
    ).then((response) => {
      setSessions(response.data);
    });
  }, []);
  return sessions.map((session) => {
    return <Session session={session} key={session.sessionId} />;
  });
}

export default SessionLists;
