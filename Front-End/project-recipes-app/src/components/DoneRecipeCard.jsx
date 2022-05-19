/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ShareButton from './Details/ShareButton';

export default function DoneRecipeCard(
  { recipe, index, updateCards, setUpdateCards, page },
) {
  const history = useHistory();

  useEffect(() => {
    console.log(recipe.type);
  }, []);

  const generateTitle = () => {
    switch (recipe.type) {
    case 'food':
      return (
        <h5 data-testid={ `${index}-horizontal-top-text` }>
          { `${recipe.nationality} - ${recipe.category}` }
        </h5>
      );
    case 'drink':
      return (
        <h5 data-testid={ `${index}-horizontal-top-text` }>
          {`${recipe.alcoholicOrNot}`}
        </h5>
      );
    default:
      break;
    }
  };

  const onClickRecipe = () => {
    const route = `${recipe.type}s/${recipe.id}`;
    history.push(route);
  };

  const generateTags = () => {
    switch (recipe.type) {
    case 'food':
      return (
        <span>
          {recipe.tags && recipe.tags.reverse().map(
            (tag) => (
              <span
                key={ tag }
                className="recipe-tag"
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ),
          )}
        </span>
      );
    default:
      break;
    }
  };

  const createActionButton = () => {
    switch (page) {
    case 'shareButton':
      return (
        <td>
          <ShareButton
            index={ index }
            id={ recipe.id }
            type={ recipe.type }
          />
        </td>
      );
    case 'done':
      return (
        <td>
          <span data-testid={ `${index}-horizontal-done-date` }>
            Feita em:
            {' '}
            {recipe.doneDate}
          </span>
          <br />
          { generateTags() }
          <ShareButton
            index={ index }
            id={ recipe.id }
            type={ recipe.type === 'food' ? 'foods' : 'drinks' }
            updateCards={ updateCards }
            setUpdateCards={ setUpdateCards }
            data={ `data-testid="${index}-horizontal-share-btn"` }
          />
        </td>
      );
    default:
      break;
    }
  };

  const generateFavoriteTable = () => (
    <table>
      <tbody>
        <tr>
          <td rowSpan="4">
            <img
              role="presentation"
              onClick={ onClickRecipe }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe.name }
              src={ recipe.image }
              width="60%"
            />
          </td>
        </tr>
        <tr>
          <td>{ generateTitle() }</td>
        </tr>
        <tr>
          <td>
            <h5
              role="presentation"
              onClick={ onClickRecipe }
              data-testid={ `${index}-horizontal-name` }
            >
              { recipe.name }
            </h5>
          </td>
        </tr>
        <tr>{ createActionButton() }</tr>
      </tbody>
    </table>
  );

  return (
    <Card>
      { generateFavoriteTable() }
    </Card>
  );
}

DoneRecipeCard.propTypes = {
  favorite: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    nationality: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }),
  updateCards: PropTypes.bool,
  setUpdateCards: PropTypes.func,
  index: PropTypes.number,
}.isRequired;
