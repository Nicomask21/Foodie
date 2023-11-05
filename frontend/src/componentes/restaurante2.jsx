import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import carrito from "../images/carrito.png";
import corralBanner from "../images/corralBanner.jpg";
import CorralCuatro from "../images/CorralCuatro.png";
import CorralUno from "../images/CorralUno.jpeg";
import CorralDos from "../images/CorralDos.jpeg";
import CorralTres from "../images/CorralTres.jpeg";
import CorralCinco from "../images/CorralCinco.jpeg";



function restaurante2() {
    return (
        <>
          <div className="bg-red">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container px-4 px-lg-5 d-flex align-items-center">
            <p className="Foodie-text me-3">Foodie</p>
            <form className="d-flex flex-grow-1 mx-3">
                <input className="form-control me-2" type="search" placeholder="¿Qué te gustaría comer hoy?" aria-label="Search" />
                <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
            <div className="ms-auto d-flex align-items-center">
                <button className="borde ms-3" style={{ marginTop: "-5px" }}>
                    <i className="bi-cart-fill me-1"></i>
                    <img className='carrito-icon' src={carrito} height={25} alt="" />
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
            </div>
        </div>
    </nav>
</div>



            
                <div className="contenedor-restaurante">
                    <img src={corralBanner} height={500}  width={1343}  className="mi-contenedor" alt="" />
                </div>
            <br />  <br /> <br /> <br />  <br />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={CorralUno} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder"> Corralazo perro,papas y gaseosa</h5>
                                        30.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={CorralDos}alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Corralazo Hamburguesa grande con papas</h5>
                25.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={CorralTres} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="tres"> Corralazo Hamburguesa mediana,papas y gaseosa</h5>
                   33.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={CorralCuatro} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Corralazo Hamburguesa Todo terreno</h5>
                  27.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={CorralCinco} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Corralazo hamburguesa,gaseosa y papas</h5>
                30.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>


                        {/* Repite los bloques similares para los otros productos */}
                        
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-red text-white">
                <div className="container">
               
                    <p className="m-0 text-center">Copyright &copy; de mi sitio web 2023</p>
                </div>
            </footer>

        </>
    );
}

export default restaurante2 ;