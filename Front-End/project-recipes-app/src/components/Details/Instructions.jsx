import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Instructions({ instructions }) {
  return (
    <Container>
      <h3>Instructions</h3>
      <p data-testid="instructions">{instructions}</p>
      <br />
    </Container>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string,
}.isRequired;
