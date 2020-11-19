import React, { useMemo } from 'react';
import { getClassName } from 'utils';
import 'styles/button.scss';

const Button = ({
  children,
  className,
  primary = true,
  ghost,
  stretch,
  circle,
  small,
  large,
  icon,
  ...rest
}) => {
  const classes = useMemo(
    () =>
      getClassName([
        'button',
        primary && !ghost && 'button-primary',
        ghost && 'button-ghost',
        stretch && 'button-stretch',
        circle && 'button-circle',
        small && 'font-size-sm',
        large && 'font-size-lg',
        className,
      ]),
    [className, ghost, primary, stretch, circle, small, large]
  );
  return (
    <button className={classes} {...rest}>
      {icon && <span>{icon} </span>}
      {children}
    </button>
  );
};

export default Button;
