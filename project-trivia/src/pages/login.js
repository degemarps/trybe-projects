import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveToken, saveLogin } from '../redux/actions';

class login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      // score: 0,
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value }, () => {
      const { userName, userEmail } = this.state;
      if (userName.length > 0 && userEmail.length > 0) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    });
  }

  async handleSubmit() {
    const { saveUserToken, saveUserLogin, history } = this.props;
    const { userName, userEmail } = this.state;
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    const { token } = data;
    saveUserToken(token);
    saveUserLogin({ userName, userEmail });
    localStorage.setItem('token', token);
    history.push('/game');
  }

  render() {
    localStorage.setItem('actualScore', 0);
    const { userName, userEmail, isDisabled } = this.state;
    return (
      <div>
        login
        <form>
          <input
            name="userEmail"
            value={ userEmail }
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
          <input
            name="userName"
            value={ userName }
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
          <button
            type="button"
            disabled={ isDisabled }
            data-testid="btn-play"
            onClick={ this.handleSubmit }
          >
            jogar
          </button>
        </form>
        <button
          type="button"
          // disabled={ isDisabled }
          data-testid="btn-settings"
          onClick={ () => {
            const { history } = this.props;
            history.push('/settings');
          } }
        >
          Settings
        </button>
      </div>
    );
  }
}

login.propTypes = {
  saveUserToken: PropTypes.func.isRequired,
  saveUserLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserToken: (value) => dispatch(saveToken(value)),
  saveUserLogin: (value) => dispatch(saveLogin(value)),
  // saveUserScore: (value) => dispatch(saveScore(value)),
});

export default connect(null, mapDispatchToProps)(login);
