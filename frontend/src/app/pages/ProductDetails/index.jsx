import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import { Link, useParams } from "react-router-dom";
import Context from "../../context/Context";
import './ProductDetails.scss'
import { setSummaryListLocalStorage } from "../../services/getAndSetLocalStorage";
import InputProducts from "../../components/CheckboxProducts";

function ProductDetails() {
  const { id } = useParams();
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

    let foundProduct = productsMock.find((product) => product.id == id);
    console.log(foundProduct);

    foundProduct.price += selectedCheckboxes.length;
    foundProduct.additional = selectedCheckboxes;
    foundProduct.observation = observation;
    foundProduct.quantity = quantity;

    updatedSummaryList.push(foundProduct);
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
                      <div
                        key={idx}
                        className="productDetails-filtered-info-texts-ingredients-ingredient"
                      >
                        <p>{`${ingredient}, `}</p>
                      </div>
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
            <Link to="/">
              <button
                type="button"
                className="productDetails-btns-back"
              >
                Voltar
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                onClick={() => addToSummaryList(id)}
                className="productDetails-btns-add"
              >
                Continuar Adicionando
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductDetails
