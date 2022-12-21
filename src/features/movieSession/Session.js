import { Button} from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCinema, addSelectedSession } from "../movieSlice";
import { useNavigate } from "react-router-dom";
import {info} from "../infoModal";

function Session(props) {
  const navigate = useNavigate();
  const { cinema, session } = props;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const localUser = localStorage.getItem("User");
  const user =
    localUser === null || localUser === ""
      ? ""
      : JSON.parse(localStorage.getItem("User"));
  

  const handleClick = () => {
    if (user){
    dispatch(addSelectedSession(session));
    dispatch(addSelectedCinema(cinema));
    navigate("/createBooking/"+session.movieId+"/"+session.cinemaId+"/"+session.sessionId);
    }else{info();}

  };
  return (
    <Button onClick={handleClick} style={{ margin: "5px" }}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
