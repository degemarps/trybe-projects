import { combineReducers } from 'redux';
import { playerReducer, player, assertationReducer } from './player';
import token from './token';

const rootReducer = combineReducers({ playerReducer, player, assertationReducer, token });

export default rootReducer;
