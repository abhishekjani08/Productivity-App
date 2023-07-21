import expect from 'unexpected';
import timerReducer from './TimerReducer';
import {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft
} from '../dispatchers/TimerActions';

describe('Timer Reducer', () => {
  it('starts pomodoro session', () => {
    const stateBefore = {
      timeLeft: 30000,
      counterID: null,
      type: null
    };
    const action = startCountDown({
      value: 1500000,
      counterID: 20,
      type: 'pomodoro'
    });
    const stateAfter = {
      timeLeft: 1500000,
      counterID: 20,
      type: 'pomodoro'
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('counts down', () => {
    const stateBefore = {
      timeLeft: 23262
    };
    const action = countDown();
    const stateAfter = {
      timeLeft: 22262
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('stops countdown', () => {
    const stateBefore = {
      timeLeft: 23262,
      counterID: 20
    };
    const action = stopCountDown();
    const stateAfter = {
      timeLeft: 23262,
      counterID: null
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
  it('change time left', () => {
    const stateBefore = {
      timeLeft: 1500000
    };
    const action = changeTimeLeft({ value: 600000 });
    const stateAfter = {
      timeLeft: 600000
    };
    expect(timerReducer(stateBefore, action), 'to equal', stateAfter);
  });
});
