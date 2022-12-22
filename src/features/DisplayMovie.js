import React from "react";
import { Breadcrumb, Image, Col, Row, Card, Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

const DisplayMovie = (props) => {
  const navigate = useNavigate();

  const movie = props.selectedMovie;

  const handleClick = () => {
    console.log(movie.movieId);
    navigate("/forum/" + movie.movieId);
  };
  const movieCols = [
    {
      title: "Movie Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: movie.movieName,
      dataIndex: "value",
      key: "value",
      render: (_, record) => {
        if (record.value === "Forum") {
          return (
            <Button
              onClick={handleClick}
              style={{
                width: "fit-content",
                background: "#fd655c",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Join our forum!
            </Button>
          );
        } else if (record.value === "Trailer") {
          return movie.trailerUrl ? (
            <iframe
              width="500"
              height="338"
              src={`https://www.youtube.com/embed/${movie.trailerUrl}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          ) : (
            <>Not available</>
          );
        } else {
          return <>{record.value}</>;
        }
      },
    },
  ];
  const movieData = [
    {
      key: "1",
      name: "Duration",
      value: movie.duration,
    },
    {
      key: "2",
      name: "Description",
      value: movie.description,
    },
    {
      key: "3",
      name: "Forum",
      value: "Forum",
    },
    {
      key: "4",
      name: "Trailer",
      value: "Trailer",
    },
  ];
  return (
    <>
      <div>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
          </Breadcrumb>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col style={{ width: "35%" }}>
              <Image width={400} src={movie.thumbnailUrl} />
            </Col>
            <Col style={{ width: "55%" }}>
              <Table
                style={{ width: "90%", margin: "5%" }}
                columns={movieCols}
                dataSource={movieData}
                pagination={false}
                bordered
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DisplayMovie;
