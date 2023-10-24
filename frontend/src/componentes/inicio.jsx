const Navegacion = () => {
    return (
      <div>
        <nav className="navegacion">
          <div className="logo">Foodie</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="¿Qué te gustaría comer hoy?"
              className="search-input"
            />
            <button type="button" className="search-button">
              Buscar
            </button>
          </div>
        </nav>
        <SuggestionsMenu />
      </div>
    );
  }
  
  export default Navegacion;