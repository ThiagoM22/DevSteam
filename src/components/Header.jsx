

const Header = (props) => {
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
          className="search w-100 d-none d-md-block border-0 rounded-1 search-input px-4 my-2"
          placeholder="Buscar..."
        />
      </div>

      <div id="carrinho" role="button" className="position-relative d-flex align-items-center justify-content-center gap-3">
        <i className="bi bi-cart4 fs-1 text-light fs-2"></i>
        {props.contadorJogos > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.contadorJogos}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </div>
    </header>
  );
};
export default Header;
