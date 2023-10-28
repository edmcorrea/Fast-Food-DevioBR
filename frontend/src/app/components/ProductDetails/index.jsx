// import 't Orders.css'
import { productsMock } from "../../services/products.mock"

function ProductDetails() {

  return (
    <>
      <h2>Revise seu pedido</h2>
      {productsMock.map((product) => (
        <div key={product.name}>
          <img src={product.img}
            className="img"
            alt={product.name}
          />
          <p>{product.name}</p>
          {product.ingredientes.map((ingrediente, idx)=>(
            <div key={idx}>
              <p>{ingrediente}</p>
            </div>
          ))}
          
          <p>{`R$${product.price}`}</p>
          <button>
            -
          </button>
        </div>
      ))}
    </>
  )
}

export default ProductDetails
