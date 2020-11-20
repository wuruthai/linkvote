import React from 'react';
import { BackButton } from 'containers';
import { newItemSchema } from 'schemas';
import { FormInput, Button, Form, Heading, Container } from 'components';
import { useFormik } from 'formik';
import { useNavgation } from 'hooks';
import 'styles/new-item.page.scss';

const HomePage = () => {
  const { goHomePage } = useNavgation();
  const formik = useFormik({
    initialValues: {
      name: '',
      uri: '',
    },
    validationSchema: newItemSchema,
    onSubmit: (values) => {
      goHomePage();
    },
  });

  return (
    <Form
      head="ADD A NEW LINK"
      submitButtonLabel="ADD"
      onSubmit={formik.handleSubmit}
    >
      <FormInput
        name="name"
        label="Link Name"
        error={formik.errors.name}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <FormInput
        name="uri"
        label="Link URL"
        error={formik.errors.uri}
        value={formik.values.uri}
        onChange={formik.handleChange}
      />
    </Form>
  );
};

export default HomePage;
