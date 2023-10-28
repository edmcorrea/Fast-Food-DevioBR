import { useEffect, useState } from 'react';
import { customerMock } from '../../services/customers.mock';
import { PropTypes } from "prop-types";
import { productsMock } from '../../services/products.mock';
// import 't Orders.css'

function CustomerDetails({statusOrder, router}) {
  const [filterCustomers, setFilterCustomers] = useState([]);

  useEffect(()=> {
    const filteredByStatus = customerMock.filter((customer) => (customer.status === statusOrder))
    setFilterCustomers(filteredByStatus);
  }, [])

 

  return (
    <>
      {filterCustomers.map((customer) => (
        <div key={customer.id}>
          {router === "kitchen" && (
            <div>
              <p>{customer.id}</p>
            </div>
          )}
          <p>{customer.customerName}</p>
          {router === "kitchen" && (
            <div>{customer.productId
              .map((id) => ( productsMock
                .filter((product) => product.id === id)
                .map((prodFiltered, idx) => (
                  <p key={idx}>{prodFiltered.name}</p>
                ))
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}


export default CustomerDetails

CustomerDetails.propTypes = {
  router: PropTypes.string,
  statusOrder: PropTypes.string,
};