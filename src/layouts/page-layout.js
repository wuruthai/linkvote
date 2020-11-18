import React from 'react';

import { Header, Heading, Footer, Content, Text, Container } from 'components';
import 'styles/page-layout.scss';

const PageLayout = ({ children }) => {
  return (
    <main className="page-layout">
      <Header>
        <Container>
          <Text bold large>
            Link
          </Text>
          <Text large>VOTE</Text>
        </Container>
      </Header>
      <Content>{children}</Content>
      <Footer />
    </main>
  );
};

export default PageLayout;
