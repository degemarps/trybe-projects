import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { assertations } = this.props;
    // const { feedbackText } = this.props;
    const generateMessage = () => {
      const NUM_ASSERT = 3;

      if (assertations < NUM_ASSERT) {
        return (<span data-testid="feedback-text">Could be better...</span>);
      }
      return (<span data-testid="feedback-text">Well Done!</span>);
    };

    return (
      <div>
        <Header />
        {generateMessage()}
        {/* <h2 data-testid="feedback-text">feedback</h2> */}
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => {
            const { history } = this.props;
            history.push('/');
          } }
        >
          Play Again
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => {
            const { history } = this.props;
            history.push('/ranking');
          } }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertations: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // feedbackText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assertations: state.assertationReducer.assertions,
});

// export default Feedback;
export default connect(mapStateToProps)(Feedback);
