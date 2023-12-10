import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.info('Sending...', { autoClose: 3000, draggable: false });

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
    <div className="main bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="contact-container max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label className="block mb-2" htmlFor="from_name">Name:</label>
          <input className="w-full p-2 border border-gray-300 rounded mb-4" type="text" id="from_name" name="from_name" required />

          <label className="block mb-2" htmlFor="from_email">Email:</label>
          <input className="w-full p-2 border border-gray-300 rounded mb-4" type="email" id="from_email" name="from_email" required />

          <label className="block mb-2" htmlFor="message">Message:</label>
          <textarea className="w-full p-2 border border-gray-300 rounded mb-4" id="message" name="message" required></textarea>

          <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600" type="submit">Send</button>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Contact;
