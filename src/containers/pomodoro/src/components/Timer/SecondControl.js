import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';
import { css } from 'emotion';

export const controlButtons = css`
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

const SecondControl = ({ clickStop, handleContinueCount }) => {
  return (
    <div className={`text-center ${controlButtons}`}>
      <Button
        color="info"
        className="col-xs-3"
        onClick={handleContinueCount}
        size={'lg'}
      >
        Continue
      </Button>{' '}
      <Button
        color="warning"
        className="col-xs-3"
        onClick={clickStop}
        size={'lg'}
      >
        Pause
      </Button>
    </div>
  );
};

SecondControl.propTypes = {
  clickStop: PropTypes.func.isRequired,
  handleContinueCount: PropTypes.func.isRequired,
};

export default SecondControl;
