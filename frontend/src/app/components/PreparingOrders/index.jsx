import { useEffect, useState } from 'react';
import { customerMock } from '../../services/customers.mock';
// import 't Orders.css'

function PreparingOrders() {
  const [filterCustomers, setFilterCustomers] = useState([]);

  useEffect(()=> {
    const filteredByStatus = customerMock.filter((customer) => (customer.status === "Preparing"))
    setFilterCustomers(filteredByStatus);
  }, [])

  return (
    <>
      {filterCustomers.map((customer) => (
        <div key={customer.id}>
          <p>{customer.customerName}</p>
        </div>
      ))}
    </>
  )
}

export default PreparingOrders
