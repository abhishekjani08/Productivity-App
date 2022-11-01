import React from 'react';
import PropTypes from 'prop-types';

import { Input, FormGroup, Label, Button } from 'reactstrap';
import getMinutes from 'date-fns/get_minutes';

import { main, darkModeStyle } from '../Timer/Timer';

const Settings = ({
  setTime,
  shortBreak,
  longBreak,
  pomodoro,
  optionValues,
  reset,
  onCheckboxChange,
  darkMode,
}) => {
  return (
    <div className={`${main} ${darkMode ? darkModeStyle : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <FormGroup>
              <Label for="pomodoro">Pomodoro</Label>
              <Input
                type="select"
                name="pomodoro"
                id="pomodoro"
                value={getMinutes(pomodoro)}
                onChange={setTime}
              >
                {optionValues.map(optioValue => (
                  <option key={optioValue}>{optioValue}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="smallBreak">Short Break</Label>
              <Input
                type="select"
                name="smallBreak"
                id="smallBreak"
                value={getMinutes(shortBreak)}
                onChange={setTime}
              >
                {optionValues.map(optioValue => (
                  <option key={optioValue}>{optioValue}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="longBreak">Long Break</Label>
              <Input
                type="select"
                name="longBreak"
                id="longBreak"
                value={getMinutes(longBreak)}
                onChange={setTime}
              >
                {optionValues.map(optioValue => (
                  <option key={optioValue}>{optioValue}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={onCheckboxChange}
                  checked={darkMode}
                />{' '}
                Dark Mode
              </Label>
            </FormGroup>
            <Button color="primary" onClick={reset} size={'lg'}>
              Reset values
            </Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  setTime: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  optionValues: PropTypes.array.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Settings;
