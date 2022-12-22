import React from "react";
import { Layout } from "antd";
import PaymentComponent from "../features/payment/PaymentComponent.js";

export default function PaymentPage() {
  const { Footer, Content } = Layout;

  return (
    <Layout style={{ padding: "0 50px" }}>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <PaymentComponent />
        <Footer style={{ textAlign: "center" }}>
          Team M Gogogo@2022 No time to die
        </Footer>
      </Content>
    </Layout>
  );
}
