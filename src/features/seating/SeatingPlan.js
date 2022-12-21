import React from "react";
import { SeatPicker } from "../../utils/SeatPicker/SeatPicker";

export default function SeatingPlan() {
  const rows = [
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
    ],
    [],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
      { number: 12 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
      { number: 12 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
    ],
  ];

  return (
    <div className="App">
      hi
      <h1 className="screen">SCREEN</h1>
      <SeatPicker rows={rows} maxReservableSeats={100} visible />
    </div>
  );
}
