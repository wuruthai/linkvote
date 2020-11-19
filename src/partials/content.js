import React from 'react';
import { getClassName } from 'utils';

const Content = ({ className, children, ...rest }) => {
  const cssClasses = getClassName(['content', className]);

  return (
    <section className={cssClasses} {...rest}>
      {children}
    </section>
  );
};

export default Content;
