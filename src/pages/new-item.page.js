import React from 'react';
import { newItemSchema } from 'schemas';
import { FormInput, Form } from 'components';
import { useFormik } from 'formik';
import { useNavgation } from 'hooks';
import { useVote } from 'context/vote.context';
import 'styles/new-item.page.scss';

const HomePage = () => {
  const { goHomePage } = useNavgation();
  const { addNewLink } = useVote();

  const formik = useFormik({
    initialValues: {
      name: '',
      uri: '',
    },
    validationSchema: newItemSchema,
    onSubmit: (values) => {
      addNewLink(values);
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
