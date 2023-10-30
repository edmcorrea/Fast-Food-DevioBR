import CompletedOrders from '../../components/CompletedOrders'
import Header from '../../components/Header'
import PreparingOrders from '../../components/PreparingOrders'
import './Kitchen.scss'

function Kitchen() {

  return (
    <div className='kitchen'>
      <Header />
      <div className='kitchen-orders'>
        <PreparingOrders router="kitchen"/>
        <CompletedOrders router="kitchen"/>
      </div>
    </div>
  )
}

export default Kitchen
