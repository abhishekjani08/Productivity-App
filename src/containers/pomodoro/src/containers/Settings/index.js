import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  setTime,
  reset,
  toggleDarkMode,
} from '../../dispatchers/SettingActions';
import {
  getPomodoro,
  getSmallBreak,
  getLongBreak,
  getDarkMode,
} from '../../reducers/SettingsReducer';
import Settings from './Settings';

class SettingsPage extends Component {
  static propTypes = {
    setTime: PropTypes.func.isRequired,
    smallBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
    pomodoro: PropTypes.number.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
  };

  onChangeTime = event => {
    const { setTime } = this.props;
    const { target } = event;

    const value = parseInt(target.value, 0);
    setTime({ value, name: target.name });
  };

  onResetButton = () => {
    const { reset } = this.props;
    reset();
  };

  onCheckboxChange = event => {
    const { toggleDarkMode } = this.props;
    const { target } = event;

    toggleDarkMode(target.checked);
  };

  render() {
    const { smallBreak, longBreak, pomodoro, darkMode } = this.props;
    const optionValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    return (
      <Settings
        setTime={this.onChangeTime}
        shortBreak={smallBreak}
        longBreak={longBreak}
        pomodoro={pomodoro}
        reset={this.onResetButton}
        optionValues={optionValues}
        onCheckboxChange={this.onCheckboxChange}
        style={darkMode ? { background: 'black', color: 'whitesmoke' } : {}}
        darkMode={darkMode}
      />
    );
  }
}

const mapStateToProps = state => ({
  pomodoro: getPomodoro(state),
  smallBreak: getSmallBreak(state),
  longBreak: getLongBreak(state),
  darkMode: getDarkMode(state),
});

const mapDispatchToProps = {
  setTime,
  reset,
  toggleDarkMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage);
