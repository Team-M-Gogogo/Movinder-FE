import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCinema, addSelectedSession } from "../movieSlice";
import { useNavigate } from "react-router-dom";

function Session(props) {
  const navigate = useNavigate();
  const { cinema, session } = props;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const handleClick = () => {
    dispatch(addSelectedSession(session));
    dispatch(addSelectedCinema(cinema));
    navigate("/"+session.movieId+"/"+session.sessionId);

  };
  return (
    <Button onClick={handleClick} style={{ margin: "5px" }}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
