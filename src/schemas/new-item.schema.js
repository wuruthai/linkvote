import * as yup from 'yup';
import baseSchema from './base.schema';

const newItemSchema = yup.object().shape({
  name: baseSchema.name,
  uri: yup.string().required(),
});

export default newItemSchema;
