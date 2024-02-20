import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const baseURL = "http://localhost:4000";

const App = () => {
  const [dishes, setDishes] = useState({});

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
      <Header />
    </div>
  );
};

export default App;
