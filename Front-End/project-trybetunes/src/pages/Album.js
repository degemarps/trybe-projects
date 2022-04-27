import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      musicList: [],
      artistName: '',
      albumName: '',
    };
  }

  componentDidMount() {
    this.getMusicList();
  }

  async getMusicList() {
    const { match } = this.props;
    const musics = await getMusics(match.params.id);
    this.setState({
      musicList: musics,
      artistName: musics[0].artistName,
      albumName: musics[0].collectionName,
    });
  }

  render() {
    const { musicList, artistName, albumName } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <h2 data-testid="artist-name">{ artistName }</h2>
          <h2 data-testid="album-name">{ albumName }</h2>
          <ul>
            { musicList.map((music) => {
              if (musicList.indexOf(music) !== 0) {
                return (
                  <MusicCard
                    trackId={ music.trackId }
                    previewUrl={ music.previewUrl }
                    trackName={ music.trackName }
                    music={ music }
                  />);
              }
              return null;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Album;
