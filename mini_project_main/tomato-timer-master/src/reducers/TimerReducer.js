import { handleActions } from 'redux-actions';
import subSeconds from 'date-fns/sub_seconds';
import getTime from 'date-fns/get_time';

import {
  changeTimeLeft,
  countDown,
  startCountDown,
  stopCountDown
} from '../dispatchers/TimerActions';

const initState = {
  timeLeft: 1500000,
  counterID: null,
  type: null
};

const timerReducer = handleActions(
  {
    [startCountDown]: (state, action) => ({
      ...state,
      timeLeft: parseInt(action.payload.value, 0),
      counterID: action.payload.counterID,
      type: action.payload.type
    }),
    [countDown]: (state, action) => ({
      ...state,
      timeLeft: getTime(subSeconds(state.timeLeft, 1))
    }),
    [stopCountDown]: (state, action) => ({
      ...state,
      counterID: null
    }),
    [changeTimeLeft]: (state, action) => ({
      ...state,
      timeLeft: action.payload.value
    })
  },
  initState
);

export default timerReducer;

export const getTimeLeft = state => state.timer.timeLeft
export const getCounterID = state => state.timer.counterID
export const getType = state => state.timer.type 