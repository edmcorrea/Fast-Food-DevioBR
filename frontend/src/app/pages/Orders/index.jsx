// import { useState } from 'react'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Input from '../../components/InputSearch'
import OrderSummary from '../../components/OrderSummary'
import Products from '../../components/Products'

// import viteLogo from '/vite.svg'
// import 't Orders.css'

function Orders() {
  // const [count, setCount] = useState(0)

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
