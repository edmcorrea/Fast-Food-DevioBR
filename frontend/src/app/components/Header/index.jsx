// import { useState } from 'react'
import reactLogo from '../../../assets/react.svg'
// import viteLogo from '/vite.svg'
// import 't Orders.css'

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Pedidos</h2>
        <h2>Cozinha</h2>
        <h2>Retirada</h2>

      </div>
    </>
  )
}

export default Header
