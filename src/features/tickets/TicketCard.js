import React from "react";
import { Row, Col, Space } from "antd";
import { QRCode } from "antd";

export default function TicketCard(props) {
  const { ticketID, ticketType, price, row, col} = props;



  return (
    <Row>
      <Col span={24}>
        <div className="space-align-container">
          <div className="space-align-block">
            <Space align="center" direction="vertical">
              <QRCode value={ticketID} />
              <div><b>Ticket type: </b>{ticketType}</div>
              <div><b>Price: </b>{price}</div>
              <div>
                <b>Seat:</b> <b>Row </b>{row}, <b>Column</b> {col}
              </div>
            </Space>
          </div>
        </div>
      </Col>
    </Row>
  );
}
