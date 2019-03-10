import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text, rvmBtn = false }) => (
  <button className={rvmBtn ? 'rvmBtn' : 'basicButton'} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  rvmBtn: PropTypes.bool,
}
export default Button;
