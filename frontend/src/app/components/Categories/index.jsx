import './Categories.scss'
import { useContext } from "react";
import Context from "../../context/Context";
import { categoriesMock } from "../../services/categories.mock"

function Categories() {
  const { categorie, setCategorie } = useContext(Context);


  return (
    <div className='categories'>
      <section className='categories-texts'>
        <h3>Categorias</h3>
        <p>Navegue por categoria</p>
      </section>
      <section className='categories-btns'>
      {categoriesMock.map((element) => (
        <button
          key={element.name}
          className={`categories-btns-btn${categorie == element.name ? '-selected' : ''}`}
          onClick={() => setCategorie(element.name)}
        >
          <img src={element.img}
            className="categories-img"
            alt={element.name}
            />
          <p>{element.name}</p>
        </button>
      ))}
      </section>
    </div>
  )
}

export default Categories
