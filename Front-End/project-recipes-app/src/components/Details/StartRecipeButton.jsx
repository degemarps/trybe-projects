import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function StartRecipeButton({ id }) {
  const history = useHistory();
  const clickBtn = () => {
    history.push(`/foods/${id}/in-progress`);
  };

  return (
    <button
      className="start-recipe"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ clickBtn }
    >
      Start Recipe
    </button>
  );
}

StartRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
};
