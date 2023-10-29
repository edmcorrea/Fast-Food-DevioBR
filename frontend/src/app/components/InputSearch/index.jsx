import { useContext } from 'react';
import Context from '../../context/Context';
import { productsMock } from "../../services/products.mock";
import './InputSearch.scss'

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
    <div className='inputSearch'>
      <h2>Seja bem vindo!</h2>
      <label htmlFor="home" className="inputSearch-label">
        <input
          className="inputSearch-label-input"
          id="home"
          type="text"
          name="home"
          placeholder="Pesquise pelo nome ou código do produto"
          value={ query }
          onChange={ inputOnChange }
        />
      </label>
    </div>
  )
}

export default InputSearch
