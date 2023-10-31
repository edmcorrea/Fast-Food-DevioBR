import { useEffect, useState } from 'react';
import { customerMock } from '../../services/customers.mock';
import { PropTypes } from "prop-types";

import { requestGetCustomers, requestRemoveCustomer } from '../../services/requests/request.customer';
// import 't Orders.css'

function CustomerDetails({statusOrder, router}) {
  const [filterCustomers, setFilterCustomers] = useState([]);

  const reqGetCustomers = async () => {
    let customers = [];
    customers = await requestGetCustomers('/customer');
    if(!customers.length) {
      customers = customerMock;
    }

    const filteredByStatus = await customers.filter((customer) => (customer.status === statusOrder));
    setFilterCustomers(filteredByStatus);
  };

  useEffect(() => {
    reqGetCustomers()
  }, []);

  const handleSubmit = async (id, action) => {

    try {
      if(action === "remove") {
        await requestRemoveCustomer(`/customer/${id}`);
        window.location.reload();
      }

    } catch (error) {
      const { response: { data: { message } } } = error;
      console.log(message);
      // setError({ bool: true, message });
      // setTimeout(() => setError({ bool: false, message: '' }), DEFAULT_DELAY);
    }
  };
  
  return (
    <div>
      {statusOrder === "Preparing" ? <h2>Preparando</h2> : <h2>Pronto</h2>}
      {filterCustomers.map((customer,idxx) => (
        <div key={idxx}>

          {router === "kitchen" && (
            <div>
              <p>{customer.codCustomer}</p>
            </div>
          )}

          <p>{customer.customerName}</p>

          {router === "kitchen" && customer.products && customer.products.length > 0 && (
            <div>{customer.products
              .map((order, idx) => (
                <section key={idx}>
                  <p>{order.name}</p>
                  <p>{order.quantity}</p>
                  <p>{order.observation}</p>
                </section>
              ))}
              <button onClick={() => handleSubmit(customer.codCustomer, "remove")}> X </button>
              <button> V </button>
            </div>
          )}

        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      ))}
    </div>
  )
}


export default CustomerDetails

CustomerDetails.propTypes = {
  router: PropTypes.string,
  statusOrder: PropTypes.string,
};