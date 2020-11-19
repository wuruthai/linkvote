import React from 'react';
import { Text, Heading, Button, Container } from 'components';
import { PlusIcon } from 'assests/icons';
const SubmitLinkButton = (props) => {
  return (
    <Button stretch {...props}>
      <Container justify="center" align="middle">
        <PlusIcon width={50} height={50} className="margin-right-lg" />
        <Text xLarge primary>
          SUBMIT A LINK
        </Text>
      </Container>
    </Button>
  );
};

export default SubmitLinkButton;
