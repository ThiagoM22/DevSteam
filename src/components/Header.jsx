import React, { useEffect } from "react";
import { useState } from "react";

const Header = (props) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    salvaUsuario && setUsuario(JSON.parse(salvaUsuario));
  }, []);
  return (
    <header className="pt-4 w-100 navbar navbar-dark bg-dark justify-content-around align-items-center">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo" role="button" className="d-flex align-items-center me-5">
          <i className="bi bi-controller fs-1 text-light me-3"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>

        <input
          type="text"
          className="w-100 d-none d-md-block border-0 rounded-1 buscar px-4 my-2 ms-5"
          placeholder="Buscar..."
        />
      </div>

      <div
        id="carrinho"
        className="position-relative d-flex align-items-center gap-3"
      >
        {usuario && <span>Olá, {usuario.nome.split(" ")[0]}</span>}

        <i
          className="bi bi-cart4 text-light fs-2"
          role="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#carrinhoOffCanvas"
        ></i>

        {props.contadorJogos > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.contadorJogos}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
