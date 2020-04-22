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
          <div className={contactStyles.nameForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={contactStyles.emailForm}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className={contactStyles.messageForm}>
            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" name="message" />
          </div>
          <button type="submit">send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
