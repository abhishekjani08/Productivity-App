import { createAction } from 'redux-actions';

export const setTime = createAction('SET_TIME');
export const reset = createAction('RESET_TIMERS');
export const toggleDarkMode = createAction('TOGGLE_DARK_MODE');
