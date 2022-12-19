import { useEffect, useState } from "react"
import { getCinemas } from "../api/cinemas";
import  DisplayMovie  from "../features/DisplayMovie";
import  DisplyaCinemas  from "../features/DisplayCinemas";
import { getMovieById } from "../api/movies";
import { addSelectedMovie } from "../features/movieSlice";
import { useDispatch } from "react-redux";


export default function CinemaListPage() {
    const dispatch = useDispatch();
    const [movieId, setMovieId] = useState("63a0100399e65b544dc8e14a");

    useEffect(() => {
        getMovieById(movieId).then((response) => {
            console.log(response.data);
            dispatch(addSelectedMovie(response.data));
        })
        getCinemas().then((response) => {
            console.log(response.data);
        })
    })


    return (
        <div>CinemaListPage
            <DisplayMovie/>
            <DisplyaCinemas/>
        </div>
    )
}
