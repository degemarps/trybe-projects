import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../pages/Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

// Os requisitos 9 e 11 foram bom complicados para eu conseguir completá-los
// Anaisando o PR do colega Ruy Barbosa Jr e entendo a lógica que ele utilizou para cumprir os requisitos, consegui trazê-la pra o meu código e implementar
// Percebi que estava gerando apenas um componente no React para todas as músicas, além disso, o estado que utilzei para armazenar os checkeds de cada checkbox não era a maneira mais correta
// Precisei refatorar boa parte do código fonte do MusicCard e da página do Album, de maneira que gerasse diferentes componetes para cada música
// E assim poder criar um conjunto de estados específico para cada componente de cada música

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      isChecked: false,
    };

    this.onChecked = this.onChecked.bind(this);
    this.recoverFavoriteSongs = this.recoverFavoriteSongs.bind(this);
    this.saveTrack = this.saveTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  componentDidMount() {
    this.recoverFavoriteSongs();
  }

  // Função que implementa toda a lógica para salvar a música favoritada e também removêla
  onChecked(music) {
    const { isChecked } = this.state;
    if (isChecked) {
      this.setState({ loading: true }, () => this.removeTrack(music));
    } else {
      this.setState({ loading: true }, () => this.saveTrack(music));
    }
  }

  async saveTrack(music) {
    await addSong(music);
    this.setState({ loading: false, isChecked: true });
  }

  async removeTrack(music) {
    const { updateFavoriteSongs } = this.props;
    await removeSong(music);
    this.setState({ loading: false, isChecked: false }, () => {
      if (updateFavoriteSongs) updateFavoriteSongs(music.trackId);
    });
  }

  // Recuperar as músicas favoritadas e marcar os checkbox
  async recoverFavoriteSongs() {
    const { trackId } = this.props;
    const favoriteTracks = await getFavoriteSongs();
    this.setState({ isChecked: favoriteTracks.some(({ trackId: id }) => id
      === trackId) });
  }

  render() {
    const { trackId, previewUrl, trackName, music } = this.props;
    const { loading, isChecked } = this.state;
    return loading ? <Loading loading={ loading } /> : (
      <li key={ trackId }>
        { trackName }
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            type="checkbox"
            name={ trackId }
            id={ trackId }
            checked={ isChecked }
            onChange={ () => this.onChecked(music) }
            data-testid={ `checkbox-music-${trackId}` }
          />
        </label>
      </li>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ])).isRequired,
  updateFavoriteSongs: PropTypes.func,
};

MusicCard.defaultProps = {
  updateFavoriteSongs: null,
};

export default MusicCard;
