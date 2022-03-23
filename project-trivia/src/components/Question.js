import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveScore, saveAssertation } from '../redux/actions';

const TO_RANDOM = 0.5;

class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      object: {},
      questions: [],
      correctButton: 'button1',
      wrongButton: 'button2',
      actualDificulty: 0,
      actualScore: 0,
      redirect: false,
      assertation: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.getScore();
  }

  getScore = () => {
    const pontuation = localStorage.getItem('actualScore');
    this.setState(() => ({ actualScore: pontuation }));
  }

  // Pega as perguntas, embaralham elas e salva no estado
  // Salva no estado o objeto recebido e as perguntas embaralhadas
  getQuestions() {
    const { ...actualObject } = this.props;
    if (actualObject.correct_answer) {
      const incorrect = actualObject.incorrect_answers;
      const correct = actualObject.correct_answer;
      const questionsArray = [...incorrect, correct];
      const sortedQuestions = questionsArray.sort(() => Math.random() - TO_RANDOM);
      this.setState({
        object: actualObject,
        questions: [...sortedQuestions],
      });
    }
    if (actualObject.difficulty === 'hard') {
      this.setState({
        actualDificulty: 3,
      });
    }
    if (actualObject.difficulty === 'medium') {
      this.setState({
        actualDificulty: 2,
      });
    }
    if (actualObject.difficulty === 'easy') {
      this.setState({
        actualDificulty: 1,
      });
    }
  }

  handleClick({ target }) {
    const defaultNumber = 10;
    const { timer, saveUserScore, resetTimer } = this.props;
    const { actualScore, actualDificulty } = this.state;

    this.setState(
      { correctButton: 'correctButton', wrongButton: 'wrongButton' },
    );

    // Pontuação
    const localScore = parseFloat(actualScore);

    const questionScore = defaultNumber + (timer * actualDificulty);
    const totalScore = localScore + questionScore;

    if (target.name === 'correctButton') {
      // this.setState({ actualScore: totalScore });
      this.setState((prevState) => ({
        assertation: prevState.assertation + 1,
        actualScore: totalScore,
      }));
      localStorage.setItem('actualScore', totalScore);
      // Set Pontuação no Redux
      saveUserScore({ totalScore });
    }
    resetTimer();
  }

  async handleNext() {
    const { updateQuestion, currentQuest, saveUserAssertation } = this.props;
    const { assertation } = this.state;
    const QUESTION_LIMIT = 4;
    if (currentQuest === QUESTION_LIMIT) {
      saveUserAssertation({ assertation });
      this.setState({ redirect: true });
    }

    await updateQuestion();
    this.setState({ correctButton: 'button', wrongButton: 'button' });
    this.getQuestions();
    this.getScore();
  }

  render() {
    const { object, questions, correctButton, wrongButton, redirect } = this.state;
    const { disableQuestion, ...actualObject } = this.props;
    return (
      <div>
        { redirect ? (<Redirect to="/feedback" />) : null }
        <div data-testid="question-category">
          categoria :
          { object.category }
        </div>
        <br />
        <div data-testid="question-text">{object.question}</div>
        <div data-testid="answer-options">
          { questions.map((question, index) => {
            if (question === actualObject.correct_answer) {
              return (
                <button
                  key={ index }
                  type="button"
                  dificulty={ object.dificulty }
                  name="correctButton"
                  data-testid="correct-answer"
                  className={ disableQuestion ? 'correctButton' : correctButton }
                  onClick={ this.handleClick }
                  disabled={ disableQuestion }
                >
                  { question }
                </button>
              );
            }
            return (
              <button
                key={ index }
                type="button"
                name="wrongButton"
                dificulty={ object.dificulty }
                data-testid={ `wrong-answer-${index}` }
                className={ disableQuestion ? 'wrongButton' : wrongButton }
                onClick={ this.handleClick }
                disabled={ disableQuestion }
              >
                { question }
              </button>
            );
          }) }
        </div>
        {disableQuestion ? (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ this.handleNext }
          >
            Next
          </button>
        ) : null }
      </div>
    );
  }
}

Question.propTypes = {
  disableQuestion: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  saveUserScore: PropTypes.func.isRequired,
  saveUserAssertation: PropTypes.func.isRequired,
  actualObject: PropTypes.objectOf(PropTypes.any).isRequired,
  updateQuestion: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  currentQuest: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserScore: (value) => dispatch(saveScore(value)),
  saveUserAssertation: (value) => dispatch(saveAssertation(value)),
});

export default connect(null, mapDispatchToProps)(Question);
