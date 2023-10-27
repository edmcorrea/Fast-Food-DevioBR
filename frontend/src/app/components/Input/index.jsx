// import { useState } from 'react'
import { useContext } from 'react';
import Context from '../../context/Context';
// import viteLogo from '/vite.svg'
// import 't Orders.css'

function Input() {
  const { query, setQuery, /*setSearchList*/ } = useContext(Context);

  const inputOnChange = ({ target }) => {
    const { value } = target;
    setQuery(value);
  };

  const handleSearch = async () => {
    // const results = await getProductsFromQuery(query);
    // setSearchList(results.results);
    // setSearchList()
  };
  return (
    <>
      <h2>Seja bem vindo!</h2>
      <label htmlFor="home" className="header-search-label">
          <input
            className="header-search-label-input"
            id="home"
            type="text"
            name="home"
            placeholder="Pesquise pelo nome do produto ou código"
            value={ query }
            onChange={ inputOnChange }
          />
          <button
            className="header-search-label-btn"
            type="button"
            onClick={ () => handleSearch() }
          >
          </button>
        </label>
    </>
  )
}

export default Input
