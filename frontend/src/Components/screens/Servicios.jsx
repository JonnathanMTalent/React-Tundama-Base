import React from "react";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <body>
      <center>
        <h2>Nuestros servicios:</h2>
      </center>
      <div class="formu">
        <div class="formu__form">
          <div class="servicio">
            <Link to={"/registro"}>Servicio 1</Link>
          </div>
          <div class="servicio">
            <Link to={"/registro"}>Servicio 2</Link>
          </div>
          <div class="servicio">
            <Link to={"/registro"}>Servicio 3</Link>
          </div>
          <div class="servicio">
            <Link to={"/registro"}>Servicio 4</Link>
          </div>
          <div class="servicio">
            <Link to={"/registro"}>Servicio 5</Link>
          </div>
          <div class="servicio">
            <Link to={"/login"}>Ingresar Usuario: Login</Link>
          </div>
          <center>
            <button
              className="volver btn-block"
              type="button"
              // style={{ color: "black", backgroundColor: "rgb(13, 97, 97)" }}
              onClick={() => window.history.back()}
            >
              Volver
            </button>
          </center>
        </div>
      </div>
    </body>
  );
};

export default Servicios;
