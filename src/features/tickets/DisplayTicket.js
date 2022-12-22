import React, { useEffect, useState } from "react";
import { getFoods } from "../../api/movies";
import { Card } from "antd";
import { useLocation } from 'react-router-dom';

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

export default function DisplayTickets() {

  const booking = useLocation().state;
  // const booking = {
  //   bookingId: "63a29d9fe6ca2164d8e4c5fe",
  //   customerId: "639dab4f9370b716102e1294",
  //   movieSessionId: "63a0543e73a0b344693a7a22",
  //   ticketIds: ["63a29d9fe6ca2164d8e4c5fc", "63a29d9fe6ca2164d8e4c5fd"],
  //   foodIds: [
  //     "639dc14cb64fa559d6100d0c",
  //     "639dc14cb64fa559d6100d0c",
  //     "63a3cf34407860246eea0b74",
  //   ],
  //   bookingTime: "2022-12-21T13:46:07.908",
  //   total: 220,
  // };


  const [foodsMap, setFoodsMap] = useState();
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

    getFoods().then((response) => {
      var result = response.data.reduce(function (map, obj) {
        map[obj.foodId] = obj;
        return map;
      }, {});
      setFoodsMap(result);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (movie && session && cinema && foodsMap) {
    return (
      <div>
        <StepBar number={2} />

        <MovieInfoBox
          movie={movie}
          session={session}
          booking={booking}
          cinema={cinema}
          foodsMap={foodsMap}
          foodIds={booking.foodIds}
        />
        <Card title="Tickets">{ticketCardGrid}</Card>
      </div>
    );
  }
}
