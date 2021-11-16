import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowseRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./Components/Login";
import CarList from "./Components/CarList";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const loadCars = () => {
      fetch("http://localhost:3004/cars")
        .then((data) => data.json())
        .then((data) => {
          setCars(data);
        });
    };
    loadCars();
  }, []);
  return (
    <div className="App">
      {/* <Login /> */}
      <CarList cars={cars} />
    </div>
  );
}

export default App;
