import logo from './logo.svg';
import './App.css';
import { useState } from "react";
  
function App() {
  const[numero,setNumero] = useState(1)

  function aumentar(){
    const numeroActual = numero;
    setNumero(numeroActual+1);
  }
  function disminuir(){
    const numeroActual = numero;
    setNumero(numeroActual-1);
  }

  return (
    <div>
      <p>Numero actual: {numero}</p>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

export default App;



