import React from 'react'
import Food from './Food';

function FoodList() {
    const foods = {};
  return foods.map((food) => {
    return <Food food={food}/>
  })
}

export default FoodList