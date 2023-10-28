// import 't Orders.css'
import { useContext, useEffect } from "react";
import { productsMock } from "../../services/products.mock"
import Context from "../../context/Context";
import { Link } from "react-router-dom";

function Products() {
  const { productsList,setProductsList } = useContext(Context);
  // const [showOrderDetails, setShowOrderDetails] = useState(false);

  // const handleOrderDetails = () => {
  //   setShowOrderDetails(!showOrderDetails);
  // }

  useEffect(() => {
    setProductsList(productsMock);
  }, []);

  return (
    <>
      <h2>Produtos</h2>
      <p>Selecione um produto para adicionar ao seu pedido</p>
      {productsList.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
        >
          <img src={product.img}
            className="img"
            alt={product.name}
          />
          <p>{product.name}</p>
          <p>{product.ingredientes[0]}</p>          
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
        </Link>
      ))}
    </>
  )
}

export default Products
