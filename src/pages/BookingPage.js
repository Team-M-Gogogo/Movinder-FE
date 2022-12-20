import React from 'react'
import { Layout } from "antd";
import BookingForm from '../features/BookingForm';

const { Footer, Content } = Layout;

export default function BookingPage() {
  return (
    <Layout style={{ padding: "0 50px" }}>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
            <BookingForm/>
          <Footer style={{ textAlign: "center" }}>
            Team M Gogogo@2022 No time to die
          </Footer>
        </Content>
      </Layout>
  )
}
