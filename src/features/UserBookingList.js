import React, { useEffect, useState } from "react";
import { List, Row, Col, Image, Button, Card, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import {Notification} from "./Notification";

import {
  getCustomerBookings,
  getMovieById,
  getSessionById,
  getCinemasById,
} from "../api/movies";
import getUser from "../utils/getUser";
export default function UserBookingList() {
  const customerId = getUser().customerId;
  const navigate = useNavigate();

  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    getCustomerBookings(customerId).then((response) => {
      const bookingTicketsPromise = response.data.map((booking) => {
        return getSessionById(booking.movieSessionId).then(
          async (sessionResponse) => {
            const session = sessionResponse.data;

            const cinema = await getCinemaObj(session.cinemaId);
            const movie = await getMovieObj(session.movieId);

            return {
              session: session,
              cinema: cinema,
              movie: movie,
              bookingObj: booking,
            };
          }
        );
      });

      Promise.all(bookingTicketsPromise).then((responses) => {
        console.log(responses);
        setUserBookings(responses);

      });
    });
  }, [customerId]);

  // find cinema and movie name and show time

  const getMovieObj = (movieId) => {
    return getMovieById(movieId).then((response) => {
      return response.data;
    });
  };

  const getCinemaObj = (cinemaId) => {
    return getCinemasById(cinemaId).then((response) => {
      return response.data;
    });
  };

  function goToTicketPage(booking) {
    console.log(booking);
    navigate("/ticket", {state: booking});
  }

  function BookingCard(booking) {
    return (
      <Card title={"Movie Title: "+ booking.movie.movieName} extra={<Button onClick={() => goToTicketPage(booking.bookingObj)}>Click to view Ticket</Button>}>
        <Row justify="center" align="middle">
          <Col>
            <Image src={booking.movie.thumbnailUrl} style={{height:"300px"}}/>
          </Col>
          <Col style={{margin:"10px"}}>
            <div>
              <p>Show time: {booking.session.datetime}</p>
              <p>Cinema: {booking.cinema.cinemaName}</p>
            </div>
          </Col>
          {/* <Col span={3} color={"blue"}>
            <Button onClick={() => goToTicketPage(booking.bookingObj)}>Click to view Ticket</Button>
          </Col> */}
        </Row>
      </Card>

    );
  }

  return (
    <div>
      <div className="box">
      <Divider></Divider>
      <Row justify="center">
      <h1>Warm Reminder:</h1>
      </Row>
      <Row >
      <p>Below are the start date of your movie tickets in this two days:</p>
      </Row>
      <Row>
      <Notification bookings ={userBookings}/>
      </Row>
      </div>
      <Divider></Divider>
      <Row justify="center">
        <h1>Booking History</h1>
      </Row>
      <List
        grid={{ gutter:16, column: 3 }}
        dataSource={userBookings}
        renderItem={(booking) => (
          <List.Item style={{margin:"20px"}}>
            <List.Item.Meta title={BookingCard(booking)} />
          </List.Item>
        )}
      />
    </div>
  );
}