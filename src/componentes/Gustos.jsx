
  import React from 'react';
  import { Link } from 'react-router-dom';
  import gourmet from "../images/gourmet.jpeg";
  import rapida from "../images/rapida.jpeg";
  import vegetariano from "../images/vegetariana.jpg";
  import "../Gustos.css"

  function Gustos() {
    return (
      <div className="gusto">
        <h2>Para Todos los Gustos</h2>
        <div className="imagenes-container">
          <div className="imagen-item">
            <div className="imagen-content">

              <img className='gourmet' src={gourmet} alt="Gourmet" style={{width:"100px" , height:"80px"}}/>
              <p>Gourmet</p>
            </div>
          </div>
          <div className="imagen-item">
            <div className="imagen-content">
              <img className='rapida' src={rapida} alt="Comida Rápida" style={{width:"100px" , height:"80px"}} />
              <p>Comida Rápida</p>
            </div>
          </div>
          <div className="imagen-item">
            <div className="imagen-content">

              <img className='vegetariano ' src={vegetariano} alt="Vegetariano" style={{width:"100px" , height:"80px"}} />
              <p>Vegetariano</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gustos;
  
