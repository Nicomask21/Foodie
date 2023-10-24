import React from "react";
import { Route,Routes,Router } from "react-router-dom";
import App from './App'
import mcdonals from './pages/mcdonals';
import carrito from './pages/carrito';
import ruleta from './pages/ruleta';
import pizzahunt from './pages/pizzahunt';
import Carrito from './pages/carrito';
function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>}/>
                <Route exact path='/app' element={<App/>}/>
                <Route exact path='/carrito' element={<Carrito/>}/>
                
            </Routes>
        </Router>
    );

}
