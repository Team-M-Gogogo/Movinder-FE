import React, { useEffect, useState } from "react";
import { List, Row, Col, Image } from "antd";
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
    navigate("/ticket", booking);
  }

  function BookingCard(booking) {
    return (
      <Row justify="center" align="middle">
        <Col span={6}>
          <Image src={booking.movie.thumbnailUrl} />
        </Col>
        <Col span={11}>
          <div>
            <p>Movie name: {booking.movie.movieName}</p>
            <p>Show time: {booking.session.datetime}</p>
            <p>Cinema: {booking.cinema.cinemaName}</p>
          </div>
        </Col>
        <Col span={3} color={"blue"}>
          Click to view Ticket
        </Col>
      </Row>
    );
  }

  return (
    <div>
      <div className="box">
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
      <Row justify="center">
        <h1>Booking History</h1>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={userBookings}
        renderItem={(booking) => (
          <List.Item onClick={() => goToTicketPage(booking.bookingObj)}>
            <List.Item.Meta title={BookingCard(booking)} />
          </List.Item>
        )}
      />
    </div>
  );
}
