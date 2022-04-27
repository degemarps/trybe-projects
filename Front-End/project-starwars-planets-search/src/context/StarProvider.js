import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services/fetchPlanets';

function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const getPlanets = async () => {
    try {
      const results = await fetchPlanets();
      setData(results);
      setNewData(results);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <StarContext.Provider
      value={
        {
          data,
          newData,
          setNewData,
          error,
          filterByName,
          setFilterByName,
          getPlanets,
          filterByNumericValues,
          setFilterByNumericValues }
      }
    >
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
