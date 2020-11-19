import React from 'react';
import { Container, Text } from 'components';
import VoteRow from './vote-row';
import './vote.scss';
const data = [
  { id: 0, name: 'Bla asf', uri: 'bla bla', count: 0 },
  { id: 1, name: 'Bla bla', uri: 'bla bla', count: 11 },
];

const VoteList = ({ point, ...rest }) => {
  return (
    <Container className="vote" direction="column" justify="start" align="top">
      {data.map((item) => (
        <VoteRow item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default VoteList;
