import { Card, Button, Input, Image } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFoodTotal } from "../movieSlice";
import "./Food.css";

function Food(props) {
  const food = props.food;
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleReduce = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      dispatch(changeFoodTotal(-food.price));
    }
  };
  const handleAdd = () => {
    setAmount(amount + 1);
    dispatch(changeFoodTotal(food.price));
  };
  return (
    <>
      <Card className="foodCard" type="inner" title={food.foodName}>
        <Image width="100px" src={food.thumbnailUrl} />
        <p>Description: {food.description}</p>
        <p>Price: ${food.price}</p>
        <Input.Group compact className="quanButton">
          <Button onClick={handleReduce}>-</Button>
          {/* <Input disabled className="foodQuantity" placeholder={amount} /> */}
          <p className="foodQuantity">{amount}</p>
          <Button onClick={handleAdd}>+</Button>
        </Input.Group>
      </Card>
    </>
  );
}

export default Food;
