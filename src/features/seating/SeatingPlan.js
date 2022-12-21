import { Button, InputNumber, Modal } from "antd";
import React, { useState } from "react";
import { SeatPicker } from "../../utils/SeatPicker/SeatPicker";

export default function SeatingPlan(props) {
  const { floorPlan, pricing } = props;
  // const seats = [
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  //   [true, true, false, true, true, true, true, true, true, true, true],
  // ];
  const rows = floorPlan.map((row) => [
    ...row.map((col, colIndex) => {
      return { number: colIndex + 1, isReserved: !col };
    }),
  ]);
  let adultPrice = 0,
    childPrice = 0;
  pricing.forEach((price) => {
    const category = price.item.toLowerCase();
    if (category === "student" || category === "child") {
      childPrice = price.price;
    } else if (category === "adult") {
      adultPrice = price.price;
    }
  });

  const MAX_RESERVABLE_SEATS = 5;

  const [adultQuantity, setAdultQuantity] = useState(0);
  const onAdultQuantityChange = (value) => {
    setAdultQuantity(value);
  };
  const [childQuantity, setChildQuantity] = useState(0);
  const onChildQuantityChange = (value) => {
    setChildQuantity(value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [selected, setSelected] = useState([]);
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((ids) => [...ids, id]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((selectedIds) =>
      selectedIds.filter((selectedId) => selectedId !== id)
    );
    removeCb(row, number);
  };
  const calTotalQuantity = () => {
    return adultQuantity + childQuantity;
  };

  return (
    <div>
      <span>Adult (${adultPrice})&nbsp;&nbsp;</span>
      <InputNumber
        className="seatQuantity"
        min={0}
        max={MAX_RESERVABLE_SEATS}
        defaultValue={adultQuantity}
        onChange={onAdultQuantityChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Child (${childPrice})&nbsp;&nbsp;</span>
      <InputNumber
        className="seatQuantity"
        min={0}
        max={MAX_RESERVABLE_SEATS}
        defaultValue={childQuantity}
        onChange={onChildQuantityChange}
      />
      <Button disabled={calTotalQuantity() === 0} onClick={showModal}>
        Choose your seat(s)
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="screen">SCREEN</h1>
        <SeatPicker
          addSeatCallback={addSeatCallback}
          removeSeatCallback={removeSeatCallback}
          rows={rows}
          maxReservableSeats={calTotalQuantity()}
          visible
          alpha
        />
        No. of tickets: {selected.length}/{calTotalQuantity()}
        <br />
        Chosen seats: {selected.join()}
      </Modal>
    </div>
  );
}
