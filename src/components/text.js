import React, { useMemo } from 'react';
import { getClassName } from 'utils';
import 'styles/text.scss';

const Text = ({
  align,
  primary,
  secondary,
  success,
  warning,
  light,
  small = true,
  medium,
  large,
  xLarge,
  xxLarge,
  bold,
  className,
  children,
  ...rest
}) => {
  const cssClasses = useMemo(
    () =>
      getClassName([
        'text',
        'font-weight-normal',
        primary && 'color-primary',
        secondary && 'color-secondary',
        success && 'color-success',
        warning && 'color-warning',
        light && 'color-light',
        small && 'font-size-sm',
        medium && 'font-size-md',
        large && 'font-size-lg',
        xLarge && 'font-size-xl',
        xxLarge && 'font-size-xxl',
        bold && 'font-weight-bold',
        align && `text-align-${align}`,
        className,
      ]),
    [
      primary,
      secondary,
      success,
      warning,
      light,
      small,
      medium,
      large,
      bold,
      className,
    ]
  );

  return (
    <p className={cssClasses} {...rest}>
      {children}
    </p>
  );
};

export default Text;
