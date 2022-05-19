import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Video({ video }) {
  const generateEmbedCode = () => {
    if (video) {
      return video.split('=')[1];
    }
  };

  return (
    <Container>
      <h4>Vídeo</h4>
      <section>
        <iframe
          data-testid="video"
          width="100%"
          title="Video"
          src={ `https://www.youtube.com/embed/${generateEmbedCode()}?autoplay=0&mute=1` }
        />
      </section>
      <br />
    </Container>
  );
}

Video.propTypes = {
  video: PropTypes.string,
}.isRequired;
