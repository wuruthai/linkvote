import React from 'react';
import { linkSchema as validationSchema } from 'schemas';
import { FormInput, Form } from 'components';
import { useFormik } from 'formik';
import { useNavgation } from 'hooks';
import { useVote } from 'context/vote.context';
import { useToaster } from 'context/toaster.context';

const NewLinkPage = () => {
  const { goHomePage } = useNavgation();
  const { addNewLink } = useVote();
  const { showToaster } = useToaster();

  const onSubmit = (values) => {
    addNewLink(values);
    showToaster(`"${values.name}" added.`);
    goHomePage();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      uri: '',
    },
    validationSchema,
    onSubmit,
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

export default NewLinkPage;
