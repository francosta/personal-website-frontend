import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import contactStyles from './contactForm.module.scss';

const ContactForm = ({ setMessageSent, setError }) => {
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
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting();
        const formData = {
          name: values.name,
          email: values.email,
          message: values.message,
        };

        const url = `https://getform.io/f/${process.env.EMAIL_API}`;

        try {
          await axios.post(url, formData, {
            headers: { Accept: 'application/json' },
          });
          await setMessageSent(true);
        } catch (e) {
          setError(
            "Something's gone wrong! I'm sorry. Please try again later :)"
          );
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={contactStyles.nameForm}>
            <label htmlFor="name">Name</label>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={contactStyles.emailForm}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={contactStyles.messageForm}>
            <label htmlFor="email">Message</label>
            <Field type="message" name="message" component="textarea" />
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
