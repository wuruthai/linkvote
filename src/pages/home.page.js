import React from 'react';
import { SubmitLinkButton, VoteList } from 'containers';
import 'styles/home.page.scss';

const HomePage = () => (
  <>
    <SubmitLinkButton className="home-page-submit-link-button" />
    <VoteList />
  </>
);

export default HomePage;
