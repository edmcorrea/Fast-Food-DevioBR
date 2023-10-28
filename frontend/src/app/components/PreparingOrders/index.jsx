import { PropTypes } from "prop-types";
import CustomerDetails from '../CustomerDetails';
// import 't Orders.css'

function PreparingOrders({router}) {

  return (
    <>
      < CustomerDetails
        router={router}
        statusOrder = "Preparing"
      />
    </>
  )
}


export default PreparingOrders

PreparingOrders.propTypes = {
  router: PropTypes.string,
};