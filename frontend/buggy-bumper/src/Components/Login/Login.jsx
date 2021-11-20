import React from "react";

import "./Login.scss";

import { checkLogin } from "../../api/adminUsers";

const Login = () => {
  // const [login, setLogin] = useState({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const login = { email, password };
    // setLogin({ email, password });
    checkLogin(login);
  };

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
