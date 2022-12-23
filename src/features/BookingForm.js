import React from "react";
import { Breadcrumb, Button, Card, Divider, notification, Table } from "antd";

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
      value: moment(ticketDate).format("DD/MM/YY"),
    },
    {
      key: "5",
      name: "Time",
      value: moment(ticketDate).format("HH:mm"),
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
          <Table
            style={{ width: "90%", margin: "5%" }}
            columns={ticketDetailCols}
            dataSource={ticketDetailData}
            pagination={false}
            boredered
          />

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
