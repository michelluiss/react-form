import React from 'react'
import ShareSocialMedia from '../../components/shared/ShareSocialMedia'

const Contact = () => (
  <section className="page-contact">
    <div className="west-side">
      <div className="container">
        <h1>Contact <strong>Us</strong></h1>
        <div className="content-text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="content-info">
          <p><strong>Adress:</strong>123 Palo Alto, Palo Alto, CA 94300</p>
          <p><strong>Phone:</strong>+1 234-567-8910</p>
          <p><strong>E-mail:</strong>contact@yourdomain.net</p>
        </div>
        <ShareSocialMedia/>
      </div>
    </div>
    <div className="east-side">
    </div>
  </section>
)

export default Contact;
