import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import { ContainerSucces } from './ContactStyles';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isHuman, setIsHuman] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    //console.log("ENV VARIABLES:", process.env);

    const bearerToken = process.env.REACT_APP_AUTH_TOKEN;
    //console.log(`AUTH_TOKEN: ${bearerToken}`);
    try {
      const response = await fetch("https://automated-email-sibikrish.vercel.app/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (await response.ok) {
        setSubmitted(true); // Set submitted state to true
        setName('');
        setEmail('');
        setMessage('');

        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        });
      } else {
        throw new Error("Form submission error");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form");
    }
  };

  return submitted ? (
    <ContainerSucces>
      <h3>Thanks for getting in touch!</h3>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setSubmitted(false);
        }}
      >
        Back to the top
      </button>
      <ToastContainer />
    </ContainerSucces>
  ) : (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form id="contactForm" onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="contact__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="contact__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id="message"
            placeholder="Message"
            className="contact__input"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <ReCAPTCHA
            align="center"
            sitekey="6Lf15nwqAAAAAFPGUOE5N9U-TaoXhPS3iE7vujFo"
            onChange={() => setIsHuman(true)}
          />
          <button type="submit" disabled={!message || !isHuman} className="contact__button button">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;