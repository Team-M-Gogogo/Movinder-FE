import React, { useEffect, useState } from "react";
import { getFoods } from "../../api/movies";
import Food from "./Food";
import "./FoodList.css"

function FoodList() {
  const [foods, setfoods] = useState({});
  useEffect(() => {
    getFoods().then((response) => {
      setfoods(response.data);
    });
  }, []);
  const foodCards =
    foods.length > 0 &&
    foods.map((food) => {
      return <Food food={food} key={food.foodId} />;
    });
  return <div className="foodList">{foodCards}</div>;
}

export default FoodList;
