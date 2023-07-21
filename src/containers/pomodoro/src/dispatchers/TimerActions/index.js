import { createAction } from 'redux-actions';

export const startCountDown = createAction('START_COUNTDOWN');
export const countDown = createAction('COUNT_DOWN');
export const stopCountDown = createAction('STOP_COUNDOWN');
export const changeTimeLeft = createAction('CHANGE_TIME_LEFT');
