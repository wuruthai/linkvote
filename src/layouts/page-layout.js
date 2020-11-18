import React from 'react';

import { Header, Footer, Content, Text } from 'components';
import 'styles/page-layout.scss';

const PageLayout = ({ children }) => {
  return (
    <main className="main-layout">
      <Header>
        <Text large>
          <Text bold large>
            Link
          </Text>
          VOTE
        </Text>
      </Header>
      <Content>{children}</Content>
      <Footer />
    </main>
  );
};

export default PageLayout;
