import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
      navigate("/");
    }
  };

  return (
    <div className="container py-5 w-25">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label" htmlFor="frmNome">
            Nome
          </label>
          <input
            value={nome}
            className="form-control"
            type="text"
            name="Nome"
            id="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="frmEmail">Email</label>
          <input
            value={email}
            className="form-control"
            type="email"
            name="frmEmail"
            id="frmEmail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onclcick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
