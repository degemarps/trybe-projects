import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login as loginAction } from '../actions';

const MIN_EMAIL_LENGTH = 5;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    const { email, password } = this.state;
    const { target } = event;
    this.setState({ [target.name]: target.value });

    if (email.includes('@')
      && email.includes('.com')
      && password.length >= MIN_EMAIL_LENGTH) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  onHandleSubmit() {
    const { email } = this.state;
    const { login, history } = this.props;
    login({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              name="email"
              value={ email }
              type="email"
              onChange={ this.onHandleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              name="password"
              value={ password }
              type="password"
              onChange={ this.onHandleChange }
              data-testid="password-input"
            />
          </label>
          <button
            disabled={ isDisabled }
            type="button"
            onClick={ this.onHandleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (value) => dispatch(loginAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
