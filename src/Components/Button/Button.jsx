import React from 'react';

const Button = ({ onClick, text, rvmBtn = false }) => (
  <button className={rvmBtn ? 'rvmBtn' : 'basicButton'} onClick={onClick}>
    {text}
  </button>
);

export default Button;
