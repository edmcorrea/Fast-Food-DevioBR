import { useContext } from 'react';
import Context from '../../context/Context';
import { productsMock } from "../../services/products.mock";
// import 't Orders.css'

function InputSearch() {
  const { query, setQuery, setProductsList } = useContext(Context);

  const inputOnChange = ({ target: { value } }) => {
    value = value.toLowerCase();

    const filteredProducts = productsMock.filter((product) => {
      const name = product.name.toLowerCase();
      const id = String(product.id);

      return name.includes(value) || id.includes(value)
    });

    setProductsList(filteredProducts);
    setQuery(value);
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
      </label>
    </>
  )
}

export default InputSearch
