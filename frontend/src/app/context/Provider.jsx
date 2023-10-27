import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);

  const context = useMemo(() => ({
    setQuery,
    query,
    setSearchList,
    searchList,
  }), [
    query,
    searchList,
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