import React from 'react';
import { Container, Heading, Text } from 'components';
import VoteButton from './vote-button';

const VoteContent = ({ name, uri, ...rest }) => {
  return (
    <Container
      className="vote-content"
      direction="column"
      justify="between"
      align="top"
    >
      <Container
        className="vote-body"
        direction="column"
        justify="start"
        align="top"
      >
        <Text large bold primary>
          {name}
        </Text>
        <Text secondary>{uri}</Text>
      </Container>
      <Container className="vote-buttons" justify="start">
        <VoteButton up />
        <VoteButton />
      </Container>
    </Container>
  );
};

export default VoteContent;
