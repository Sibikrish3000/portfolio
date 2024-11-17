import React, { useState, useEffect } from 'react';
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
  const [userAgent, setUserAgent] = useState('');
  const [clientIp, setClientIp] = useState('Fetching...');

  useEffect(() => {
    // Set the browser's user agent
    setUserAgent(navigator.userAgent);

    // Fetch the client IP asynchronously
    const fetchIp = async () => {
      const ip = await getLocalIp();
      setClientIp(ip || 'Unavailable');
    };

    fetchIp();
  }, []);

  const getLocalIp = () => {
    return new Promise((resolve) => {
      const peerConnection = new RTCPeerConnection();
      peerConnection.createDataChannel('');
      peerConnection.createOffer().then((offer) => peerConnection.setLocalDescription(offer));
      peerConnection.onicecandidate = (event) => {
        if (event && event.candidate) {
          const ipMatch = event.candidate.candidate.match(/(\d{1,3}\.){3}\d{1,3}/);
          if (ipMatch) {
            resolve(ipMatch[0]);
            peerConnection.close();
          }
        }
      };

      // Fallback if no IP is found
      setTimeout(() => resolve('Unavailable'), 5000); // 5-second timeout
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the current client IP and User Agent
    console.log('Client IP:', clientIp);
    console.log('User Agent:', userAgent);

    const formData = {
      name,
      email,
      message,
      ip: clientIp,
      useragent: userAgent,
    };
    console.log('Client IP:', clientIp);
    console.log('User Agent:', userAgent);
    
    const bearerToken = process.env.REACT_APP_AUTH_TOKEN;

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        throw new Error('Form submission error');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting form');
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
          <button type="submit" disabled={!message} className="contact__button button">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
