import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import carrito from "../images/carrito.png";
import frisbybanner from "../images/frisbybanner.jpeg";
import frisbyCuatro from "../images/frisbyCuatro.jpg";
import frisbyUno from "../images/frisbyUno.jpeg";
import frisbyDos from "../images/frisbyDos.jpg";
import frisbyTres from "../images/frisbyTres.png";
import frisbyCinco from "../images/frisbyCinco.png";

function Restaurante1() {
    const [contadorCarrito, setContadorCarrito] = useState(0);

    const agregarAlCarrito = () => {
        setContadorCarrito(contadorCarrito + 1);
    }

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
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{contadorCarrito}</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="contenedor-restaurante">
                <img src={frisbybanner} height={438} className="mi-contenedor" alt="" />
            </div>

            <br /> <br /> <br /> <br /> <br />

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {/* Producto 1 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={frisbyUno} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">frisby combo pollo ensalada y gaseosa</h5>
                                        15.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" >añadir al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 2 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={frisbyDos} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Pollo frito dorado</h5>
                                        45.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={agregarAlCarrito}>añadir al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 3 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={frisbyTres} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="tres">pollo, postre, ponque y gaseosa</h5>
                                        32.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={agregarAlCarrito}>añadir al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 4 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={frisbyCuatro} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Frisby combo ensalada,pollo, papas y gaseosa</h5>
                                        35.000 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={agregarAlCarrito}>añadir al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 5 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={frisbyCinco} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">ensalada,pollo,salsa, papas y gaseosa</h5>
                                        35.500 COP
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#" onClick={agregarAlCarrito}>añadir al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>

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
export  default Restaurante1;

            