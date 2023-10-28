import { PropTypes } from "prop-types";
import CustomerDetails from '../CustomerDetails';
// import 't Orders.css'

function CompletedOrders({router}) {

  return (
    <>
      < CustomerDetails
        router={router}
        statusOrder = "Completed"
      />
    </>
  )
}

export default CompletedOrders

CompletedOrders.propTypes = {
  router: PropTypes.string,
};

