import React from 'react';
import { Text, Heading, Button, Container } from 'components';
import { PlusIcon } from 'assests/icons';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATHS } from 'constant';

const SubmitLinkButton = (props) => {
  let history = useHistory();

  return (
    <Button stretch onClick={() => history.push(ROUTE_PATHS.NEW)} {...props}>
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
