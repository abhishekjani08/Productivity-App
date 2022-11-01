import { combineReducers } from 'redux';
import timerReducer from './TimerReducer';
import settingsReducer from './SettingsReducer';

export default combineReducers({
  timer: timerReducer,
  settings: settingsReducer
});
