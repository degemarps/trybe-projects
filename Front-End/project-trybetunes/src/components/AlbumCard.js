import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { image, albumName, artistName, albumId } = this.props;
    const linkAlbum = `/album/${albumId}`;
    return (
      <Link
        data-testid={ `link-to-album-${albumId}` }
        to={ linkAlbum }
        state={ artistName }
      >
        <div>
          <img src={ image } alt={ albumName } />
          <p>{ albumName }</p>
          <p>{ artistName }</p>
        </div>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  image: propTypes.string.isRequired,
  albumName: propTypes.string.isRequired,
  artistName: propTypes.string.isRequired,
  albumId: propTypes.number.isRequired,
};

export default AlbumCard;
