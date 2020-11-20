import React from 'react';
import Container from '../container';
import Text from '../text';
import Input from '../input';
import { getClassName } from 'utils';
import 'styles/form.scss';

const FormInput = ({ label, error, className, ...rest }) => {
  const classes = getClassName([error && 'error', className]);
  return (
    <Container
      direction="column"
      justify="start"
      align="top"
      className="form-input"
    >
      {label && (
        <Text medium className="input-label" secondary>
          {label}
        </Text>
      )}
      <Input className={classes} {...rest} />
      {error && (
        <Text warning className="error-text">
          {error}
        </Text>
      )}
    </Container>
  );
};

export default FormInput;
