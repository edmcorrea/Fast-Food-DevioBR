import { PropTypes } from "prop-types";
import CustomerDetails from '../CustomerDetails';

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

