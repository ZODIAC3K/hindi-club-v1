import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    toast.info('Sending...', { autoClose: false, draggable: false, hideProgressBar: true });

    emailjs.sendForm('service_wq1b1qk', 'template_3ubujoe', form.current, '3t-QbNdImw6w2JRiN')
      .then((result) => {
        console.log(result.text);

        toast.success('Email sent successfully!', { autoClose: 3000, draggable: false });
      })
      .catch((error) => {
        console.log(error.text);

        toast.error('Error sending email. Please try again later.', { autoClose: 3000, draggable: false });
      });
  };

  return (
    <>
      <div className="main">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="from_name">Name:</label>
            <input type="text" id="from_name" name="from_name" required />

            <label htmlFor="from_email">Email:</label>
            <input type="email" id="from_email" name="from_email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default Contact;
