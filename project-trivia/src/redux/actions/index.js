export const LOGIN_TYPE = 'LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVESCORE = 'SAVESCORE';
export const SAVE_ASSERTATION = 'SAVE_ASSERTATION';

export const saveLogin = (value) => ({ type: LOGIN_TYPE, value });
export const saveToken = (value) => ({ type: SAVE_TOKEN, value });
export const saveScore = (value) => ({ type: SAVESCORE, value });
export const saveAssertation = (value) => ({ type: SAVE_ASSERTATION, value });
