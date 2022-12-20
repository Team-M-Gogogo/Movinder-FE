import React from "react";
import { useNavigate } from "react-router-dom";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./MovieCard.css";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../movieSlice";

export default function MovieCard(props) {
  const { movie } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickMovie = () => {
    dispatch(addSelectedMovie(movie));
    // navigate("/cinema");
    navigate("/"+movie.movieId);
  };
  return (
    <Card
      className="movieCard"
      cover={
        <img alt="poster" src={movie.thumbnailUrl} onClick={onClickMovie} />
      }
    >
      <Card.Meta
        avatar={
          <pre className="movieDuration">
            <ClockCircleOutlined /> {movie.duration}{" "}
          </pre>
        }
        title={movie.movieName}
        description={movie.description}
      />
    </Card>
  );
}
