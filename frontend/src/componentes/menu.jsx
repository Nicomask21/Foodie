import '../styles/index.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import carrito from "../images/carrito.png";
import ruleta from "../images/ruleta.png";
import usuario from "../images/usuario.png";
import Ubicacion from './mapa';
import { Link } from 'react-router-dom';
import Carrito from './carrito';

const Menu = (props) => {

    return (
        <div className="bg-red">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="row pb-2">
                    <div className="col">
                        <div className="pt-2">
                            <Ubicacion />
                        </div>

                    </div>
                    <div className="col"><div className="ms-auto d-flex align-items-center">
                        <div className="">
                            <img src={usuario} className="icon " />
                        </div>
                        <div className="">
                            <img src={ruleta} className="icon " />

                        </div>
                        <div className="" >
                            <Link to='/carro' state={{ contadorCarrito: props.contadorCarrito }}>
                                <img className='icon  ' src={carrito} alt="" />
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{props.contadorCarrito}</span>
                            </Link>
                                
                            


                        </div>

                    </div></div>
                </div>

                <div className="container px-4 px-lg-5 d-flex align-items-center">


                    <form className="d-flex flex-grow-1 mx-1 barra">
                        <input className="form-control me-2" type="search" placeholder="¿Qué te gustaría comer hoy?" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Buscar</button>


                    </form>

                </div>
            </nav>
        </div>
    )
}
export default Menu;
