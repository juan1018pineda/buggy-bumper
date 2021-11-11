import React from "react";

import "./style.scss";

const Login = () => {
  return (
    <div className="container">
      <section className="titles">
        <h1>BUGGY &<br/> BUMPER, INC</h1>
        <h2>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
      </section>
      <section className="login-form">
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Clave" />
        <button>Ingresar</button>
      </section>
    </div>
  );
};

export default Login;
