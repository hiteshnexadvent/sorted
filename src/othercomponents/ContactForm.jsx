import React from "react";
import './contact.css'

const ContactForm = () => {
  return (
    <div>
          <form className="contact-form">
              
              <div className="name">
                  <div>
                  <label htmlFor="name">Full Name</label>
              </div>
              <div>
                  <input type="text" name="name" placeholder="Full Name" />
              </div>
              </div>
              <div className="name">
                  <div>
                  <label htmlFor="email">Email</label>
              </div>
              <div>
                  <input type="email" name="email" placeholder="Email" />
              </div>
              </div>
              <div className="name">
                  <div>
                  <label htmlFor="subject">Subject</label>
              </div>
              <div>
                  <input type="text" name="subject" placeholder="Subject" />
              </div>
              </div>
              <div className="msg">
                  <div>
                  <label htmlFor="msg">Message</label>
              </div>
              <div>
                  <textarea name="msg" placeholder="How we may assist you?" rows="7" cols='60' ></textarea>
              </div>
              </div>

              <button>Send Your Message</button>

          </form>
    </div>      
  );
};

export default ContactForm;
