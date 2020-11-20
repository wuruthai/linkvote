import React from 'react';
import { Container, Text } from 'components';
import VotePointBox from './vote-point-box';
import VoteContent from './vote-content';

const VoteRow = ({ item }) => {
  return (
    <Container className="vote-row" justify="start" align="top">
      <VotePointBox point={item.point} />
      <VoteContent item={item} />
    </Container>
  );
};

export default VoteRow;
