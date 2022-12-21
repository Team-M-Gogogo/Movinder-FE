import React from "react";
import { SeatPicker } from "../../utils/SeatPicker/SeatPicker";

export default function SeatingPlan() {
  const seats = [
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
    [true, true, false, true, true, true, true, true, true, true, true],
  ];
  const rows = seats.map((row) => [
    ...row.map((col, colIndex) => {
      return { number: colIndex + 1, isReserved: !col };
    }),
  ]);

  return (
    <div className="App">
      <h1 className="screen">SCREEN</h1>
      <SeatPicker rows={rows} maxReservableSeats={5} visible alpha />
    </div>
  );
}
