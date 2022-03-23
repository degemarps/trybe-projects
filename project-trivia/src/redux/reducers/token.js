import { SAVE_TOKEN } from '../actions';

// const INITIAL_STATE = {
//   token: '',
// };

function token(state = '', action) {
  switch (action.type) {
  case SAVE_TOKEN:
    return action.value;
  default:
    return state;
  }
}

export default token;
