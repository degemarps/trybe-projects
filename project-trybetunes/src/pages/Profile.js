import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: false,
    };

    this.getUserInformations = this.getUserInformations.bind(this);
  }

  componentDidMount() {
    this.getUserInformations();
  }

  // Busca as informações do usuário e salva no estado
  async getUserInformations() {
    this.setState({
      loading: true,
      user: await getUser(),
    }, () => this.setState({ loading: false }));
  }

  render() {
    const { user, loading } = this.state;
    return (
      <section data-testid="page-profile">
        <Header />
        <h2>Profile</h2>
        { loading ? <Loading loading={ loading } />
          : (
            <div>
              <img data-testid="profile-image" src={ user.image } alt={ user.name } />
              <h3>Nome</h3>
              <p>{ user.name }</p>
              <h3>E-mail</h3>
              <p>{ user.email }</p>
              <h3>Descrição</h3>
              <p>{ user.description }</p>
              <Link to="/profile/edit"><button type="button">Editar perfil</button></Link>
            </div>
          )}
      </section>
    );
  }
}

export default Profile;
