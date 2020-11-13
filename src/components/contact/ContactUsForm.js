import React from 'react'

const ContactUsForm = () => (
  <div className="form-contact-page">
    <form>
      <div className="field">
        <input placeholder="Your Name"/>
      </div>
      <div className="field">
        <input placeholder="Your E-mail"/>
      </div>
      <div className="field">
        <input placeholder="Subject"/>
      </div>
      <div className="field">
        <textarea placeholder="Your Message" rows="6"></textarea>
      </div>
      <button class="button-submit" type="submit">Submit</button>
    </form>
  </div>
)

export default ContactUsForm;
