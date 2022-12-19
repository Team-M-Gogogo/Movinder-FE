import React from 'react';
import { useSelector } from "react-redux";

const DisplayMovie = () => {
    const movie = useSelector((state) => {
        return state.movie.selectedMovie;
    })
    return (
        <>
            <div>
                Movie
                <span> {movie.movieName} </span>
            </div>
        </>
    )
};

export default DisplayMovie;
