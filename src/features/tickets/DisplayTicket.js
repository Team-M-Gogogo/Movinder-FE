import React, { useEffect, useState } from "react";

import { Card } from "antd";

import TicketCard from "./TicketCard";
import {
  getTicketById,
  getSessionById,
  getMovieById,
  getCinemasById,
} from "../../api/movies";
import MovieInfoBox from "./MovieInfoBox";
import StepBar from "../booking/bookingData";

const gridStyle = {
  width: 300,
  textAlign: "center",
};

export default function DisplayTickets(props) {
  // const {booking} = props;
  const booking = {
    bookingId: "63a29d9fe6ca2164d8e4c5fe",
    customerId: "639dab4f9370b716102e1294",
    movieSessionId: "63a0543e73a0b344693a7a22",
    ticketIds: ["63a29d9fe6ca2164d8e4c5fc", "63a29d9fe6ca2164d8e4c5fd"],
    foodIds: ["639dc14cb64fa559d6100d0c"],
    bookingTime: "2022-12-21T13:46:07.908",
    total: 220,
  };

  const [tickets, setTickets] = useState([]);
  const [movie, setMovie] = useState();
  const [session, setSession] = useState();
  const [cinema, setCinema] = useState();

  useEffect(() => {
    const bookingTicketsPromise = booking.ticketIds.map((ticketId) => {
      return getTicketById(ticketId).then((response) => {
        return response.data;
      });
    });

    Promise.all(bookingTicketsPromise).then((responses) => {
      setTickets(responses);
    });

    getSessionById(booking.movieSessionId).then((sessionDataResponse) => {
      setSession(sessionDataResponse.data);
      getMovieById(sessionDataResponse.data.movieId).then((movieResponse) => {
        setMovie(movieResponse.data);
      });
      getCinemasById(sessionDataResponse.data.cinemaId).then(
        (cinemaDataResponse) => {
          setCinema(cinemaDataResponse.data);
        }
      );
    });
  }, [booking.movieSessionId, booking.ticketIds]);

  const ticketCardGrid = tickets.map((ticket) => {
    return (
      <Card.Grid key={ticket.ticketId} style={gridStyle}>
        <TicketCard
          ticketID={ticket.ticketId}
          ticketType={ticket.ticketType}
          price={ticket.price}
          row={ticket.seat.row}
          col={ticket.seat.column}
        />
      </Card.Grid>
    );
  });

  if (movie && session && cinema) {
    return (
      <div>
        <StepBar number={2}/>

        <MovieInfoBox
          movie={movie}
          session={session}
          booking={booking}
          cinema={cinema}
        />
        <Card title="Tickets">{ticketCardGrid}</Card>
      </div>
    );
  }
}
