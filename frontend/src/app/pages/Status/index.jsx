import reactLogo from '../../../assets/react.svg'
import Header from '../../components/Header'
// import 't Orders.css'

function Status() {

  return (
    <>
      <Header />
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default Status
