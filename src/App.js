import React, { Component } from 'react';
import './App.css';
import { withFormik, Field } from 'formik';

function App(props) {
  const {
    handleSubmit, isSubmitting, errors, isValid, touched,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        Email:
        <Field
          name="email"
          type="email"
          className="input"
        />
        {errors.email && touched.email
          && <div className="error">{errors.password}</div>
        }
      </div>
      <div className="row">
        Password:
        <Field 
          name="password" 
          type="password" 
          className="input" 
        />
        {errors.password && touched.email
          && <div className="error">{errors.password}</div>
        }
      </div>
      <div className="row">
        <button
          type="submit"
          className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
          disabled={isSubmitting}
        >
        Submit

        </button>
      </div>
    </form>
  );
}

export default withFormik({

  validate(values) {
    // arreglo de errores
    const errors = {};

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.setSubmitting(false);
  },
})(App);
