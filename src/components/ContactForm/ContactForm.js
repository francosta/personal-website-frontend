import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Please tell me your name.';
        }

        if (!values.message) {
          errors.message = 'Please tell me how I can help you.';
        }

        if (!values.email) {
          errors.email = 'Please give me your email so I can contact you back.';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Sent');
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label htmlFor="name">Name</label>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="email">Message</label>
            <Field type="message" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
