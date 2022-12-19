import { useEffect } from "react"
import { getCinemas } from "../api/cinemas";
import  DisplayMovie  from "../features/DisplayMovie";
import  DisplyaCinemas  from "../features/DisplayCinemas";


export default function CinemaListPage() {

    useEffect(() => {
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
