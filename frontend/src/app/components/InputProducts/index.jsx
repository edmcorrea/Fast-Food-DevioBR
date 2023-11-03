// import './InputSearch.scss'
import { PropTypes } from "prop-types";
import Checkbox from "../Checkbox";


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
        className="productDetails-inputs-textarea"
      ></textarea>

      <div className="productDetails-inputs-checkboxs">
        <h3 className="productDetails-inputs-text">Adicionais</h3>

        <Checkbox
          nameProduct='Bacon'
          value='bacon'
          image = 'https://i.pinimg.com/originals/99/52/01/995201e1c92ca9eced42364ed8a1892c.png'
          handleCheckboxChange={handleCheckboxChange}
        />

        <Checkbox
          nameProduct='Cheddar'
          value='cheddar'
          image = 'https://static.wixstatic.com/media/11d2b8_14635bf4788d49ac8dece0aeec1957e6~mv2.png/v1/fit/w_500,h_500,q_90/file.png'
          handleCheckboxChange={handleCheckboxChange}
        />

<Checkbox
          nameProduct='Molho'
          value='molho'
          image = 'https://media.graphassets.com/Jy3lOgmTSKhQUaKC6tto'
          handleCheckboxChange={handleCheckboxChange}
        />
        
      </div>
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
