// import './InputSearch.scss'
import { PropTypes } from "prop-types";


function InputProducts({selectedCheckboxes, setSelectedCheckboxes, observation, handleObservationsChange}) {

  const handleCheckboxChange = (event) => {
    const { target: { checked, value } } = event;
  
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== value));
    }
  };

  return (
    <div  className="productDetails-inputs">
      <label className="productDetails-inputs-text">Observações</label>
        <textarea
          rows="3"
          value={observation}
          onChange={handleObservationsChange}
          placeholder="Insira uma observação ao pedido"
          className="productDetails-inputs-input"
        ></textarea>
      <label htmlFor="bacon">
        <img 
          src=""
          className=""
          alt="bacon"
        />
        <p>Bacon<span>10g</span></p>
        <p>R$ 1.00</p>
        <input
          type="checkbox"
          name="bacon"
          value="bacon"
          onChange={handleCheckboxChange}
        />
      </label>

      <label htmlFor="cheddar">
        <img 
          src=""
          className=""
          alt="cheddar"
        />
        <p>Cheddar<span>10g</span></p>
        <p>R$ 1.00</p>
        <input
          type="checkbox"
          name="cheddar"
          value="cheddar"
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  )
}

export default InputProducts

InputProducts.propTypes = {
  selectedCheckboxes: PropTypes.arrayOf(PropTypes.string),
  setSelectedCheckboxes: PropTypes.func,
  observation:PropTypes.string,
  handleObservationsChange: PropTypes.func,
};
