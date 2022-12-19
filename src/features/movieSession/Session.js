import { Button } from "antd";
import React from "react";

function Session(props) {
  const session = props.session;
  const date = new Date(session.datetime);
  return (
    <Button>
      {date.getMonth()}/{date.getDate()}-
      {date.getHours()}:{date.getMinutes()}
    </Button>
  );
}

export default Session;
