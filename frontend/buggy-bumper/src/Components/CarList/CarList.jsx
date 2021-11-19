import React from "react";

import "./CarList.scss";

const CarList = ({ cars }) => {
  return (
    <div className="car-list-container">
      <header className="car-list-header">
        <h1>BUGGY & BUMPER, INC</h1>
        <span>Usuario:xxxx</span>
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
