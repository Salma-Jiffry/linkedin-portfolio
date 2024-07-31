import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wxawee6', 'template_j0dut44', form.current, {
        publicKey: 'zYZG31ZtManlFLc3K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactpage' id='6'>
      <div className='con-heading'>Contact Me</div>
      <div className='con-container'>
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required></textarea>
          </div>
          <button type='submit' value='send'>Send</button>
        </form>
        <ul className='contact-list'>
          <li>
            <FaLinkedin />
            <span> <a href="https://www.linkedin.com/in/salma-jiffry">LinkedIn Profile</a></span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;