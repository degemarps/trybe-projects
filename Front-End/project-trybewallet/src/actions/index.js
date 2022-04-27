// Coloque aqui suas actions
export const LOGIN_TYPE = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const login = (value) => ({ type: LOGIN_TYPE, value });
export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
export const saveCurrencies = (payload) => ({ type: SAVE_CURRENCIES, payload });

export const getCurrencysThunk = () => {
  console.log('thunk');
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(saveCurrencies(currencies));
    return currencies;
  };
};
