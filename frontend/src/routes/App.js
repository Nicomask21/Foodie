import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "../componentes/restaurante";
import R2 from "../componentes/restaurante2"
import R3 from "../componentes/restaurante3"
import R4 from "../componentes/restaurante4"
import R5 from "../componentes/restaurante5"
import Carro from "../pages/Carro"
import Ruleta from "../componentes/ruleta"
import Perfil from "../componentes/perfil"
import Login from "../pages/login"


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>  
                <Route exact path='/r2' element={<R2/>}/>
                <Route exact path='/r3' element={<R3/>}/> 
                <Route exact path='/r4' element={<R4/>}/> 
                <Route exact path='/r5' element={<R5/>}/> 
                <Route exact path='/carro' element={<Carro/>}/> 
                <Route exact path='/ruleta' element={<Ruleta/>}/> 
                <Route exact path='/perfil' element={<Perfil/>}/>
                <Route exact path='/login' element={<Login/>}/> 
                


            </Routes>
        </Router>
    );

}
export default App;