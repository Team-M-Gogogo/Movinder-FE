import React from "react";
import { Card } from "antd";
import FoodList from "./FoodList";

function FoodInfo() {
  return (
    <>
      <Card title="Food Menu">
        <FoodList/>
      </Card>
    </>
  );
}

export default FoodInfo;
