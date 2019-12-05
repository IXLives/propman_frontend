/* eslint-disable react/prop-types */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MdEmail, MdLock, MdError } from 'react-icons/md';
import { FormError, I } from '../UI';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters or longer')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
});

const SignUpForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={validationSchema}
      onSubmit={values => submit(values)}
    >
      {({ touched, errors }) => (
        <div className="form-card">
          <h2>Sign Up</h2>
          <Form data-testid="form-element">
            <div className="input-wrapper">
              <label htmlFor="email">
                <I>
                  <MdEmail />
                </I>{' '}
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              {touched.email && errors.email && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.email}
                </FormError>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">
                <I>
                  <MdLock />
                </I>{' '}
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.password}
                </FormError>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">
                <I>
                  <MdLock />
                </I>{' '}
                Confirm Password
              </label>
              <Field
                type="password"
                name="passwordConfirmation"
                placeholder="Re-enter your password"
              />
              {touched.passwordConfirmation && errors.passwordConfirmation && (
                <FormError>
                  <I>
                    <MdError />
                  </I>{' '}
                  {errors.passwordConfirmation}
                </FormError>
              )}
            </div>
            <div className="submit-btn-wrapper">
              <button className="btn btn-animated" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
