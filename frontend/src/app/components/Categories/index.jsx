// import 't Orders.css'
import { categoriesMock } from "../../services/categories.mock"

function Categories() {

  return (
    <>
      <h2>Categorias</h2>
      <p>Navegue por categoria</p>
      {categoriesMock.map((element) => (
        <div key={element.name}>
          <img src={element.img}
            className="img"
            alt={element.name}
          />
          <p>{element.name}</p>
        </div>
      ))}
    </>
  )
}

export default Categories
