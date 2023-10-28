import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Input from '../../components/InputSearch'
import OrderSummary from '../../components/OrderSummary'
import Products from '../../components/Products'
// import 't Orders.css'

function Orders() {

  return (
    <>
      <Header />
      <Input />
      <Categories />
      <Products />
      <OrderSummary />
    </>
  )
}

export default Orders
