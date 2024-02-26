import * as yup from "yup";

const emailPasswordschema = yup.object().shape({
    email: yup
      .string()
      .required('Email is a required field')
      .email('Invalid email address'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(6, 'Password must be at least 6 characters long'),
  });

export{
    emailPasswordschema
}