import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import carrito from "../images/carrito.png";
import CrepesBanner from "../images/CrepesBanner.webp";
import crepesCuatro from "../images/crepesCuatro.jpg";
import crepesUno from "../images/crepesUno.webp";
import crepesDos from "../images/crepesDos.jpeg";
import CrepesTres from "../images/CrepesTres.jpeg";
import crepesCinco from "../images/crepesCinco.jpeg";




function restaurante1() {
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
                    
                </div>
            <br />  <br /> <br /> <br />  <br />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={crepesUno} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Wafles con helado</h5>
                                        15.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={crepesDos}alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Hotcakes con helado,chocolate y fresas</h5>
                22.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={CrepesTres} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="tres">Torre de hotcakes con frutos rojos</h5>
                   32.000 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={crepesCuatro} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">crepes con helado y chocolate</h5>
                  25.200 COP
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">añadir al carrito</a></div>
        </div>
    </div>
</div>

<div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src={crepesCinco} alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">Wafles con frutos rojos</h5>
                24.340 COP
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

export default restaurante1 ;