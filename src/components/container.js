import React, { useMemo } from 'react';
import { getClassName } from 'utils';
import 'styles/container.scss';
// align props ===> top , bottom , middle
// justify props ===> start, end,around,between,evenly
// direction props ===> row, row-reserve, column, column-reserve

const Container = ({
  direction = 'row',
  justify = 'start',
  align = 'middle',
  className,
  ...rest
}) => {
  const cssClasses = useMemo(
    () =>
      getClassName([
        'container',
        `flex-${direction}-${justify}-${align}`,
        className,
      ]),
    [direction, justify, align]
  );
  return <div className={cssClasses} {...rest}></div>;
};

export default Container;
