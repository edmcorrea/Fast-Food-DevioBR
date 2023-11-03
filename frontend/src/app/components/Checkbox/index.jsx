// import './InputSearch.scss'
import { PropTypes } from "prop-types";


function Checkbox({value, nameProduct, image, handleCheckboxChange}) {

  return (
    <label
      htmlFor={value}
      className="productDetails-inputs-labelCheckbox"
    >
      <section className="productDetails-inputs-labelCheckbox-first">
        <img 
          src={image}
          className="productDetails-inputs-labelCheckbox-first-img"
          alt={value}
          />
        <p> {nameProduct} <span>10g</span></p>
      </section>
      
      <section className="productDetails-inputs-labelCheckbox-first">
        <p>R$ 1.00</p>
        <input
          type="checkbox"
          name={value}
          value={value}
          onChange={handleCheckboxChange}
          />
      </section>
    </label>
  )
}

export default Checkbox

Checkbox.propTypes = {
  value:PropTypes.string,
  nameProduct:PropTypes.string,
  image:PropTypes.string,
  handleCheckboxChange:PropTypes.func,
};
