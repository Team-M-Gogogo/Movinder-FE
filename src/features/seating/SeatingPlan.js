import { Button, InputNumber, Modal, Popover } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SeatPicker } from "../../utils/SeatPicker/SeatPicker";
import {
  updateSelectedSeats,
  updateSelectedTickets,
  updateSelectedTicketsPriceTotal,
} from "../movieSlice";

export default function SeatingPlan(props) {
  const { pricing, availableSeatings } = props;
  const rows = availableSeatings.map((row) => [
    ...row.map((col, colIndex) => {
      return {
        number: colIndex + 1,
        isReserved: !col,
      };
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
    setDestroyModal(true);
    setSelected([]);
    const total = ticketPriceTotal(value, childQuantity);
    dispatch(updateSelectedTicketsPriceTotal(total));
  };
  const [childQuantity, setChildQuantity] = useState(0);
  const onChildQuantityChange = (value) => {
    setChildQuantity(value);
    setDestroyModal(true);
    setSelected([]);
    const total = ticketPriceTotal(adultQuantity, value);
    dispatch(updateSelectedTicketsPriceTotal(total));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dispatch = useDispatch();

  const handleCancel = () => {
    setDestroyModal(false);
    setIsModalOpen(false);
    dispatch(updateSelectedSeats(selected));
    dispatch(
      updateSelectedTickets([
        { item: "adult", quantity: adultQuantity, price: adultPrice },
        { item: "child", quantity: childQuantity, price: childPrice },
      ])
    );
  };

  const [selected, setSelected] = useState([]);
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((ids) => [...ids, id]);
    addCb(row, number, id);
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

  const ticketPriceTotal = (adultValue, childValue) => {
    var total = 0;
    pricing.forEach((price) => {
      const category = price.item.toLowerCase();
      if (category === "student" || category === "child") {
        total += childValue * childPrice;
      } else if (category === "adult") {
        total += adultValue * adultPrice;
      }
    });
    return total;
  };

  const [destroyModal, setDestroyModal] = useState(false);

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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Popover
        content={
          calTotalQuantity() > 0
            ? "Click to choose seats"
            : "Select number of tickets first"
        }
      >
        <Button disabled={calTotalQuantity() === 0} onClick={showModal}>
          Choose your seat(s)
        </Button>
      </Popover>
      <Modal
        destroyOnClose={destroyModal}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
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
      <div>
        <br />
        Total Ticket Price: ${ticketPriceTotal(adultQuantity, childQuantity)}
        <br />
        Chosen seats: {selected.join()}
        <br />
      </div>
    </div>
  );
}
