import React, { useMemo } from 'react';
import { getClassName } from 'utils';
const Text = ({
  primary = true,
  secondary,
  success,
  warning,
  light,
  small = true,
  medium,
  large,
  bold,
  className,
  children,
  ...rest
}) => {
  const cssClasses = useMemo(
    () =>
      getClassName([
        'font-weight-normal',
        primary && 'color-primary',
        secondary && 'color-secondary',
        success && 'color-success',
        warning && 'color-warning',
        light && 'color-light',
        small && 'font-size-sm',
        medium && 'font-size-md',
        large && 'font-size-lg',
        bold && 'font-weight-bold',
        className,
      ]),
    [primary, secondary, success, warning, light, small, medium, large, bold]
  );

  return (
    <p className={cssClasses} {...rest}>
      {children}
    </p>
  );
};

export default Text;
