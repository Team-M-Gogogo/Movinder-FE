import { Button } from "antd";
import React from "react";

function Session(props) {
  const session = props.session;
  const date = new Date(session.datetime);
  const handleClick = () => {
    // Output session to next page eith store
    console.log(session);
  }
  return (
    <Button onClick={handleClick}>
      {date.getMonth()}/{date.getDate()}-
      {date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
