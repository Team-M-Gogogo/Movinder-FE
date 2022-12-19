import React from "react";
import {useEffect} from "react";
import { getSessions } from "../../api/session";

function SessionLists() {
  useEffect (() => {
    getSessions().then((response) => {
        console.log(response.data);
    })
  })
  return <div>SessionLists</div>;
}

export default SessionLists;
