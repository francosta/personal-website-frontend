import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={(values) => {
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
        const url = `https://getform.io/f/${process.env.EMAIL_API}`;

        const options = {
          method: 'POST',
          data: values,
        };

        return fetch(
          'https://api.getform.io/v1/forms/4ec6a29c-a3b6-4433-97a7-0cba14c0f644?token=AgzjhzDSeVeem7RqahAr8WEm4Xs9fcQG7r2VaCYjF6Lm6q3jZigVYidYbFrZ',
          options
        )
          .then((resp) => console.log(resp))
          .then(setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
