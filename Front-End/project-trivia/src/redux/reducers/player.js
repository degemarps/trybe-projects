import { LOGIN_TYPE, SAVESCORE, SAVE_ASSERTATION } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_TYPE: {
    const { userName, userEmail } = action.value;
    return ({
      ...state,
      name: userName,
      gravatarEmail: userEmail,
    });
  }
  default:
    return state;
  }
}

export function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVESCORE: {
    const { totalScore } = action.value;
    return ({
      ...state,
      score: totalScore,
    });
  }
  default:
    return state;
  }
}

export function assertationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_ASSERTATION: {
    const { assertation } = action.value;
    return ({
      ...state,
      assertions: assertation,
    });
  }
  default:
    return state;
  }
}
