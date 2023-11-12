import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import index from "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Ruleta() {
  const opciones = [
    "Descuento 5%",
    "Descuento 10%",
    "Descuento 20%",
    "Cupon 20.00 COP",
    "Descuento 50.00 COP",
    "No ganaste nada, inténtalo otro día",
  ];

  const [resultado, setResultado] = useState(null);
  const [girando, setGirando] = useState(false);

  const girarRuleta = () => {
    if (!girando) {
      setGirando(true);
      setTimeout(() => {
        const resultadoIndex = Math.floor(Math.random() * opciones.length);
        setResultado(opciones[resultadoIndex]);
        setGirando(false);
      }, 2000);
    }
  };

  return (
    <div className="contenedor">
      <div className={`ruleta ${girando ? 'girando' : ''}`}>
        {opciones.map((opcion, index) => (
          <div
            key={index}
            className={`opcion opcion-${index}`}
          >
            {opcion}
          </div>
        ))}
      </div>
      <div className="ruleta-rotor" onClick={girarRuleta}>
        Girar
      </div>
      <div className="resultado">
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
}

export default Ruleta;