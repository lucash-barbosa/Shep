import { AuthType } from '@app/interfaces/Types';

const Validates = (values: AuthType, errors: AuthType) => {
  // Vadilate username
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 3) {
    errors.username = 'Username must contain a minimum of 3 characters';
  }

  // Vadilate email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Vadilate password
  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      'Password must include 1 lowercase, 1 uppercase, 1 digit, 1 special character and be at least 8 characters long.';
  }

  // Vadilate confirmPassword
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must be the same';
  }

  return errors;
};

export default Validates;
