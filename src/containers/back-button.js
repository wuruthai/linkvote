import React from 'react';
import { Button } from 'components';
import { LeftArrowIcon } from 'assests/icons';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATHS } from 'constant';

const BackButton = () => {
  let history = useHistory();

  return (
    <Button
      large
      ghost
      icon={<LeftArrowIcon />}
      onClick={() => history.push(ROUTE_PATHS.HOME)}
    >
      Back to list
    </Button>
  );
};

export default BackButton;
