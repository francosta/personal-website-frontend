import React, { useState } from 'react';
import Layout from '../../components/Layout/layout';
import contactStyles from './contact.module.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import SEO from '../../components/seo';

const Contact = ({ path }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Layout path={path}>
      <SEO title="Contact" />
      {messageSent ? (
        <div className={contactStyles.container}>
          <p>
            Thank you for your message! I'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <div className={contactStyles.container}>
          <p className={contactStyles.message}>
            Leave me a message and I’ll get back to you as soon as possible.
            Alternatively, you can also reach me at francisco@fcosta.pt
          </p>
          <ContactForm setMessageSent={setMessageSent} setError={setError} />
        </div>
      )}
    </Layout>
  );
};

export default Contact;
