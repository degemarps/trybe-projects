import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

const MIN_CHAR = 2;
class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nameUser: '',
      buttonDisabled: true,
      loading: false,
      canRedirect: false,
    };
    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onHandlerClick = this.onHandlerClick.bind(this);
  }

  onHandlerChange(event) {
    const { nameUser } = this.state;
    this.setState({ nameUser: event.target.value });

    if (nameUser.length >= MIN_CHAR) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  async onHandlerClick() {
    const { nameUser } = this.state;
    this.setState({ loading: true });
    await createUser({ name: nameUser });
    this.setState({ loading: false });
    this.setState({ canRedirect: true });
  }

  render() {
    const { nameUser, buttonDisabled, loading, canRedirect } = this.state;
    return (
      <div data-testid="page-login">
        <h2>Login</h2>
        <form>
          <label htmlFor="name">
            <input
              name="name"
              onChange={ this.onHandlerChange }
              value={ nameUser }
              data-testid="login-name-input"
            />
          </label>
          <button
            type="button"
            onClick={ this.onHandlerClick }
            data-testid="login-submit-button"
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </form>
        { canRedirect ? <Redirect to="/search" /> : <Loading loading={ loading } /> }
      </div>
    );
  }
}

export default Login;
