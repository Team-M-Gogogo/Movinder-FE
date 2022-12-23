import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import FoodList from "./FoodList";

function FoodInfo() {
  const foodTotal = useSelector((state) => {
    return state.movie.foodTotal;
  });
  return (
    <>
      <Card title="Food Menu">
        <FoodList />
        <div>Total Food Price: ${foodTotal}</div>
      </Card>
    </>
  );
}

export default FoodInfo;
