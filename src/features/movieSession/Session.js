import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCinema, addSelectedSession } from "../movieSlice";
import { useNavigate } from "react-router-dom";
import { changeShowLogin } from "../movieSlice";
import getUser from "../../utils/getUser";
import moment from "moment";

function Session(props) {
  const navigate = useNavigate();
  const { cinema, session } = props;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const user = getUser();

  const handleClick = () => {
    if (user) {
      dispatch(addSelectedSession(session));
      dispatch(addSelectedCinema(cinema));
      navigate(
        "/createBooking/" +
          session.movieId +
          "/" +
          session.cinemaId +
          "/" +
          session.sessionId
      );
    } else {
      dispatch(changeShowLogin(true));
    }
  };
  return (
    <Button
      onClick={handleClick}
      style={{ margin: "5px", width: "fit-content" }}
    >
      {moment(date).add(8, 'hours').format("DD/MM/YY | HH:mm")}
      {/* {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()} */}
    </Button>
  );
}

export default Session;
