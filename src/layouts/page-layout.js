import React from 'react';

import { Text, Row } from 'components';
import { Header, Content } from 'partials';
import 'styles/page-layout.scss';

const PageLayout = ({ children }) => {
  return (
    <main className="page-layout">
      <Header />
      <Content>{children}</Content>
    </main>
  );
};

export default PageLayout;
