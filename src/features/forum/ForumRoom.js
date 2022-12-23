import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { getMovieById, getRoomMessage } from '../../api/movies';
import FormMessageGroup from './FormMessageGroup';

export default function ForumRoom(props) {

    const [movie, setMovie] = useState();
    const [movieName, setMovieName] = useState();
    const [roomMessage, setRoomMessage] = useState();
    const [timer, setTimer] = useState(0);

    const movieId = props.movieId;

    async function check() {
        setTimer(timer + 1);
    }

    useEffect(() =>{
        getMovieById(movieId).then((response) => {
            setMovie(response.data);
            setMovieName(response.data.movieName);
        })
        getRoomMessage(movieId).then((response) => {
            setRoomMessage(response.data);
        })
    }, [movieId]);

    useEffect(() => {
        getRoomMessage(movieId).then((response) => {
            setRoomMessage(response.data);
        })
    }, [timer, movieId]);

    setTimeout(() => {
        check();
    }, 1000);


    return (
        <div>
            {movie &&
            <Card title={movieName + "'s Room"}>
                {roomMessage && <FormMessageGroup roomMessage={roomMessage}/>}
                
            </Card>}


        </div>
    )
}

