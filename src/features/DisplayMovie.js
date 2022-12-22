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
                                            Description: {movie.description}
                                        </div>
                                        <div>
                                            Duration: {movie.duration}
                                        </div>
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
