import React from "react";
import { Card } from "antd";
import "./MovieCard.css";

export default function MovieCard(props) {
  const { movie } = props;
  const onClickMovie = () => {
    console.log("go to cinema list of this movie");
  };
  return (
    <Card
      className="movieCard"
      cover={
        <img alt="poster" src={movie.thumbnailUrl} onClick={onClickMovie} />
      }
    >
      <Card.Meta title={movie.movieName} description={movie.description} />
    </Card>
  );
}
