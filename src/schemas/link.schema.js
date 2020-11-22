import * as yup from 'yup';
import baseSchema from './base.schema';

const linkSchema = yup.object().shape({
  name: baseSchema.name.label('Link Name'),
  uri: yup.string().url().required().label('Link URL'),
});

export default linkSchema;
