import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import Context from './Context';
import { getSummaryListLocalStorage } from '../services/getAndSetLocalStorage';

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [summaryList, setSummaryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [sucessNewCustomer, setSucessNewCustomer] = useState(false);
  const [productDetailsId, setProductDetailsId] = useState(0);

  useEffect(() => {
    setSummaryList(getSummaryListLocalStorage() || []);
  }, []);

  const handleSelect = (id) => {
    if(!id) {
      setProductDetailsId(0);
    }
    else {
      setProductDetailsId(id);
    }
  }


  const context = useMemo(() => ({
    query,
    setQuery,
    summaryList,
    setSummaryList,
    productsList,
    setProductsList,
    sucessNewCustomer,
    setSucessNewCustomer,
    productDetailsId,
    setProductDetailsId,
    handleSelect,
  }), [
    query,
    summaryList,
    productsList,
    sucessNewCustomer,
    productDetailsId,
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