import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default function Ingredients({ ingredients }) {
  return (
    <Container>
      <h3> Ingredients </h3>
      <table width="100%">
        <tbody>
          {
            ingredients && ingredients.map(({ ingredient, measure }, index) => (
              <tr key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                <td>◦</td>
                <td>{ }</td>
                <td>{ ingredient }</td>
                <td align="right">{ measure }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />
    </Container>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.array,
}.isRequired;
