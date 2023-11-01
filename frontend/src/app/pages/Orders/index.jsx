import { useContext } from 'react'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Input from '../../components/InputSearch'
import OrderSummary from '../../components/OrderSummary'
import Products from '../../components/Products'
import Context from '../../context/Context'
import './Orders.scss'

function Orders() {

  const { sucessNewCustomer } = useContext(Context);

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
    </div>
  )
}

export default Orders
