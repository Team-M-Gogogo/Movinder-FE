import React from 'react'
import { useParams } from 'react-router-dom';
import ForumInput from '../features/forum/ForumInput';
import { Layout } from "antd";
import ForumRoom from '../features/forum/ForumRoom';
import getUser from '../utils/getUser';

export default function ForumPage() {

    const user = getUser();

    const { Footer, Content } = Layout;
    const movieId = useParams().movieId;
    // const movieId = '63a2a24c71be3f089398b531';
    // const customerId = '63a17b96630a66688ff94ac5';
    const customerId = user.customerId;
    

    return (
        <div>
            <Layout style={{ padding: "0 50px" }}>
                <Content className="site-layout" style={{ padding: "0 50px" }}>
                <ForumRoom movieId={movieId} customerId={customerId}/>
                <ForumInput movieId={movieId} customerId={customerId}/>
                <Footer style={{ textAlign: "center" }}>
                    Team M Gogogo@2022 No time to die
                </Footer>
                </Content>
            </Layout>

        </div>

    )
}
