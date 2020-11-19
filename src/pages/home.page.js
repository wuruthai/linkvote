import React from 'react';
import { Text, Button, Container } from 'components';
import { SubmitLinkButton, VoteList } from 'containers';
import { UpArrowIcon } from 'assests/icons';
import 'styles/home.page.scss';

const HomePage = () => (
  <Container className="home-page" justify="center">
    <Container
      className="vote-list-container"
      direction="column"
      justify="start"
      align="top"
    >
      <SubmitLinkButton className="home-page-submit-link-button" />
      <VoteList />
    </Container>
  </Container>
);

export default HomePage;
