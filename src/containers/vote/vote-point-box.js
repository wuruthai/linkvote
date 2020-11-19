import React from 'react';
import { Container, Text } from 'components';

const VotePointBox = ({ count }) => {
  return (
    <Container
      className="vote-point-box"
      direction="column"
      justify="center"
      align="middle"
    >
      <Text xxLarge bold secondary>
        {count}
      </Text>
      <Text medium secondary>
        Points
      </Text>
    </Container>
  );
};

export default VotePointBox;
