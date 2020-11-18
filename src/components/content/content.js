import React from 'react';

const Content = ({ children, ...rest }) => (
  <section {...rest}>{children}</section>
);

export default Content;
