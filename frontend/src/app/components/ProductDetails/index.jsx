import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import { PropTypes } from "prop-types";
import Context from "../../context/Context";
import './ProductDetails.scss'
import { setSummaryListLocalStorage } from "../../services/getAndSetLocalStorage";
import InputProducts from "../InputProducts";

function ProductDetails({id, handleSelect}) {

  const { summaryList, setSummaryList } = useContext(Context);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [observation, setObservation] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const filtered = productsMock.filter((product) => product.id == id)
    setFilteredProduct(filtered);
  }, [id]);

  const addToSummaryList = (id) => {
    const updatedSummaryList = [...summaryList];

    const foundProduct = productsMock.find((product) => product.id == id);

    const newPrice = foundProduct.price + selectedCheckboxes.length;

    foundProduct.additional = selectedCheckboxes;
    foundProduct.observation = observation;
    foundProduct.quantity = quantity;

    updatedSummaryList.push({...foundProduct, price: newPrice });
    setSummaryList(updatedSummaryList);
    setSummaryListLocalStorage(updatedSummaryList);
  }

  
  const handleObservationsChange = (event) => {
    setObservation(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="containerProductDetails">
      {!filteredProduct.length ? (<p>Carregando</p>) :
        <div className="productDetails">
          <h1 className="productDetails-title">Revise seu pedido</h1>
          {filteredProduct.map((filtered) => (
            <div key={filtered.id} className="productDetails-filtered">
              <div className="productDetails-filtered-info">
                <img
                  src={filtered.img}
                  className="productDetails-filtered-info-img"
                  alt={filtered.name}
                />

                <div className="productDetails-filtered-info-texts">
                  <p className="productDetails-filtered-info-texts-title">{filtered.name}</p>

                  <div
                    className="productDetails-filtered-info-texts-ingredients"
                  >
                    {filtered.ingredientes.map((ingredient, idx) => (
                      <p
                        key={idx}
                        className="productDetails-filtered-info-texts-ingredients-ingredient"
                      >
                        {`${ingredient}${filtered.ingredientes.length-1 === idx ? "" : ','}`}
                      </p>
                    ))}
                  </div>
                  <div className="productDetails-filtered-info-texts-ingredients-btns">
                    <button type="button" onClick={decrementQuantity}
                      className="productDetails-filtered-info-texts-ingredients-btns-btn"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={incrementQuantity}
                      className="productDetails-filtered-info-texts-ingredients-btns-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="productDetails-filtered-price">
                <h6>Total</h6>
                <p>{`R$ ${(filtered.price * quantity).toFixed(2)}`}</p>
              </div>
            </div>
          ))}
          
          <InputProducts
            selectedCheckboxes={selectedCheckboxes}
            setSelectedCheckboxes={setSelectedCheckboxes}
            observation={observation}
            handleObservationsChange={handleObservationsChange}
          />

          <div className="productDetails-btns">
            <button
              type="button"
              className="productDetails-btns-back"
              onClick={() => handleSelect(0)}
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={() => {
                addToSummaryList(id)
                handleSelect(0)
              }}
              className="productDetails-btns-add"
            >
              Continuar Adicionando
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetails

ProductDetails.propTypes = {
  id: PropTypes.number,
  handleSelect: PropTypes.func,
};
