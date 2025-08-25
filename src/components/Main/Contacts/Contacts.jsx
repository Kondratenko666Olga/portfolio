import './Contacts.scss';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contacts({ onClose }) {
  const form = useRef();
  const recaptchaRef = useRef();
  const [status, setStatus] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        e.target.reset();
        recaptchaRef.current.reset();
        setCaptchaValue(null);
      },
      (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts-inner">
          <button className="contacts-close" onClick={onClose}>
            ×
          </button>
          <h2 className="contacts-title title">
            Please leave your contact details so that I can get back to you.
          </h2>
          <div className="contacts-form">
            <form ref={form} className="register-form" onSubmit={sendEmail}>
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="phone" placeholder="Phone number" />
                <input type="text" name="address" style={{ display: 'none' }} />
              </div>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
                ref={recaptchaRef}
                className="contacts-captcha"
              />
              <button type="submit">Submit now</button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
