import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import { useState } from "react";

function App() {
  const [contadorJogos, setContadorJogos] = useState(0);
 const handleAddCarrinho = () => {
   setContadorJogos(contadorJogos + 1);
 }
  return (
    <>
      <Header contadorJogos={contadorJogos} />
      <Promotion />
    </>
  );
}

export default App;
