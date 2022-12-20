import React, { useState, useEffect } from 'react'
import { Layout } from "antd";
import BookingForm from '../features/BookingForm';
import { useParams } from 'react-router-dom';
import { getCinemasById, getMovieById, getSessionById } from '../api/movies';

const { Footer, Content } = Layout;

export default function BookingPage() {

    const [movie, setMovie] = useState();
    const [cinema, setCinema] = useState();
    const [session, setSession] = useState();

    const { movieId, sessionId } = useParams();

    useEffect(() => {
        getMovieById(movieId).then((response) => {
            setMovie(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        getSessionById(sessionId).then((response) => {
            setSession(response.data);
            getCinemasById(session.cinemaId).then((response) =>{
                setCinema(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, [movieId, sessionId, session.cinemaId]);

    return (
        <Layout style={{ padding: "0 50px" }}>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
                <BookingForm movie={movie} cinema={cinema} session={session}/>
            <Footer style={{ textAlign: "center" }}>
                Team M Gogogo@2022 No time to die
            </Footer>
            </Content>
        </Layout>
    )
}
