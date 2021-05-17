const pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validation = values => {
  const errors = {};

  Object.keys(values).forEach(el => {
    if (el === 'email') {
      if (!values[el].trim()) {
        errors.email = 'Email is required';
        return;
      }
      if (!values[el].match(pattern)) {
        errors.email = 'Wrong email';
        return;
      }
    }
    if (el === 'password') {
      if (!values[el].trim()) {
        errors.password = 'Password is Required';
        return;
      }
      if (values[el].length < 3) {
        errors.password = 'Min length 3';
        return;
      }
    }
  });
  return { isValid: !Object.keys(errors).length, errors };
};
