import React from 'react';
import Container from './container';
import Text from './text';

import 'styles/toaster.scss';

const Toaster = ({ message }) => {
  return (
    <Container className="toaster-container" justify="center">
      <Container className={'toaster'}>
        <Text primary large>
          {message}
        </Text>
      </Container>
    </Container>
  );
};

export default Toaster;
