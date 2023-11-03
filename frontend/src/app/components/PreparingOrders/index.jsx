import { PropTypes } from "prop-types";
import CustomerDetails from '../CustomerDetails';

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