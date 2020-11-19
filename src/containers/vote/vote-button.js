import React, { useMemo } from 'react';
import { Button } from 'components';
import { UpArrowIcon, DownArrowIcon } from 'assests/icons';

const VoteButton = ({ up }) => {
  const VoteIcon = useMemo(() => (up ? UpArrowIcon : DownArrowIcon), [up]);

  return (
    <Button ghost icon={<VoteIcon />} className="vote-button">
      {up ? 'Up Vote' : 'Down Vote'}
    </Button>
  );
};

export default VoteButton;
