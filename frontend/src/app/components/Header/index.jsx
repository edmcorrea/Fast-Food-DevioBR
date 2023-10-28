import { Link } from 'react-router-dom';
// import 't Orders.css'

function Header() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-fast-food-logo-design-use-to-your-business-png-image_6578591.png" className="logo react" alt="React logo" />
        </a>
        <Link to="/">Pedidos</Link>
        <Link to="/kitchen">Cozinha</Link>
        <Link to="/status">Retirada</Link>

      </div>
    </>
  )
}

export default Header
