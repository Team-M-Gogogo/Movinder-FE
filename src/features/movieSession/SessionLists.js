import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSessions } from "../../api/session";

function SessionLists() {
  const movie = useSelector((state) => {
    return state.movie.selectedMovie;
  });
  const sessions = [];
  useEffect(() => {
    getSessions(/*movieId*/"63a03d05a8c97353fa8cb52f", "63a03cdca8c97353fa8cb52e" /*cinemaId*/).then((response) => {
      console.log(response.data);
    //   sessions= response.data;
    });
  });
  return <div>SessionLists page</div>;
}

export default SessionLists;
