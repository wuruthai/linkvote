import React from 'react';
import { Text, Heading, Button, Container } from 'components';
import { PlusIcon } from 'assests/icons';
import { useNavgation } from 'hooks';

const SubmitLinkButton = (props) => {
  const { goNewItemPage } = useNavgation();

  return (
    <Button stretch onClick={goNewItemPage} {...props}>
      <Container justify="center" align="middle">
        <PlusIcon width={50} height={50} className="margin-right-lg" />
        <Text large primary className="text-nowrap">
          SUBMIT A LINK
        </Text>
      </Container>
    </Button>
  );
};

export default SubmitLinkButton;
