import { Button, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCinema, addSelectedSession } from "../movieSlice";
import { useNavigate } from "react-router-dom";

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
  
      const info = () => {
        Modal.info({
          title: 'Please login first before buying the ticket',
          content: (
            <div>
              <p>You can click the top right login button on the navigation bar to login.</p>
            </div>
          ),
          onOk() {},
        });
      };

  const handleClick = () => {
    if (user){
    dispatch(addSelectedSession(session));
    dispatch(addSelectedCinema(cinema));
    navigate("/"+session.movieId+"/"+session.cinemaId+"/"+session.sessionId);
    }else{info();}

  };
  return (
    <Button onClick={handleClick} style={{ margin: "5px" }}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
