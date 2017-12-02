export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please enter a username';
  }
  if (!values.password) {
    errors.password = 'Please enter a password';
  }
  if (values.username && values.username.length < 7) {
    errors.username = 'Must be 7 characters or more';
  }
  if (values.password && values.password.length < 9) {
    errors.password = 'Must be 9 characters or more';
  }
  return errors;
};