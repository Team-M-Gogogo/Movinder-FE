import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCinema, addSelectedSession } from "../movieSlice";

function Session(props) {
  const { cinema, session } = props;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const handleClick = () => {
    dispatch(addSelectedSession(session));
    dispatch(addSelectedCinema(cinema));
  };
  return (
    <Button onClick={handleClick} style={{ margin: "5px" }}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
