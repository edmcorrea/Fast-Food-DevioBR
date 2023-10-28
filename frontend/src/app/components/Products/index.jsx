// import 't Orders.css'
import { useContext } from "react";
import { productsMock } from "../../services/products.mock"
import Context from "../../context/Context";

function Products() {
  const { summaryList, setSummaryList } = useContext(Context);


  const findAndAddToSummaryList = (id) => {
    console.log(id, summaryList);
    const updatedSummaryList = [...summaryList];

    const foundProduct = productsMock.find((product) => product.id === id);
    updatedSummaryList.push(foundProduct);

    setSummaryList(updatedSummaryList);
  }

  return (
    <>
      <h2>Produtos</h2>
      <p>Selecione um produto para adicionar ao seu pedido</p>
      {productsMock.map((product) => (
        <button
          key={product.id}
          onClick={() => findAndAddToSummaryList(product.id)}
        >
          <img src={product.img}
            className="img"
            alt={product.name}
          />
          <p>{product.name}</p>
          <p>{product.ingredientes[0]}</p>          
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
        </button>
      ))}
    </>
  )
}

export default Products
