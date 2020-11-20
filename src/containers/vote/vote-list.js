import React from 'react';
import { Container } from 'components';
import VoteRow from './vote-row';
import './vote.scss';

const VoteList = ({ data, ...rest }) => {
  return (
    <>
      <Container
        className="vote"
        direction="column"
        justify="start"
        align="top"
      >
        {data.map((item) => (
          <VoteRow key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};

export default VoteList;
