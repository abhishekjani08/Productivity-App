import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import { css } from 'emotion';

export const pomodoroButtons = css`
  @media all and (max-width: 575px) {
    & {
      display: flex;

      justify-content: space-evenly;

      flex-direction: column;
    }

    & .btn {
      margin: 2px;
      min-width: 140px;
    }
  }
`;

const Control = ({ pomodoro, smallBreak, longBreak, handleClick }) => {
  return (
    <div className={`text-center ${pomodoroButtons}`}>
      <Button
        color="success"
        name={pomodoro}
        onClick={handleClick}
        size={'lg'}
        id={'Pomodoro'}
      >
        Pomodoro
      </Button>{' '}
      <Button
        color="primary"
        name={smallBreak}
        id="Short Break"
        onClick={handleClick}
        size={'lg'}
      >
        Short Break
      </Button>{' '}
      <Button
        color="secondary"
        name={longBreak}
        id="Long Break"
        onClick={handleClick}
        size={'lg'}
      >
        Long Break
      </Button>{' '}
    </div>
  );
};

Control.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  smallBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Control;
