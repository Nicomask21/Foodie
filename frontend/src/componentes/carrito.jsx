import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import carrito from "../images/carrito.png"
function Carrito() {
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


        
        <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">

                <div className="row">

                  <div className="col-lg-7">
                    <h5 className="mb-3"><a href="#!" className="text-body"><i
                      className="fas fa-long-arrow-alt-left me-2"></i>Continua comprando</a></h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Carrito</p>
                        <p className="mb-0">Tu tienes 4 objetos en el carrito</p>
                      </div>
                      <div>
                        <p className="mb-0"><span className="text-muted">Ordenar por:</span> <a href="#!"
                          className="text-body">precio <i className="fas fa-angle-down mt-1"></i></a></p>
                      </div>
                    </div>

                    {/* Tarjeta de producto 1 */}
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: '50px' }}>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: '80px' }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tarjeta de producto 2 */}
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                            </div>
                            <div className="ms-3">
                              <h5>Samsung galaxy Note 10 </h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: '50px' }}>
                              <h5 className="fw-normal mb-0">2</h5>
                            </div>
                            <div style={{ width: '80px' }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Otras tarjetas de producto... */}

                  </div>

                  {/* Columna de detalles y checkout */}
                  <div className="col-lg-5">

                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Detalles de compra</h5>
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{ width: '45px' }} alt="Avatar" />
                        </div>

                        {/* Formulario de detalles de tarjeta */}
                        <form className="mt-4">
                          {/* ... */}
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. tax)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <button type="button" className="btn btn-info btn-block btn-lg">
                          <div className="d-flex justify-content-between">
                             <span>$4818.00</span>
                            <span> Confirmar compra <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>

                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
        </>
    );
}

  export default Carrito;
       
            


