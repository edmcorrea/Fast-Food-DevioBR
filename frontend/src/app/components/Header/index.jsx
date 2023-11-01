import { Link } from 'react-router-dom';
import './Header.scss';
import burguers from "../../../assets/burguers.png";
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='header'>
        <img src={burguers} className="header-img" alt="burguer" />
        
        <div className='header-links'>
          <Link to="/">Pedidos</Link>
          <Link to="/kitchen">Cozinha</Link>
          <Link to="/status">Retirada</Link>
        </div>

        <button 
          className='header-hamburguer'
          onClick={() => {setShowMenu(!showMenu)}}
        >
          <BiMenu className='header-hamburguer-img'/>
        </button>

        {showMenu && 
          <div className='header-showLinks'>
            <Link to="/">Pedidos</Link>
            <Link to="/kitchen">Cozinha</Link>
            <Link to="/status">Retirada</Link>
          </div>
        }

      </div>
    </>
  )
}

export default Header
