import * as yup from 'yup';

// yup.setLocale({});

export default {
  name: yup.string().trim().min(3).required(),
};
