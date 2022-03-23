// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, SAVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE: {
    const { expenses } = state;
    return {
      ...state,
      expenses: [...expenses, action.payload],
    };
  }
  case SAVE_CURRENCIES: {
    const { currencies } = state;
    return {
      ...state,
      currencies: [...currencies, Object.keys(action.payload)],
    };
  }
  default:
    return state;
  }
}

export default wallet;
