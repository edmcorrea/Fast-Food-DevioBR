import { useEffect, useState } from 'react';
import { customerMock } from '../../services/customers.mock';
import { PropTypes } from "prop-types";

import { requestGetCustomers, requestPutCustomer, requestRemoveCustomer } from '../../services/requests/request.customer';
// import 't Orders.css'

function CustomerDetails({statusOrder, router}) {
  const [filterCustomers, setFilterCustomers] = useState([]);

  const reqGetCustomers = async () => {
    let customers = [];
    try {
      customers = await requestGetCustomers('/customer');
    } catch (error) {
      customers = customerMock; 
    }
    const filteredByStatus = await customers.filter((customer) => (customer.status === statusOrder));
    setFilterCustomers(filteredByStatus);
  };

  useEffect(() => {
    reqGetCustomers()
  }, []);

  const handleSubmit = async (id, action) => {
    let Data = filterCustomers.find((customer) => customer.codCustomer == id);

    Data.status = "Completed";
    console.log(Data);
    try {
      if(action === "remove") {
        await requestRemoveCustomer(`/customer/${id}`);
      } 
      if (action === "update") {
        await requestPutCustomer(`/customer/${id}`, Data);
      }
      window.location.reload();

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
                  <p>{`${order.quantity}x`}</p>
                  <p>{order.observation}</p>
                </section>
              ))}

              <button onClick={() => handleSubmit(customer.codCustomer, "remove")}> X </button>
              {statusOrder === "Preparing" && (
                <button onClick={() => handleSubmit(customer.codCustomer, "update")}> V </button>
              )}
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