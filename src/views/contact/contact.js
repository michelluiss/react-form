import React from 'react'
import ShareSocialMedia from '../../components/shared/ShareSocialMedia'
import ContactUsForm from '../../components/contact/ContactUsForm'

const Contact = () => (
  <section className="page-contact">
    <div className="box-bg">
      <div className="bg-west-side"></div>
      <div className="bg-east-side"></div>
    </div>
    <div className="container">
      <div className="content-page">
        <div className="west-side">
          <h1>Contact <strong>Us</strong></h1>
          <div className="content-text">
            <p className="border">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="content-info">
            <p><strong>Adress:</strong>123 Palo Alto, Palo Alto, CA 94300</p>
            <p><strong>Phone:</strong>+1 234-567-8910</p>
            <p><strong>E-mail:</strong>contact@yourdomain.net</p>
          </div>
          <ShareSocialMedia/>
        </div>
        <div className="east-side">
          <ContactUsForm></ContactUsForm>
        </div>
      </div>
    </div>
  </section>
)

export default Contact;
