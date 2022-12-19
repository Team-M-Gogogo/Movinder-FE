import React from 'react';
import { useSelector } from "react-redux";
import { Breadcrumb, Layout, Image, Col, Row, Card } from "antd";

const { Content, Footer } = Layout;

const DisplayMovie = () => {
    const movie = useSelector((state) => {
        return state.movie.selectedMovie;
    })
    return (
        <>
            <div>
                <div> {movie.movieName} </div>
                    <Layout>
                <Content className="site-layout" style={{ padding: "0 50px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                    style={{ padding: 24, minHeight: 380, background: "#ffffff", textAlign: "center" }}
                    >
                        <div>
                            <Row>
                                <Col span={10}>
                                </Col>
                                <Col>
                                    <Image
                                        width={200}
                                        src={movie.thumbnailUrl}
                                    />
                                </Col>
                                <Col>
                                    <Card>

                                    </Card>
                                    Information
                                </Col>
                                <Col span={10}>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Team M Gogogo@2022 No time to die
                </Footer>
                </Layout>
            </div>
        </>
    )
};

export default DisplayMovie;
