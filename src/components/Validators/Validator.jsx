export default function validateProduct(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name Required';
  }

  if (!values.description) {
    errors.description = 'Description is Required';
  }

  if (!values.implementation) {
    errors.implementation = 'Implementation is Required';
  }

  if (!values.investment) {
    errors.investment = 'Investment is Required';
  }

  return errors;
}
