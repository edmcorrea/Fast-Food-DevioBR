import CompletedOrders from '../../components/CompletedOrders'
import Header from '../../components/Header'
import PreparingOrders from '../../components/PreparingOrders'
// import 't Orders.css'

function Kitchen() {

  return (
    <>
      <Header />
      <PreparingOrders router="kitchen"/>
      <CompletedOrders router="kitchen"/>
    </>
  )
}

export default Kitchen
