import React, { useEffect, useState } from "react";
import { getFoods } from "../../api/movies";
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
import { useLocation } from "react-router-dom";

const gridStyle = {
  width: 300,
  textAlign: "center",
};

export default function DisplayTickets(props) {
  const location = useLocation();
  const booking = location.state;

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
      let result = response.data.reduce(function (map, obj) {
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
