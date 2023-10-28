// import 't Orders.css'
import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import { Link, useParams } from "react-router-dom";
import Context from "../../context/Context";

function ProductDetails() {
  const {id} = useParams();
  const { summaryList, setSummaryList } = useContext(Context);

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [observations, setObservations] = useState("");
  
  useEffect(()=> {
    const filtered = productsMock.filter((product) => product.id == id)
    setFilteredProduct(filtered);
  }, [id]);

    const findAndAddToSummaryList = (id) => {
    const updatedSummaryList = [...summaryList];

    const foundProduct = productsMock.find((product) => product.id === id);
    updatedSummaryList.push(foundProduct);

    setSummaryList(updatedSummaryList);
  }

  const handleObservationsChange = (event) => {
    setObservations(event.target.value);
  };

  return (
    <>
      {!filteredProduct.length ? (<p>Carregando</p>) :
      <div>
        <h1>Revise seu pedido</h1>
        {filteredProduct.map((filtered)=> (
          <div key={filtered.id}>
            <p>{filtered.name}</p>
            {filtered.ingredientes.map((ingrediente, idx)=>(
              <div key={idx}>
                <p>{ingrediente}</p>
              </div>
            ))}
            <p>{`R$ ${filtered.price.toFixed(2)}`}</p>
          </div>

        ))}
        <div>
          <label>Observações:</label>
          <textarea
            rows="4"
            cols="50"
            value={observations}
            onChange={handleObservationsChange}
          ></textarea>
        </div>
        <Link to="/">
          <button
            type="button"
          >
            Voltar
          </button>
        </Link>
        <Link>
          <button
            type="button"
            onClick={() => findAndAddToSummaryList(id)}
            >
            Continuar Adicionando
          </button>
        </Link>
      </div>
      }
    </>
  )
}

export default ProductDetails
