import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'emotion';

import { Count, Control, SecondControl } from '../../components/Timer/';

export const main = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const darkModeStyle = css`
  background: black;
  color: whitesmoke;
`;

const Timer = ({
  timeLeft,
  pomodoro,
  smallBreak,
  longBreak,
  handleButtonClick,
  handleStopCount,
  handleContinueCount,
  darkMode,
}) => {
  return (
    <div className={`${main} ${darkMode ? darkModeStyle : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Control
              pomodoro={pomodoro}
              smallBreak={smallBreak}
              longBreak={longBreak}
              handleClick={handleButtonClick}
            />
            <Count timeLeft={timeLeft} />
            <SecondControl
              clickStop={handleStopCount}
              handleContinueCount={handleContinueCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.number,
  pomodoro: PropTypes.number.isRequired,
  smallBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleStopCount: PropTypes.func.isRequired,
  handleContinueCount: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Timer;
