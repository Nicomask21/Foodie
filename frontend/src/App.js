import React from 'react';
import './App.css';
import SuggestionsMenu from './componentes/SuggestionsMenu';
import Gustos from './componentes/Gustos';
import Footer from './componentes/footer'
import './Footer.css';
import Footer2 from './componentes/footer2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Gustos.css';
import './Suggestionsmenu.css'
import carrito from "./images/carrito.png"
import ruleta from "./images/ruleta.png";
import { Link } from 'react-router-dom';


const Navegacion = () => {
  return (
      
      <div>
        <nav className="navegacion">
          <div className="logo">Foodie</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="¿Qué te gustaría comer hoy?"
              className="search-input"
            />
            <button type="button" className="search-button">
              Buscar
            </button>
          </div>
          <div className="icons">
            <div className="icon">
               <img className='rule' src={ruleta} alt="Mi Imagen" />
            </div>
            <div className="icon">
              
            </div>
            
          <img to="/carrito" className='carri'  src={carrito} alt="Mi Imagen" height={32}></img>
                 
          </div>
        </nav>
        <SuggestionsMenu/> 
        <Gustos/>
        <Footer/>
        <Footer2/>
      </div>
    
  );
}

export default Navegacion;
