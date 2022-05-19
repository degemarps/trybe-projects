import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Thumb({ title, thumb }) {
  return (
    <Container>
      <img width="100%" data-testid="recipe-photo" alt={ title } src={ `${thumb}` } />
    </Container>
  );
}

Thumb.propTypes = {
  title: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
