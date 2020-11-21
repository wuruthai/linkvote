import React from 'react';
import Container from './container';
import { BrokeIcon } from 'assests/icons';
import Text from './text';
import 'styles/empty-page.scss';
const EmptyPage = ({ title, message }) => {
  return (
    <Container direction="column">
      <BrokeIcon className="margin-bottom-md" />
      <Text primary large bold className="margin-bottom-md" center>
        {title}
      </Text>
      <Text primary medium className="margin-bottom-md" center>
        {message}
      </Text>
    </Container>
  );
};

export default EmptyPage;
