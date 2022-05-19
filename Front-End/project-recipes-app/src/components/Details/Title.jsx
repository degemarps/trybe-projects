import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

export default function Title({ title, subtitle, actualRecipe, type, id }) {
  return (
    <Container>
      <h1 width="360" data-testid="recipe-title"><strong>{ title }</strong></h1>
      <section>
        <ShareButton type={ type } id={ id } data='data-testid="share-btn"' />
        <FavoriteButton recipe={ actualRecipe } />
      </section>
      <h2 data-testid="recipe-category"><i>{ subtitle }</i></h2>
      <br />
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  recipe: PropTypes.shape(),
}.isRequired;
