import { Route, Routes } from 'react-router-dom';
import './App.css'
import Order from './app/pages/Order';
import Kitchen from './app/pages/Kitchen'
import Status from './app/pages/Status'
import OrderDetails from './app/pages/OrderDetails';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={ <Order /> } />
      <Route exact path="/order/details" element={ <OrderDetails /> } />
      <Route exact path="/kitchen" element={ <Kitchen /> } />
      <Route exact path="/status" element={ <Status /> } />
    </Routes>
  )
}

export default App
