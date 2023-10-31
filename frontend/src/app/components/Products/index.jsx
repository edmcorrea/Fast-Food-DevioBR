// import 't Orders.css'
import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import "./Products.scss";

function Products() {
  const { productsList, setProductsList, summaryList } = useContext(Context);
  const [showAllProducts, setShowAllProducts] = useState(false);
  // const [showOrderDetails, setShowOrderDetails] = useState(false);

  // const handleOrderDetails = () => {
  //   setShowOrderDetails(!showOrderDetails);
  // }

  useEffect(() => {
    setProductsList(productsMock);
  }, []);

  const displayedProducts = showAllProducts ? productsList : productsList.slice(0, 6);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <div className="products">
      <section className="products-texts">
        <h3>Produtos</h3>
        <p>Selecione um produto para adicionar ao seu pedido</p>
      </section>
      <section className="products-btns">
        <div className="products-btns-links">
          {displayedProducts.map((product) => (
            <Link
              className={`products-btns-link${summaryList.some((list) =>list.id == product.id) ? '-selected' : ''}`}
              key={product.id}
              to={`/product/${product.id}`}
            >
              <img src={product.img}
                className="products-btns-link-img"
                alt={product.name}
              />
              <div className="products-btns-link-texts">
                <h4>{product.name}</h4>
                <p>{product.ingredientes[0]}</p>          
              </div>
              <p className="products-btns-link-price">{`R$ ${product.price.toFixed(2)}`}</p>
            </Link>
          ))}
        </div>
        {!showAllProducts && (
          <button onClick={toggleShowAllProducts} className="products-btns-showMore">
            Ver mais <BiDownArrowAlt className="products-arrows"/>
          </button>
        )}
        {showAllProducts && (
          <button onClick={toggleShowAllProducts} className="products-btns-showMore">
            Ver menos <BiUpArrowAlt className="products-arrows"/>
          </button>
        )}
      </section>
    </div>
  )
}

export default Products
