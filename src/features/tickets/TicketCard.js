import React from "react";
import { Row, Col, Space } from "antd";
import { QRCode } from "antd";

export default function TicketCard(props) {

    const { ticketID, ticketType, price, row, col } = props;

  return (
    // <Card
    //   cover={<QRCode value="https://ant.design/" />}
    // >
    //   <Meta title={ticketType} description="Price: 100" />
    // </Card>
    <Row>
      <Col span={24}>
        <div className="space-align-container">
          <div className="space-align-block">
            <Space align="center" direction="vertical">
              <QRCode value={ticketID} />
              <div>
              Ticket type: {ticketType}
              </div>
              <div>
                Price: {price}
              </div>
              <div>
              Seat: Row {row}, Column {col}
              </div>
            </Space>
          </div>
        </div>
      </Col>
    </Row>
  );
}
