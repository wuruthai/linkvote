import React from 'react';
import { Container, Text } from 'components';

const VotePointBox = ({ point = 0 }) => {
  return (
    <Container
      className="vote-point-box"
      direction="column"
      justify="center"
      align="middle"
    >
      <Text xxLarge bold secondary>
        {point}
      </Text>
      <Text medium secondary>
        Points
      </Text>
    </Container>
  );
};

export default VotePointBox;
