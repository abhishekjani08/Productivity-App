import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getMinutes from 'date-fns/get_minutes';
import { connect } from 'react-redux';

import {
  getPomodoro,
  getSmallBreak,
  getLongBreak,
  getDarkMode,
} from '../../reducers/SettingsReducer';
import {
  getTimeLeft,
  getCounterID,
  getType,
} from '../../reducers/TimerReducer';
import {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft,
} from '../../dispatchers/TimerActions';
import Timer from './Timer';

import ding from '../../utils/ding.wav';

class TimerPage extends Component {
  static propTypes = {
    pomodoro: PropTypes.number.isRequired,
    smallBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
    counterID: PropTypes.number,
    type: PropTypes.string,
    startCountDown: PropTypes.func.isRequired,
    countDown: PropTypes.func.isRequired,
    stopCountDown: PropTypes.func.isRequired,
    changeTimeLeft: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };

  constructor() {
    super();

    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  componentDidMount() {
    const { pomodoro, changeTimeLeft } = this.props;

    changeTimeLeft({ value: pomodoro });
  }

  componentDidUpdate(prevProps) {
    const { timeLeft } = prevProps;
    const { timeLeft: propsTimeLeft } = this.props;

    if (timeLeft <= 0) {
      this.finishTimer();
    }
    if (timeLeft !== propsTimeLeft) {
      document.title = `${parseInt(getMinutes(timeLeft), 0)} minutes left`;
    }
  }

  componentWillUnmount() {
    const { counterID } = this.props;
    clearInterval(counterID);
    stopCountDown();
    document.title = 'Tomato Timer';
  }

  finishTimer = () => {
    const { type } = this.props;
    if ('Notification' in window) {
      new Notification(`${type} time is up!`);
    }
    this.playNotification();
    document.title = 'Time is up';
    this.handleStopCount();
  };

  timer = () => {
    const { countDown } = this.props;
    const time = setInterval(() => countDown(), 1000);

    return time;
  };

  playNotification = () => {
    const audio = new Audio(ding);
    audio.volume = 0.6;
    audio.play();
  };

  handleButtonClick = e => {
    const { startCountDown, counterID } = this.props;
    clearInterval(counterID);
    startCountDown({
      value: e.target.name,
      counterID: this.timer(),
      type: e.target.id,
    });
  };

  handleStopCount = () => {
    const { stopCountDown, counterID } = this.props;
    document.title = 'Tomato Timer';
    clearInterval(counterID);
    stopCountDown();
  };

  handleContinueCount = () => {
    const { timeLeft, type, counterID, startCountDown } = this.props;
    if (timeLeft > 0 && type !== null) {
      clearInterval(counterID);
      startCountDown({
        value: timeLeft,
        counterID: this.timer(),
        type: type,
      });
    }
  };

  render() {
    const { timeLeft, pomodoro, smallBreak, longBreak, darkMode } = this.props;

    return (
      <Timer
        timeLeft={timeLeft}
        pomodoro={pomodoro}
        smallBreak={smallBreak}
        longBreak={longBreak}
        handleButtonClick={this.handleButtonClick}
        handleStopCount={this.handleStopCount}
        handleContinueCount={this.handleContinueCount}
        darkMode={darkMode}
      />
    );
  }
}

const mapStateToProps = state => ({
  pomodoro: getPomodoro(state),
  smallBreak: getSmallBreak(state),
  longBreak: getLongBreak(state),
  timeLeft: getTimeLeft(state),
  counterID: getCounterID(state),
  type: getType(state),
  darkMode: getDarkMode(state),
});

const mapDispatchToProps = {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerPage);
