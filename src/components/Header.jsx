import React from "react";

const Header = () => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark justify-content-around">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo">
          <div role="button" className="d-flex">
            <i className="bi bi-controller fs-1 text-light me-3"></i>
            <span className="navbar-brand fw-bold fs-3">DevSteam</span>
          </div>
        </div>
        <input
          type="text"
          className="w-100 d-none d-md-block border-0 rounded-1 search-input px-4 my-2"
          placeholder="Buscar..."
        />
      </div>

      <div id="carrinho" role="button">
        <i className="bi bi-cart4 fs-1 text-light fs-2"></i>
      </div>
    </header>
  );
};
export default Header;
