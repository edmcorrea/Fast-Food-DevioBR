// import 't Orders.css'
import { useContext, useEffect } from "react";
import { productsMock } from "../../services/products.mock"
import Context from "../../context/Context";

function Products() {
  const { summaryList, setSummaryList, productsList,setProductsList } = useContext(Context);


  const findAndAddToSummaryList = (id) => {
    const updatedSummaryList = [...summaryList];

    const foundProduct = productsMock.find((product) => product.id === id);
    updatedSummaryList.push(foundProduct);

    setSummaryList(updatedSummaryList);
  }

  useEffect(() => {
    setProductsList(productsMock);
  }, []);

  return (
    <>
      <h2>Produtos</h2>
      <p>Selecione um produto para adicionar ao seu pedido</p>
      {productsList.map((product) => (
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
