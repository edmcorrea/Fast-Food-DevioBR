import { useContext } from 'react'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Input from '../../components/InputSearch'
import OrderSummary from '../../components/OrderSummary'
import Products from '../../components/Products'
import Context from '../../context/Context'
import './Order.scss'
import ProductDetails from '../../components/ProductDetails'

function Orders() {

  const { sucessNewCustomer, productDetailsId, handleSelect } = useContext(Context);

  return (
    <div className='order'>
        <Header />
        <Input />
        <Categories />
        <Products />
        <OrderSummary />
      { sucessNewCustomer && 
      <p className="order-sucessCustomer green">PEDIDO CRIADO COM SUCESSO</p>
    }
      { productDetailsId != 0 &&
          <ProductDetails
          id={productDetailsId}
          handleSelect={handleSelect}
          />
        }
        <div className={`order${productDetailsId != 0 ? "-filterbg" : ""}`} onClick={() => {handleSelect(0)}}></div>
    </div>
  )
}

export default Orders
