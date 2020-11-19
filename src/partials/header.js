import React from 'react';
import 'styles/header.scss';
import { Row, Text, Heading } from 'components';
const Header = ({ children, ...rest }) => (
  <header className="header" {...rest}>
    <Row>
      <Heading bold large>
        Link
      </Heading>
      <Heading large>VOTE</Heading>
    </Row>
  </header>
);

export default Header;
