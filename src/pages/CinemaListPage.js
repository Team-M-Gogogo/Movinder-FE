import DisplayMovie from "../features/DisplayMovie";
import DisplyaCinemas from "../features/DisplayCinemas";
import { Divider } from "antd";
import { Layout } from "antd";
import { useDispatch } from "react-redux";
import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getMovieById } from "../api/movies";

const {  Content } = Layout;

export default function CinemaListPage() {
    const [movie, setMovie] = useState({});
    const movieId = useParams().movieId;
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieById(movieId).then((response) => {
            console.log(response.data);
            setMovie(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [dispatch, movieId]);

    return movie.movieId && (
        <div>
        <Layout style={{ padding: "0 50px" }}>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
            <DisplayMovie selectedMovie={movie}/>
            <Divider></Divider>
            <DisplyaCinemas selectedMovie={movie}/>

            </Content>
        </Layout>
        </div>
    );
}
