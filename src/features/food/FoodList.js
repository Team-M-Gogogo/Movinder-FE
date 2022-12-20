import React, { useEffect, useState } from "react";
import { getFoods } from "../../api/movies";
import Food from "./Food";

function FoodList() {
  const [foods, setfoods] = useState({});
  useEffect(() => {
    getFoods().then((response) => {
      console.log(response.data);
      setfoods(response.data);
    });
  }, []);
  return (
    foods.length > 0 &&
    foods.map((food) => {
    return <Food food={food} key={food.foodId}/>;
  }));
}

export default FoodList;
