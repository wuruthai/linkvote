import React from 'react';
import { getClassName } from 'utils';
import { Container } from 'components';
import 'styles/content.scss';

const Content = ({ className, children, ...rest }) => {
  const cssClasses = getClassName(['content', className]);

  return (
    <section className={cssClasses} {...rest}>
      <Container className="new-item" justify="center">
        <Container
          className="content-wrapper"
          direction="column"
          justify="start"
          align="top"
        >
          {children}
        </Container>
      </Container>
    </section>
  );
};

export default Content;
