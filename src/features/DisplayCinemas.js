import React from 'react';
import { useSelector } from "react-redux";
import CinemaGroup from './CinemaGroup';

const DisplayCinemas = () => {
    const cinemas = useSelector((state) => {
        return state.movie.cinemas;
    });

    return (
        <>  
            <div style={{ padding: 24, minHeight: 380, background: "#ffffff", textAlign: "center" }}>
                <h1>Available Cinemas</h1>
                <CinemaGroup cinemas={cinemas}/>
            </div>
        </>
    )
};

export default DisplayCinemas;
