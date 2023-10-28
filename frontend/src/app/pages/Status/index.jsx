import CompletedOrders from '../../components/CompletedOrders'
import Header from '../../components/Header'
import PreparingOrders from '../../components/PreparingOrders'
// import 't Orders.css'

function Status() {

  return (
    <>
      <Header />
      <PreparingOrders router="status"/>
      <CompletedOrders router="status"/>
    </>
  )
}

export default Status
