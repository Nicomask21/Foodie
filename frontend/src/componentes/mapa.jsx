import React from 'react';
import axios from 'axios';
import '../styles/index.css';

class Ubicacion extends React.Component {
  obtenerUbicacion = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.mostrarUbicacion);
    } else {
      alert('La geolocalización no es soportada por este navegador.');
    }
  }

 mostrarUbicacion = async (posicion) => {
    const { latitude, longitude } = posicion.coords;

    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          latlng: `${latitude},${longitude}`,
          key: 'AIzaSyDJHENjn2ydQStxNrRwqTCQLGtS0fDZJeg'
        }
      });

      const data = response.data;

      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        const country = data.results[0].address_components.find(component => component.types.includes('country')).long_name;

        alert(`Dirección: ${address}\nPaís: ${country}`);
      } else {
        alert('No se pudo obtener la dirección y el país.');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error al obtener la dirección y el país.');
    }
  }

  render() {
    return (
      <div>
        <button className='locacion'  onClick={this.obtenerUbicacion}>Obtener Ubicación</button>
      </div>
    );
  }
}

export default Ubicacion;
