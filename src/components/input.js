import React from 'react';
import { getClassName } from 'utils';
import 'styles/input.scss';

const Input = ({ label, error, className, ...rest }) => {
  const classes = getClassName(['input', className]);
  return <input autoComplete="off" className={classes} {...rest} />;
};

export default Input;
