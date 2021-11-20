import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { API_URL } from "../../constants";

import "./CarList.scss";

const CarList = ({ authorized, user }) => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate("/");
    } else {
      const loadCars = async () => {
        const data = await (await fetch(`${API_URL}/cars`)).json();
        setCars(data);
      };

      loadCars();
    }
  }, [authorized, navigate]);

  return (
    <div className="car-list-container">
      <header className="car-list-header">
        <h1>BUGGY & BUMPER, INC</h1>
        <span>Usuario: {user}</span>
      </header>
      <div className="list-car-title">
        <span>Lista de carros</span>
        <button>Nuevo</button>
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
    </div>
  );
};

export default CarList;
