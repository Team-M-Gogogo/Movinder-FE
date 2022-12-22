import React from "react";
import { Breadcrumb, Button, Divider } from "antd";
import PaymentPage from "../pages/PaymentPage";
import { useNavigate } from "react-router-dom";
import FoodInfo from "./food/FoodInfo";
import SeatingPlan from "./seating/SeatingPlan";
import StepBar from "./booking/bookingData";
import { useSelector } from "react-redux";

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
    if (selectedSeats.length !== selectedTicketsQuantity) {
      console.log("nooo");
    } else {
      navigate(PaymentPage);
    }
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

  return (
    <>
      <div>
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
          <h1>Buy Ticket</h1>
          <Divider></Divider>
          <div style={{ textAlign: "left" }}>
            <h2>Ticket Details</h2>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <h3>Movie Title: </h3>
                  </td>
                  <td>
                    <h4>{movie.movieName}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Cinema: </h3>
                  </td>
                  <td>
                    <h4>{cinema.cinemaName}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Selected Date & Time: </h3>
                  </td>
                  <td>
                    <h4>
                      {date.getMonth()}/{date.getDate()}-{date.getHours()}:
                      {date.getMinutes()}
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider></Divider>
          <div style={{ textAlign: "left" }}>
            <h2>Ticket Price</h2>
          </div>
          <Divider></Divider>
          <div style={{ textAlign: "left", margin: "10px" }}>
            <SeatingPlan
              availableSeatings={session.availableSeatings}
              pricing={session.pricing}
            />
          </div>
          <div style={{ textAlign: "left", margin: "10px" }}>
            <FoodInfo />
          </div>
          <div style={{ textAlign: "right", margin: "10px" }}>
            <h3>Net Total: {totalPrice()}</h3>
          </div>
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={handleClick}
              movie={movie}
              session={session}
              date={date}
              style={{ margin: "10px", background: "#ffa07a" }}
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
