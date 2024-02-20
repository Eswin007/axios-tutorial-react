import logo from "./logo.svg";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import "./styles/main.scss";

const baseURL = "http://localhost:4000";

const App = () => {
  const [dishes, setDishes] = useState([]);

  const fetchData = async (foodItem) => {
    const foodList = await axios.get(`${baseURL}/${foodItem}`);
    setDishes(foodList.data);
  };
  useEffect(() => {
    fetchData("pizza");
  }, []);
  console.log(dishes);

  return (
    <div>
      <Header fetchData={fetchData} />
      <FoodList dishes={dishes} />
    </div>
  );
};

export default App;
