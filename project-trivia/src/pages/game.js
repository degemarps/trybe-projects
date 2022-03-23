import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { saveToken } from '../redux/actions';
import Question from '../components/Question';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      currentQuest: 0,
      timer: 30,
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.disableQuestion = this.disableQuestion.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.setTimer();
  }

  getQuestions = async () => {
    const { saveUserToken } = this.props;
    // const scoreStorage = localStorage.getItem('actualScore');
    // const score = JSON.parse(scoreStorage);
    // saveUserLogin(score);
    const { token } = this.props;
    const RESPONSE_CODE = 3;
    const questions = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const questionsResponse = await questions.json();
    if (questionsResponse.response_code !== RESPONSE_CODE) {
      this.setState({ questions: questionsResponse.results });
    } else {
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const data = await response.json();
      saveUserToken(data.token);
      localStorage.setItem('token', token);
      this.getQuestions();
    }
  }

  setTimer() {
    const INTERVAL_TIME = 1000;
    this.countTimer = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, INTERVAL_TIME);
  }

  updateQuestion() {
    this.setState((prevState) => ({
      currentQuest: prevState.currentQuest + 1,
      timer: 30,
    }));
    this.setTimer();
  }

  resetTimer() {
    this.setState({ timer: 0 });
  }

  disableQuestion() {
    const { timer } = this.state;

    if (timer <= 0) {
      clearInterval(this.countTimer);
      return true;
    }

    return false;
  }

  render() {
    const { questions, currentQuest, timer } = this.state;
    const actualObject = questions[currentQuest];
    const score = localStorage.getItem('actualScore');
    const scoreValue = JSON.parse(score);
    const scoreSum = scoreValue;
    //   .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // console.log(score);
    return (
      <div>
        <Header score={ scoreSum } />
        <h2>Game</h2>
        { timer }
        { questions.length > 0 ? <Question
          { ...actualObject }
          timer={ timer }
          updateQuestion={ this.updateQuestion }
          disableQuestion={ this.disableQuestion() }
          resetTimer={ this.resetTimer }
          currentQuest={ currentQuest }
        /> : null }
      </div>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  saveUserToken: PropTypes.func.isRequired,
  // saveUserLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveUserToken: (value) => dispatch(saveToken(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
