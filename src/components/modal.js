import React from 'react';
import Container from './container';
import Heading from './heading';
import Text from './text';
import Button from './button';

import BluredBackground from './blured-background';
import 'styles/modal.scss';
const Modal = ({
  title = 'bu bir deneme',
  description = 'desc',
  cancelText = 'CANCEL',
  applyText = 'OK',
  onCancel,
  onApply,
}) => {
  return (
    <BluredBackground onClick={onCancel}>
      <Container align="middle" justify="center" className="modal-container">
        <Container
          align="middle"
          justify="center"
          direction="column"
          className="modal"
        >
          <Heading level={3} bold className="modal-title">
            {title}
          </Heading>
          <Text primary className="modal-description">
            {description}
          </Text>
          <Container justify="around">
            <Button onClick={onApply}>{applyText}</Button>
            <Button onClick={onCancel}>{cancelText}</Button>
          </Container>
        </Container>
      </Container>
    </BluredBackground>
  );
};

export default Modal;
