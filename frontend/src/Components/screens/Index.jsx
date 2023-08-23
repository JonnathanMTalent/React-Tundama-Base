import React from "react";
import "../styles/index.css";
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "shop",
    link: "/shop",
  },
];
const Index = () => {
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
        <img src={require("../images/icono.ico")} alt="logo"></img>
      </center>
      <center>
        <nav>
          <center>
            <Link className="btn btn-outline-info" to={"/registro"}>
              Registrarse
            </Link>
            <Link className="btn btn-outline-info" to={"/login"}>
              Iniciar Sesión
            </Link>
            <Link className="btn btn-outline-info" to={"/acercade"}>
              Acerca de Nosotros
            </Link>
            <Link className="btn btn-outline-info" to={"/servicios"}>
              Nuestros Servicios
            </Link>
          </center>
        </nav>
      </center>
      <Outlet></Outlet>
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

export default Index;
