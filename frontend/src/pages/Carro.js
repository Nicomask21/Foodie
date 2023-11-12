import React from "react";
import Menu from "../componentes/menu";
import Carrito from "../componentes/carrito";
import { Link, useLocation } from 'react-router-dom';



function Carro(props) {
    const location = useLocation()
    const { contadorCarrito } = location.state
    return (
        <div className="carro">
            <Menu contadorCarrito={contadorCarrito}/>
            <Carrito/>
        </div>
    );
}
export default Carro;