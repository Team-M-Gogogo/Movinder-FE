import React, { useState, useEffect } from 'react'
import { Layout } from "antd";
import BookingForm from '../features/BookingForm';
import { useParams } from 'react-router-dom';
import { getCinemasById, getMovieById, getSessionById } from '../api/movies';

const { Content } = Layout;

export default function BookingPage() {

    const [movie, setMovie] = useState();
    const [cinema, setCinema] = useState();
    const [session, setSession] = useState();

    const { movieId, cinemaId, sessionId } = useParams();

    useEffect(() => {
        getMovieById(movieId).then((response) => {
            console.log(response.data);
            setMovie(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        getSessionById(sessionId).then((response) => {
            console.log(response.data);
            setSession(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        getCinemasById(cinemaId).then((response) =>{
            console.log(response.data);
            setCinema(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }, [movieId, sessionId, cinemaId]);

    console.log(movie, session, cinema);


    return (    
        <Layout style={{ padding: "0 50px" }}>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
                {movie && cinema && session && <BookingForm movie={movie} cinema={cinema} session={session}/>}
            </Content>
        </Layout>
    )
}
