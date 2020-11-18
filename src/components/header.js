import React from 'react';
import 'styles/header.scss';

const Header = ({ children, ...rest }) => (
  <header className="header" {...rest}>
    {children}
  </header>
);

export default Header;
