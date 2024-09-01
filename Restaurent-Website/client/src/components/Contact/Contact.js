import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <h1 className="contact-heading wrapper-background">
        Contact <span className="contact-sub-heading">Us</span>
      </h1>

      <div className="container">
        <div className="contact-inner">
          <div className="map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.0130118794!2d79.07251014999999!3d21.16108585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717837303927!5m2!1sen!2sin"
              width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mqkrvrpj"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="submit" />
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
