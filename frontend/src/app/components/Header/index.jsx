import { Link } from 'react-router-dom';
import './Header.scss';
import burguers from "../../../assets/burguers.png"

function Header() {

  return (
    <>
      <div className='header'>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={burguers} className="logo react" alt="React logo" />
        </a>
        <div className='header-links'>
          <Link to="/">Pedidos</Link>
          <Link to="/kitchen">Cozinha</Link>
          <Link to="/status">Retirada</Link>
        </div>

      </div>
    </>
  )
}

export default Header
