import React, { useState } from 'react';
import Layout from '../../components/Layout/layout';
import contactStyles from './contact.module.scss';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = ({ path }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    // const formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   message: e.target.message.value,
    // };
    // console.log(formData);

    // const url = `https://formspree.io/${process.env.EMAIL_API}`;

    // try {
    //   const resp = await fetch(url, {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   console.log(resp);
    await setMessageSent(true);
    // } catch (e) {
    //   setError("Something's gone wrong! I'm sorry. Please try again later :)");
    // }
  };

  return (
    <Layout path={path}>
      {/* <ContactForm /> */}
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
          <form method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="bot-field" />
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
      )}
    </Layout>
  );
};

export default Contact;
