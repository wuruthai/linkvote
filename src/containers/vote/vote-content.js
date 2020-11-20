import React from 'react';
import { Container, Button, Text } from 'components';
import VoteButton from './vote-button';
import { useVote } from 'context/vote.context';
import { OPERATOR_CONST } from 'constant';
import { TrashIcon } from 'assests/icons';
import { useModal } from 'hooks';
import { useToaster } from 'context/toaster.context';

const VoteContent = ({ item }) => {
  const { onVote, deleteLink } = useVote();
  const { showToaster } = useToaster();
  const { Modal, showModal } = useModal({
    title: 'Remove Item',
    description: `Do you want to remove ${item.name}`,
    onApply: () => {
      deleteLink(item.id);
      showToaster(`"${item.name}" removed.`);
    },
  });
  return (
    <>
      <Container
        className="vote-content"
        direction="column"
        justify="between"
        align="top"
      >
        <Button className="vote-trash" onClick={showModal}>
          <TrashIcon className="vote-trash-icon" />
        </Button>
        <Container
          className="vote-body"
          direction="column"
          justify="start"
          align="top"
        >
          <Text large bold primary>
            {item.name}
          </Text>
          <Text secondary>{item.uri}</Text>
        </Container>
        <Container className="vote-buttons" justify="start">
          <VoteButton up onVote={() => onVote(item.id, OPERATOR_CONST.PLUS)} />
          <VoteButton
            disabled={item.point === 0}
            onVote={() => onVote(item.id, OPERATOR_CONST.MINUS)}
          />
        </Container>
      </Container>
      {Modal}
    </>
  );
};

export default VoteContent;
