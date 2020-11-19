import React from 'react';
import 'styles/header.scss';
import { Container, Text, Heading } from 'components';
const Header = ({ children, ...rest }) => (
  <header className="header" {...rest}>
    <Heading bold primary big>
      Link
    </Heading>
    <Heading primary big>
      VOTE
    </Heading>
  </header>
);

export default Header;
