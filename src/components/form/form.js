import React from 'react';
import { getClassName } from 'utils';
import BackButton from '../back-button';
import Heading from '../heading';
import Container from '../container';
import Button from '../button';
import 'styles/form.scss';

const Form = ({ children, head, submitButtonLabel, className, ...rest }) => {
  const classes = getClassName(['form', className]);

  return (
    <form className={classes} {...rest}>
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
