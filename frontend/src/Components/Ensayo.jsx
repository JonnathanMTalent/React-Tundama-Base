import React from "react";
import "../Components/styles/index.css";
// import { Link } from "react-router-dom";
const Ensayo = () => {
  return (
    <div>
      <a name="arriba"></a>
      <header>
        <center>
          <h1>Bienvenid@ a Tundama</h1>
        </center>
      </header>
      <br />
      <br />
      <br />
      <center>
        <img src="../Components/images/icono.ico" alt="logo inicio" />
      </center>
      <center>
        <nav>
          <center>
            <a class="btn btn-outline-info" href="/">
              <b>Login</b>{" "}
            </a>
            <a class="btn btn-outline-info" href="/">
              <b>Registrarse</b>{" "}
            </a>
            <a class="btn btn-outline-info" href="/">
              {" "}
              <b>acerca de</b>
            </a>
            <a class="btn btn-outline-info" href="/">
              {" "}
              <b>servicios</b>
            </a>
          </center>
        </nav>
      </center>
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <center>
          <p>
            <h5>Página en Construccion</h5>
          </p>
        </center>
      </footer>
    </div>
  );
};

export default Ensayo;
