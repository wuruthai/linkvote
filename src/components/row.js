import React, { useMemo } from 'react';

// align props ===> top , bottom , middle
// justify props ===> start, end,around,between,evenly
// direction props ===> row, row-reserve, column, column-reserve

const Row = ({
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

export default Row;
