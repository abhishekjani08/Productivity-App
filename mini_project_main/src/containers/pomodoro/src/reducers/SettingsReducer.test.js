import expect from 'unexpected';
import settingsReducer from './SettingsReducer';
import { setTime, reset, toggleDarkMode } from '../dispatchers/SettingActions';

describe('Settings Reducer', () => {
  it('sets pomodoro time to 20 minutes', () => {
    const stateBefore = {
      pomodoro: 5000
    };
    const action = setTime({ value: 20, name: 'pomodoro' });
    const stateAfter = {
      pomodoro: 1200000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });

  it('sets small break to 6 minutes', () => {
    const stateBefore = {
      smallBreak: 5000
    };
    const action = setTime({ value: 6, name: 'smallBreak' });
    const stateAfter = {
      smallBreak: 360000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });

  it('sets long break to 15 minutes', () => {
    const stateBefore = {
      longBreak: 5000
    };
    const action = setTime({ value: 15, name: 'longBreak' });
    const stateAfter = {
      longBreak: 900000
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });

  it('resets the values', () => {
    const stateBefore = {
      pomodoro: 63474568,
      shortBreak: 6457457,
      longBreak: 74574584,
      darkMode: true
    };
    const action = reset();
    const stateAfter = {
      pomodoro: 1500000,
      smallBreak: 300000,
      longBreak: 600000,
      darkMode: false
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('turns on dark mode', () => {
    const stateBefore = {
      darkMode: false
    };
    const action = toggleDarkMode(true);
    const stateAfter = {
      darkMode: true
    };
    expect(settingsReducer(stateBefore, action), 'to equal', stateAfter);
  });
});
