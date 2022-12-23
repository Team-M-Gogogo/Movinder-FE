import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Image,
  notification,
  Row,
  Table,
} from "antd";

import { useNavigate } from "react-router-dom";
import FoodInfo from "./food/FoodInfo";
import SeatingPlan from "./seating/SeatingPlan";
import StepBar from "./booking/bookingData";
import { useSelector } from "react-redux";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import moment from "moment";

export default function BookingForm(props) {
  const navigate = useNavigate();

  const { movie, cinema, session } = props;

  const date = new Date(session.datetime);

  const selectedSeats = useSelector((state) => state.movie.selectedSeats);
  const selectedTickets = useSelector((state) => state.movie.selectedTickets);
  const selectedTicketsQuantity = selectedTickets.reduce(
    (accumulator, ticket) => {
      return accumulator + ticket.quantity;
    },
    0
  );
  const handleClick = () => {
    if (selectedTicketsQuantity === 0) {
      openNotification("Ticket quantity not selected!");
    } else if (selectedSeats.length !== selectedTicketsQuantity) {
      openNotification(
        "Number of seats picked is not the same as ticket quantity!"
      );
    } else {
      navigate("/payment");
    }
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (description) => {
    api.info({
      message: "Missing information",
      description: description,
      placement: "top",
      icon: <ExclamationCircleTwoTone twoToneColor={"red"} />,
      style: { width: "600px" },
    });
  };
  const foodPriceTotal = useSelector((state) => {
    return state.movie.foodTotal;
  });
  const ticketPriceTotal = useSelector((state) => {
    return state.movie.selectedTicketsPriceTotal;
  });
  const totalPrice = () => {
    return ticketPriceTotal + foodPriceTotal;
  };

  const ticketDate = new Date(session.datetime);
  const ticketDetailCols = [
    {
      title: "Ticket Details",
      dataIndex: "name",
      key: "name",
    },
    {
      dataIndex: "value",
      key: "value",
    },
  ];
  const ticketDetailData = [
    {
      key: "1",
      name: "Movie",
      value: movie.movieName,
    },
    {
      key: "2",
      name: "Cinema",
      value: cinema.cinemaName,
    },
    {
      key: "3",
      name: "Address",
      value: cinema.address,
    },
    {
      key: "4",
      name: "Date",
      value: moment(ticketDate).add(8, "hours").format("DD/MM/YY"),
    },
    {
      key: "5",
      name: "Time",
      value: moment(ticketDate).add(8, "hours").format("HH:mm"),
    },
  ];
  return (
    <>
      <div>
        {contextHolder}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
            <Breadcrumb.Item>Booking</Breadcrumb.Item>
          </Breadcrumb>
          <StepBar number={0} />
          <Card title="Movie">
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col span={8} align="center">
                <Image
                  height={400}
                  src={movie.thumbnailUrl}
                  fallback="data:image/png;base64,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"
                />
              </Col>
              <Col span={16}>
                <Table
                  style={{ width: "90%", margin: "5%" }}
                  columns={ticketDetailCols}
                  dataSource={ticketDetailData}
                  pagination={false}
                  boredered
                />
              </Col>
            </Row>
          </Card>

          <Divider></Divider>
          <Card title="Ticket Price" style={{ margin: "10px" }}>
            <div style={{ textAlign: "left" }}></div>
            <div style={{ textAlign: "left", margin: "10px" }}>
              <SeatingPlan
                availableSeatings={session.availableSeatings}
                pricing={session.pricing}
              />
            </div>
          </Card>
          <Divider></Divider>

          <div style={{ textAlign: "left", margin: "10px" }}>
            <FoodInfo />
          </div>
          <div style={{ textAlign: "right", margin: "10px" }}></div>
          <div style={{ textAlign: "right" }}>
            <h3>Total Price: ${totalPrice()}</h3>
            <Button
              onClick={handleClick}
              movie={movie}
              session={session}
              date={date}
              className="movinderBtn"
              style={{ margin: "10px", width: "100px" }}
            >
              {" "}
              Buy{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
