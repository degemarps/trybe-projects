import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { Container, Button, Image } from 'react-bootstrap';
import shareIcon from '../../images/shareIcon.svg';

export default function ShareButton({ type, id, index }) {
  const [validator, setValidator] = useState(false);

  const shareBtn = () => {
    const sec = 3000;
    copy(`http://localhost:3000/${type}/${id}`);
    setValidator(true);
    setTimeout(() => setValidator(false), sec);
  };

  const buttonImage = () => {
    if (validator) {
      return (<span variant="primary">Link copied!</span>);
    }
    return (<Image data-testid={ `${index}-horizontal-share-btn` } src={ shareIcon } />);
  };

  return (
    <Container>
      <Button
        variant="outline-primary"
        type="button"
        onClick={ shareBtn }
        data-testid="share-btn"
        src={ shareIcon }
      >
        { buttonImage() }
      </Button>
    </Container>
  );
}

ShareButton.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.string,
}.isRequired;
