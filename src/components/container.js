import React from 'react';
import { getClassName } from 'utils';

// align props ===> top , bottom , middle
// justify props ===> start, end,around,between,evenly
// direction props ===> row, row-reserve, column, column-reserve

const Container = ({
  direction = 'row',
  justify = 'start',
  align = 'middle',
  ...rest
}) => {
  const cssClasses = useMemo(() => `flex-${direction}-${justify}-${align}`, [
    direction,
    justify,
    align,
  ]);
  return <div className={cssClasses} {...rest}></div>;
};

export default Container;
