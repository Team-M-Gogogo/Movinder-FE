import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedSession } from "../movieSlice";

function Session(props) {
  const selectedSession = useSelector((state) => {
    return state.movie.selectedSession;
  });
  const session = props.session;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const handleClick = () => {
    // Output session to next page eith store
    dispatch(addSelectedSession(session));
  };
  console.log(selectedSession);
  return (
    <Button onClick={handleClick}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
