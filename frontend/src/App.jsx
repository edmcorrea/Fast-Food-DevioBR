import { Route, Routes } from 'react-router-dom';
import './App.css'
import Orders from './app/pages/Orders';
import Kitchen from './app/pages/Kitchen'
import Status from './app/pages/Status'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path="/" element={ <Orders /> } />
      <Route exact path="/kitchen" element={ <Kitchen /> } />
      <Route exact path="/status" element={ <Status /> } />
    </Routes>
  )
}

export default App
