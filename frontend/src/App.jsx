import { Route, Routes } from 'react-router-dom';
import './App.css'
import Orders from './app/pages/Orders';
import Kitchen from './app/pages/Kitchen'
import Status from './app/pages/Status'
import OrderDetails from './app/pages/OrderDetails';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={ <Orders /> } />
      <Route exact path="/order/details" element={ <OrderDetails /> } />
      <Route exact path="/kitchen" element={ <Kitchen /> } />
      <Route exact path="/status" element={ <Status /> } />
    </Routes>
  )
}

export default App
