import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [summaryList, setSummaryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [sucessNewCustomer, setSucessNewCustomer] = useState(false);


  const context = useMemo(() => ({
    query,
    setQuery,
    summaryList,
    setSummaryList,
    productsList,
    setProductsList,
    sucessNewCustomer,
    setSucessNewCustomer,
  }), [
    query,
    summaryList,
    productsList,
    sucessNewCustomer,
  ]);

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}
export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;