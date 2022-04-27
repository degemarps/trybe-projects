import React, { useContext, useEffect, useState } from 'react';
import StarContext from '../context/StarContext';

function MainPage() {
  const {
    data,
    newData,
    setNewData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    getPlanets,
  } = useContext(StarContext);

  const [filter, setFilter] = useState(false);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [columnsList, setColumnList] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];

  const obj = {
    column: '',
    comparison: '',
    value: 0,
  };

  useEffect(() => {
    getPlanets();
  }, []);

  // Comparação com os valores numéricos
  useEffect(() => {
    if (value !== 0) {
      const newColumns = columns.filter((item) => item !== column);
      setColumnList([...newColumns]);
      obj.column = column;
      obj.comparison = comparison;
      obj.value = value;
      setFilterByNumericValues([...filterByNumericValues, obj]);
    }
    if (comparison === 'maior que' && value !== '') {
      const resultFilter = newData.filter((planet) => planet[column] > Number(value));
      setNewData(resultFilter);
    } else if (comparison === 'menor que' && value !== '') {
      const resultFilter = newData.filter((planet) => planet[column] < Number(value));
      setNewData(resultFilter);
    } else if (comparison === 'igual a' && value !== '') {
      const resultFilter = newData
        .filter((planet) => Number(planet[column]) === Number(value));
      setNewData(resultFilter);
    } else {
      setNewData(data);
    }
  }, [filter]);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
      />
      <label htmlFor="column-filter">
        Coluna
        <select
          data-testid="column-filter"
          id="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          { columnsList.map((item) => (<option key={ item }>{ item }</option>)) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        onClick={ () => (filter ? setFilter(false) : setFilter(true)) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <button type="button" data-testid="button-remove-filters">Remover Filtros</button>
      {filterByNumericValues ? filterByNumericValues.map((item) => (
        <div key={ item.column } data-testid="filter">
          <span>{ `${item.column} ${item.comparison} ${item.value}` }</span>
          <button type="button">
            X
          </button>
        </div>
      )) : null}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          { newData
            ? newData.filter((planet) => planet.name.includes(filterByName.name))
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              )) : null }
        </tbody>
      </table>
    </section>
  );
}

export default MainPage;
