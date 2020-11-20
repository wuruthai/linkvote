import React from 'react';
import { Button } from 'components';
import { LeftArrowIcon } from 'assests/icons';
import { useNavgation } from 'hooks';

const BackButton = () => {
  const { goHomePage } = useNavgation();

  return (
    <Button large ghost icon={<LeftArrowIcon />} onClick={goHomePage}>
      Back to list
    </Button>
  );
};

export default BackButton;
