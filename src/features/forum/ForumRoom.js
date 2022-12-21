import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { getMovieById, getRoomMessage } from '../../api/movies';
import FormMessageGroup from './FormMessageGroup';

export default function ForumRoom(props) {

    const [movie, setMovie] = useState();
    const [movieName, setMovieName] = useState();
    const [roomMessage, setRoomMessage] = useState();

    const movieId = props.movieId;
    const cinemaId = props.cinemaId;

    useEffect(() =>{
        getMovieById(movieId).then((response) => {
            console.log(response.data);
            setMovie(response.data);
            setMovieName(response.data.movieName);
        })
        getRoomMessage(movieId).then((response) => {
            console.log(response.data);
            setRoomMessage(response.data);
        })
    }, [movieId]);


    return (
        <div>
            {movie &&
            <Card title={movieName + "'s Room"}>
                {roomMessage && <FormMessageGroup roomMessage={roomMessage}/>}
                
            </Card>}


        </div>
    )
}

