import React from 'react';
import Layout from '../../components/Layout/layout';
import contactStyles from './contact.module.scss';

const Contact = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={contactStyles.container}>
        <p className={contactStyles.message}>
          Leave me a message and I’ll get back to you as soon as possible.
          Alternatively, you can also reach me at francisco@fcosta.pt
        </p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <input type="text" id="message" name="message" />
          <button type="submit">send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
