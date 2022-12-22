import React from 'react';
import { Breadcrumb, Image, Col, Row, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const DisplayMovie = (props) => {

    const navigate = useNavigate();

    const movie = props.selectedMovie;

    const handleClick = () => {
        console.log(movie.movieId);
        navigate("/forum/" + movie.movieId);
    }

    return (
        <>
            <div>
                <div
                style={{ padding: 24, minHeight: 380, background: "#ffffff", textAlign: "center" }}
                >
                        <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row justify="center">
                            <Col>
                                <Image
                                    width={400}
                                    src={movie.thumbnailUrl}
                                />
                            </Col>
                            <Col style={{ margin: "10px"}}>
                                <Card title="Information"
                                style={{ width: 600, background: "#fcfcfc"}}
                                >
                                    <div><h1>{movie.movieName}</h1></div>
                                    <div style={{textAlign: "left"}}>
                                        <div>
                                            <h2>Description: </h2>{movie.description}
                                        </div>
                                        <div>
                                            <h2>Duration: </h2>{movie.duration}
                                        </div>
                                        {movie.trailerUrl &&
                                            <div>
                                                <div><h2>Movie Trailer</h2></div>
                                                <iframe
                                            width="500"
                                            height="338"
                                            src={`https://www.youtube.com/embed/${movie.trailerUrl}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                            </div>}
                                    </div>
                                </Card>
                                <div style={{textAlign: "left", marginTop:"10px"}}>
                                    <Button onClick={handleClick} style={{width: "fit-content"}}>Join our forum!</Button>
                                </div>
                            </Col>
                        </Row>
                </div>
            </div>
        </>
    )
};

export default DisplayMovie;
