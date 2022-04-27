import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, score, gravatarEmail } = this.props;
    const imgUrl = md5(gravatarEmail).toString();
    return (
      <header>
        <h1>Header</h1>
        <h3 data-testid="header-player-name">{ name }</h3>
        <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${imgUrl}` } alt="profile" />
        <p data-testid="header-score">
          { score }
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    name: state.playerReducer.name,
    gravatarEmail: state.playerReducer.gravatarEmail,
    score: state.player.score,
  }
);

export default connect(mapStateToProps)(Header);
