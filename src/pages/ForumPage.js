import React from 'react'
import { useParams } from 'react-router-dom';
import ForumInput from '../features/forum/ForumInput';
import { Layout } from "antd";
import ForumRoom from '../features/forum/ForumRoom';
import getUser from '../utils/getUser';

export default function ForumPage() {

    const user = getUser();

    const { Content } = Layout;
    const movieId = useParams().movieId;
    const customerId = user.customerId;
    

    return (
        <div>
            <Layout style={{ padding: "0 50px" }}>
                <Content className="site-layout" style={{ padding: "0 50px" }}>
                <ForumRoom movieId={movieId} customerId={customerId}/>
                <ForumInput movieId={movieId} customerId={customerId}/>
                </Content>
            </Layout>

        </div>

    )
}
