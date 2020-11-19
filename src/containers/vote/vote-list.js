import React from 'react';
import { Container, Text } from 'components';
import VoteRow from './vote-row';
import './vote.scss';
const data = [
  { id: 0, name: 'Bla bla', uri: 'bla bla', count: 0 },
  { id: 0, name: 'Bla bla', uri: 'bla bla', count: 0 },
];

const VoteList = ({ point, ...rest }) => {
  return (
    <Container className="vote" direction="column" justify="start" align="top">
      {data.map((item) => (
        <VoteRow key={item.id} />
      ))}
    </Container>
  );
};

export default VoteList;
