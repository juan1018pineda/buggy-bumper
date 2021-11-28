import React, { useEffect, useState } from "react";
import homeCircleImage from "../../assets/circle.png";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { API_URL } from "../../constants";

import "./Home.scss";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const cars = await axios.get(`${API_URL}/cars`);
      setCars(cars.data);
    };
    loadCars();
  }, []);

  return (
    <>
      <div className="login-container">
        <section className="login-titles">
          <h1>
            BUGGY &<br /> BUMPER, INC
          </h1>
          <h2>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
        </section>
        <img src={homeCircleImage} alt="Buggy Bumper Home car" />
      </div>
      <div className="cars">
        <h1>Alquila facilmente nuestros autos</h1>
        <section className="cars-container">
          {cars.map(({ carType, doors, bags, seats, price, image }, i) => (
            <Card style={{ width: "25rem" }} key={i}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{carType}</Card.Title>
                <ul>
                  <li>{doors}</li>
                  <li>{seats}</li>
                  <li>{bags}</li>
                </ul>
                <h5>${price}</h5>
                <Button variant="primary">Alquilar</Button>
              </Card.Body>
            </Card>
          ))}
        </section>
        <section className="commercial-info">
          <p>
            Mejor Agencia de alquiler y renta de carros y autos en Medellín y
            Antioquia, en todas las gamas que van desde autos Económicos, Gama
            Baja, Gama Alta, Sedan, Alquiler de Camionetas, Blindados y Vans
          </p>
          <img src={homeCircleImage} alt="Buggy Bumper Home car" />
          <div className="sombra"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
