import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { API_URL } from "./constants";

import Login from "./Components/Login";
import CarList from "./Components/CarList";

function App() {
  const [cars, setCars] = useState([]);
  const endpoint = "/cars";
  useEffect(() => {
    const loadCars = () => {
      fetch(`${API_URL}${endpoint}`)
        .then((data) => data.json())
        .then((data) => {
          setCars(data);
        });
    };
    loadCars();
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          exact
          path="/admin"
          element={<CarList authorized={true} cars={cars} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
