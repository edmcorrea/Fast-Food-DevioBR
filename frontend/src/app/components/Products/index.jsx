import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import Context from "../../context/Context";
import { BiDownArrowAlt, BiUpArrowAlt, BiCheck } from 'react-icons/bi';
import "./Products.scss";

function Products() {
  const { categorie, productsList, setProductsList, summaryList, handleSelect } = useContext(Context);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    const productFilteredByCategorie = productsMock.filter((product) => product.type === categorie);
    setProductsList(productFilteredByCategorie);
  }, [categorie]);

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
            <button
              className={`products-btns-link${summaryList.some((list) =>list.id == product.id) ? '-selected' : ''}`}
              key={product.id}
              onClick={() => handleSelect(product.id)}
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
              {summaryList.some((list) =>list.id == product.id) && <BiCheck className="products-btns-link-checked"/>}
            </button>
          ))}
        </div>
        {!showAllProducts ? (
          <button onClick={toggleShowAllProducts} className="products-btns-showMore">
            Ver mais <BiDownArrowAlt className="products-arrows"/>
          </button>
          ) : (
          <button onClick={toggleShowAllProducts} className="products-btns-showMore">
          Ver menos <BiUpArrowAlt className="products-arrows"/>
          </button>
        )}
      </section>
    </div>
  )
}

export default Products
