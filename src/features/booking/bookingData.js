import { Steps, Space, Row, Col } from "antd";

export const bookingSteps = [
  {
    title: "Ticket",
  },
  {
    title: "Payment",
  },
  {
    title: "Confirmation",
  },
];

export default function StepBar(props) {
  return (
    <Row justify="center">
      <Col span={20}>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <div></div>
          <Steps current={props.number} items={bookingSteps} />
          <div></div>
        </Space>
      </Col>
    </Row>
  );
}
