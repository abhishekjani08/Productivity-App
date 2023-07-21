import React from 'react';
import PropTypes from 'prop-types';

import format from 'date-fns/format';
import { css } from 'emotion';

export const counter = css`
  margin: 1rem !important;
`;

const Count = ({ timeLeft }) => {
  return (
    <h2 className={`text-center ${counter}`}>{format(timeLeft, 'mm:ss')}</h2>
  );
};

Count.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default Count;
