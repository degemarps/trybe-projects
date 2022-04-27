import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import AlbumCard from '../components/AlbumCard';

const MIN_CHAR = 1;
class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      buttonDisabled: true,
      albums: [],
      loading: false,
      canRender: false,
      phrase: '',
    };
    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onHandlerClick = this.onHandlerClick.bind(this);
  }

  onHandlerChange(event) {
    const { artistName } = this.state;
    this.setState({ artistName: event.target.value });

    if (artistName.length >= MIN_CHAR) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  async onHandlerClick() {
    const { artistName } = this.state;
    let artist = artistName;
    this.setState({ artistName: '' });
    this.setState({ loading: true });
    const albumsRec = await searchAlbumsAPI(artist);
    if (albumsRec.length === 0) {
      this.setState({ albums: albumsRec });
      this.setState({
        loading: false,
        canRender: true,
        phrase: (
          <h2>
            Nenhum álbum foi encontrado
          </h2>
        ),
      });
    } else {
      artist = ` ${artist}`;
      this.setState({ albums: albumsRec });
      this.setState({
        loading: false,
        canRender: true,
        phrase: (
          <h2>
            Resultado de álbuns de:
            { artist }
          </h2>
        ),
      });
    }
  }

  render() {
    const { artistName, buttonDisabled, albums, loading, canRender, phrase } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <p>Search</p>
        <form>
          <input
            type="text"
            name="artist"
            value={ artistName }
            onChange={ this.onHandlerChange }
            data-testid="search-artist-input"
          />
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ this.onHandlerClick }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
        <section>
          { phrase }
          { canRender
            ? albums.map((album) => (
              <li key={ album.collectionId }>
                <AlbumCard
                  image={ album.artworkUrl100 }
                  albumName={ album.collectionName }
                  artistName={ album.artistName }
                  albumId={ album.collectionId }
                />
              </li>
            ))
            : <Loading loading={ loading } /> }
        </section>
      </div>
    );
  }
}

export default Search;
