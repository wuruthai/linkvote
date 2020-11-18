import React, { useMemo } from 'react';
import { getClassName } from 'utils';

const Heading = ({
  level = 1,
  children,
  align,
  primary = true,
  secondary,
  success,
  warning,
  light,
  big,
  bold,
  className,
  ...rest
}) => {
  const cssClasses = useMemo(
    () =>
      getClassName([
        'text',
        'font-weight-normal',
        big ? 'font-size-xxl' : 'font-size-xl',
        primary && 'color-primary',
        secondary && 'color-secondary',
        success && 'color-success',
        warning && 'color-warning',
        light && 'color-light',
        bold && 'font-weight-bold',
        align && `text-align-${align}`,
        className,
      ]),
    [primary, secondary, success, warning, light, big, bold, level]
  );

  return React.createElement(
    `h${level}`,
    { className: cssClasses, ...rest },
    children
  );
};

export default Heading;
