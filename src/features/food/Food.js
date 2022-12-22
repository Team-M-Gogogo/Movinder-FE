import { Card, Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFoodTotal } from "../movieSlice";

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
      <Card style={{ margin: "15px" }} type="inner" title={food.foodName}>
        <p>Description: {food.description}</p>
        <p>Price: ${food.price}</p>
        <Input.Group compact>
          <Button onClick={handleReduce}>-</Button>
          <Input
            placeholder={amount}
            style={{
              width: "33px",
            }}
          />
          <Button onClick={handleAdd}>+</Button>
        </Input.Group>
      </Card>
    </>
  );
}

export default Food;
