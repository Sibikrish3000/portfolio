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
  const [longitude,setLong]=useState('');
  const [latitude,setLat]=useState('');
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    // Set the browser's user agent
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLat(lat);
        setLong(long);
        //console.log("Latitude:", lat);
        //console.log("Longitude:", long);
  
        
  
        //getLocationFromLatLng(lat, lon);
        //getLocationFromLatLng();
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("An unknown error occurred.");
        }
      },
      {
        timeout: 5000,
        maximumAge: 60000,
        enableHighAccuracy: true,
      }
    ); 
    setUserAgent(navigator.userAgent);

    // Fetch IP address from a public API
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setClientIp(data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
        setClientIp('Unavailable');
      }
    };

    fetchIp();
    
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.time('formSubmit');
    setLoading(true);
    //console.log('Client IP:', clientIp);
    //console.log('User Agent:', userAgent);

    const formData = {
      name,
      email,
      message,
      ip: clientIp,
      useragent: userAgent,
      Latitude:latitude,
      Longitude:longitude,


    };
    //console.log(formData)
    const bearerToken = process.env.REACT_APP_AUTH_TOKEN;
    console.time('fetchRequest');
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(formData),
      });
      console.timeEnd('fetchRequest');
      if (response.ok) {
        console.time('stateUpdates');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        console.timeEnd('stateUpdates');
        

        toast.success('Email successfully sent!', {
          position: 'bottom-center',
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
    }finally {
      setLoading(false); // Reset loading state after submission attempt
    }
    console.timeEnd('formSubmit'); 
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
            onChange={() => {
              setIsHuman(true);
              console.log('CAPTCHA validated at', new Date().toISOString());
            }}
          />
          <button type="submit" disabled={!message} className="contact__button button" >
          {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
