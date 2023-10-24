import React from 'react';
import mcdonal from "../images/mcdonal.jpeg"
import frisby from "../images/frisby.jpeg"
import creps from "../images/creps.jpeg"
import pizzahunt from "../images/pizzahunt.jpeg"
import corral from "../images/corral.jpeg"
const SuggestionsMenu = () => {
  return (
    <div>
      <h2>Algunas sugerencias para ti...</h2>
      <br /> 
      <div className="image-container">
        <img className='frisby' src={frisby}alt="Sugerencia 1" />
        <img className='corral' src={corral} alt="Sugerencia 2" />
        <img className='mcdonal' src={mcdonal} alt="Sugerencia 3" />
        <img className='pizzahunt' src={pizzahunt} alt="Sugerencia 4" />
        <img className='creeps' src={creps}alt="Sugerencia 5" />
      </div>
    </div>
  );
}

export default SuggestionsMenu;


