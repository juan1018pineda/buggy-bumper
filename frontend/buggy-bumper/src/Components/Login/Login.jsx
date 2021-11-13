import React, { useState } from "react";

import "./Login.scss";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    setLogin({ email, password });
  };
  console.log(login);

  return (
    <div className="login-container">
      <section className="login-titles">
        <h1>
          BUGGY &<br /> BUMPER, INC
        </h1>
        <h2>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
      </section>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Clave" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
