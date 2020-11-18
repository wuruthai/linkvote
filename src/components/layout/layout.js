import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Content from '../content/content';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
