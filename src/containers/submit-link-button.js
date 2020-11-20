import React from 'react';
import { Text, Heading, Button, Container } from 'components';
import { PlusIcon } from 'assests/icons';
import { ROUTE_PATHS } from 'constant';
import { useNavgation } from 'hooks';

const SubmitLinkButton = (props) => {
  const { goNewItemPage } = useNavgation();

  return (
    <Button stretch onClick={goNewItemPage} {...props}>
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
