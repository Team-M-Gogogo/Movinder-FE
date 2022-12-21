import React from 'react'
import { Divider } from "antd";
import { Layout } from "antd";
import Payment from "../features/payment/Payment.js";


export default function PaymentPage() {

    const { Footer, Content } = Layout;


    return (
        <Layout style={{ padding: "0 50px" }}>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
             <Payment />
        <Footer style={{ textAlign: "center" }}>
            Team M Gogogo@2022 No time to die
        </Footer>
        </Content>
        </Layout>
     )
}
