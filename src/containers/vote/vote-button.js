import React, { useMemo } from 'react';
import { Button } from 'components';
import { UpArrowIcon, DownArrowIcon } from 'assests/icons';

const VoteButton = ({ up, onVote, disabled }) => {
  const VoteIcon = useMemo(() => (up ? UpArrowIcon : DownArrowIcon), [up]);

  return (
    <Button
      ghost
      icon={<VoteIcon />}
      className="vote-button"
      onClick={onVote}
      disabled={disabled}
    >
      {up ? 'Up Vote' : 'Down Vote'}
    </Button>
  );
};

export default VoteButton;
