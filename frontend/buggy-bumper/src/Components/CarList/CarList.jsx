import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { API_URL } from "../../constants";
import NewCar from "../NewCar";

import "./CarList.scss";

const CarList = ({ authorized, user }) => {
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate("/");
    } else {
      const loadCars = async () => {
        const cars = await axios.get(`${API_URL}/cars`);
        setCars(cars.data);
      };

      loadCars();
    }
  }, [authorized, navigate]);

  const handleModal = () => {
    setShow(true);
  };

  return (
    <div className="car-list-container">
      <header className="car-list-header">
        <h1>BUGGY & BUMPER, INC</h1>
        <span>Usuario: {user}</span>
      </header>
      <div className="list-car-title">
        <span>Lista de carros</span>
        <button onClick={handleModal}>Nuevo</button>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Marcas</th>
              <th>Puertas</th>
              <th>Maletas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cars?.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.carType}</td>
                <td>{item.doors}</td>
                <td>{item.bags}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <NewCar show={show} setShow={setShow} setCars={setCars} />
    </div>
  );
};

export default CarList;
