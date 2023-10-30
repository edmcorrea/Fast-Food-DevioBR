import CompletedOrders from '../../components/CompletedOrders'
import Header from '../../components/Header'
import PreparingOrders from '../../components/PreparingOrders'
import './Status.scss'

function Status() {

  return (
    <>
      <Header className='status'/>
      <div className='status-orders'>
        <PreparingOrders router="status"/>
        <CompletedOrders router="status"/>
      </div>
    </>
  )
}

export default Status
