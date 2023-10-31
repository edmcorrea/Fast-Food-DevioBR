import './Categories.scss'
import { categoriesMock } from "../../services/categories.mock"

function Categories() {

  return (
    <div className='categories'>
      <section className='categories-texts'>
        <h3>Categorias</h3>
        <p>Navegue por categoria</p>
      </section>
      <section className='categories-btns'>
      {categoriesMock.map((element) => (
        <button key={element.name} className='categories-btns-btn'>
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
