import React from "react";

import "./CarList.scss";

const CarList = () => {
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
          <tr>
            <th>Id</th>
            <th>Marcas</th>
            <th>Puertas</th>
            <th>Maletas</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td>xxxx</td>
            <td>xxxx</td>
            <td>xxxx</td>
            <td>xxxx</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default CarList;
