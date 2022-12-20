import React, { useEffect, useState } from "react";
import { getCinemas } from "../api/movies";
import Cinema from "./Cinema";

const DisplayCinemas = () => {
  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    getCinemas().then((response) => {
      setCinemas(response.data);
    });
  }, []);
  const cinemaList = cinemas.map((cinema) => {
    return <Cinema cinema={cinema} key={cinema.cinemaId} />;
  });
  return (
    <>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h1>Available Cinemas</h1>
        {cinemaList}
      </div>
    </>
  );
};

export default DisplayCinemas;
