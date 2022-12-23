import React, { useEffect, useState } from "react";
import { List, Row, Col, Image, Button, Card, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
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
  const TOMORROW = "Tomorrow";
  const TODAY = "Today";
  const bookingTodayTmr = (booking) =>
    moment(moment(booking.session.datetime))
      .subtract(0, "days")
      .calendar()
      .includes(TOMORROW) ||
    moment(moment(booking.session.datetime))
      .subtract(0, "days")
      .calendar()
      .includes(TODAY);

  const filteredBooksTodayTmr = userBookings.filter(bookingTodayTmr);
  const bookingsNotTodayTmr = userBookings.filter(
    (booking) => !filteredBooksTodayTmr.includes(booking)
  );

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
        setUserBookings(responses);
      });
    });
  }, [customerId]);


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
    navigate("/ticket", { state: booking });
  }

  function MovieTicketTitle(props) {
    const { booking } = props;
    return (
      <div>
        <Row justify="center">
          <div>{booking.movie.movieName}</div>
        </Row>
      </div>
    );
  }

  function BookingCard(booking) {
    console.log(booking);
    return (
      <Card title={<MovieTicketTitle booking={booking} />}>
        <Row justify="center" align="middle">
          <Col>
            <Image
              src={booking.movie.thumbnailUrl}
              style={{ height: "300px" }}
            />
          </Col>
          <Col style={{ margin: "10px" }}>
            <div>
              <p>
                Show time:{" "}
                {moment(booking.session.datetime).format("DD/MM/YY  HH:mm")}{" "}
              </p>
              <p>Cinema: {booking.cinema.cinemaName}</p>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Button
            type="primary"
            block
            onClick={() => goToTicketPage(booking.bookingObj)}
          >
            Click to view Ticket
          </Button>
        </Row>
      </Card>
    );
  }

  return (
    <div>
      <Row justify="center">
        <h1>My coming tickets in these two days</h1>
      </Row>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={filteredBooksTodayTmr}
        renderItem={(booking) => (
          <List.Item style={{ margin: "20px" }}>
            <List.Item.Meta title={BookingCard(booking)} />
          </List.Item>
        )}
      />
      <Divider></Divider>
      <Row justify="center">
        <h1>Booking History</h1>
      </Row>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={bookingsNotTodayTmr}
        renderItem={(booking) => (
          <List.Item style={{ margin: "20px" }}>
            <List.Item.Meta title={BookingCard(booking)} />
          </List.Item>
        )}
      />
    </div>
  );
}
