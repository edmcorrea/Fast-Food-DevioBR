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
  const [categorie, setCategorie] = useState("Burguers");

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
    categorie,
    setCategorie,
    handleSelect,
  }), [
    query,
    summaryList,
    productsList,
    sucessNewCustomer,
    productDetailsId,
    categorie,
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