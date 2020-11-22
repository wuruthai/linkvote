import React from 'react';
import { getClassName } from 'utils';
import BackButton from '../back-button';
import Heading from '../heading';
import Container from '../container';
import Button from '../button';
import 'styles/form.scss';

const Form = ({
  children,
  head,
  onSubmit,
  submitButtonLabel,
  className,
  ...rest
}) => {
  const classes = getClassName(['form', className]);
  function onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit && onSubmit();
    }
  }
  return (
    <form
      className={classes}
      onKeyDown={onKeyDown}
      onSubmit={onSubmit}
      {...rest}
    >
      <BackButton />
      <Heading bold className="form-head">
        {head}
      </Heading>
      {children}
      <Container justify="end">
        <Button primary circle type="submit">
          {submitButtonLabel}
        </Button>
      </Container>
    </form>
  );
};

export default Form;
