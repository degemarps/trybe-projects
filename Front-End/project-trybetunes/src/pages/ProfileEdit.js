import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: false,
      btnDisabled: true,
    };

    this.getUserInformations = this.getUserInformations.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getUserInformations();
  }

  // Função para lidar com os inputs do formulário
  onChangeHandler(event) {
    const { name, email, image, description } = this.state;
    const nameEvent = event.target.name;
    if (nameEvent === 'name') {
      this.setState({ name: event.target.value });
    } else if (nameEvent === 'email') {
      this.setState({ email: event.target.value });
    } else if (nameEvent === 'description') {
      this.setState({ description: event.target.value });
    } else if (nameEvent === 'image') {
      this.setState({ image: event.target.value });
    }
    if (name !== '' && email !== '' && description !== '' && image !== '') {
      this.setState({ btnDisabled: false });
    }
  }

  // Função para o botão de submit
  async onSubmit() {
    const { name, email, description, image } = this.state;
    const user = {
      name,
      email,
      image,
      description,
    };
    const { history } = this.props;
    this.setState({ loading: true });
    await updateUser(user);
    history.push('/profile');
  }

  // Busca as informações do usuário e salva no estado
  async getUserInformations() {
    this.setState({ loading: true });
    const dataReceived = await getUser();
    const user = { ...dataReceived };
    this.setState({
      name: user.name,
      email: user.email,
      image: user.image,
      description: user.description,
      loading: false,
    });
  }

  render() {
    const { name, email, description, image, loading, btnDisabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h3>ProfileEdit</h3>
        { loading ? <Loading loading={ loading } /> : (
          <form>
            <label htmlFor="name">
              nome
              <input
                data-testid="edit-input-name"
                onChange={ this.onChangeHandler }
                value={ name }
                name="name"
                type="text"
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                data-testid="edit-input-email"
                onChange={ this.onChangeHandler }
                value={ email }
                name="email"
                type="email"
              />
            </label>
            <label htmlFor="description">
              Descrição
              <textarea
                data-testid="edit-input-description"
                onChange={ this.onChangeHandler }
                value={ description }
                name="description"
              />
            </label>
            <label htmlFor="image">
              Foto
              <input
                data-testid="edit-input-image"
                onChange={ this.onChangeHandler }
                value={ image }
                name="image"
                type="text"
              />
            </label>
            <button
              data-testid="edit-button-save"
              onClick={ this.onSubmit }
              disabled={ btnDisabled }
              type="button"
            >
              Salvar
            </button>
          </form>
        ) }
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileEdit;
