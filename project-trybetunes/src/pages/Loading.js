import propTypes from 'prop-types';
import React from 'react';

class Loading extends React.Component {
  render() {
    const { loading } = this.props;
    const loadingElement = <span>Carregando...</span>;
    return (
      <h2>{ loading ? loadingElement : <span /> }</h2>
    );
  }
}

Loading.propTypes = {
  loading: propTypes.bool.isRequired,
};

export default Loading;
