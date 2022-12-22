import React from "react";
import { Row, Col, Space } from "antd";
import { QRCode } from "antd";

export default function TicketCard(props) {
  const { ticketID, ticketType, price, row, col} = props;


  var seatName = "";
  seatName += String.fromCharCode(65 + row);
  seatName += col;


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
                <b>Seat:</b> {seatName}
              </div>
            </Space>
          </div>
        </div>
      </Col>
    </Row>
  );
}
