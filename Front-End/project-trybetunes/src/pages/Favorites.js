import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      favoriteSongs: [],
      loading: false,
    };

    this.recoverFavoriteSongs = this.recoverFavoriteSongs.bind(this);
    this.updateFavoriteSongs = this.updateFavoriteSongs.bind(this);
  }

  componentDidMount() {
    this.recoverFavoriteSongs();
  }

  async recoverFavoriteSongs() {
    this.setState({ loading: true });
    this.setState({ favoriteSongs: await getFavoriteSongs(), loading: false });
  }

  updateFavoriteSongs(songId) {
    const { favoriteSongs } = this.state;
    const songsAtt = favoriteSongs.filter((song) => song.trackId !== songId);
    this.setState({ favoriteSongs: songsAtt });
  }

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <h2>Favorites</h2>
        <ul>
          { loading ? <Loading loading={ loading } /> : favoriteSongs.map((song) => (
            <MusicCard
              key={ song.trackId }
              trackId={ song.trackId }
              previewUrl={ song.previewUrl }
              trackName={ song.trackName }
              music={ song }
              updateFavoriteSongs={ this.updateFavoriteSongs }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;
