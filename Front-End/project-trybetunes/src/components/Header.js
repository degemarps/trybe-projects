import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: false,
      canRender: false,
    };
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({ userName: user.name });
    this.setState({ loading: false });
    this.setState({ canRender: true });
  }

  render() {
    const { userName, loading, canRender } = this.state;
    return (
      <header data-testid="header-component">
        { canRender
          ? <h2 data-testid="header-user-name">{ userName }</h2>
          : <Loading loading={ loading } /> }
        <Link data-testid="link-to-search" to="/search">Search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
        <Link data-testid="link-to-profile" to="/profile">Profile</Link>
      </header>
    );
  }
}

export default Header;
