import React from 'react';
import { Container, Text } from 'components';
import VotePointBox from './vote-point-box';
import VoteContent from './vote-content';

const VoteRow = ({ point, ...rest }) => {
  return (
    <Container className="vote-row" justify="start" align="top">
      <VotePointBox />
      <VoteContent />
    </Container>
  );
};

export default VoteRow;
