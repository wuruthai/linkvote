import React from 'react';
import { SubmitLinkButton, VoteList } from 'containers';
import { Pagination } from 'components';
import 'styles/home.page.scss';

const HomePage = () => (
  <>
    <SubmitLinkButton className="home-page-submit-link-button" />
    <VoteList />
    <Pagination />
  </>
);

export default HomePage;
