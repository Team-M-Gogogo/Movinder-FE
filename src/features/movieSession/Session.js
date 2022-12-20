import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedSession } from "../movieSlice";

function Session(props) {
  const session = props.session;
  const date = new Date(session.datetime);
  const dispatch = new useDispatch();
  const handleClick = () => {
    dispatch(addSelectedSession(session));
  };
  return (
    <Button onClick={handleClick} style={{ margin: "5px" }}>
      {date.getMonth()}/{date.getDate()}-{date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
