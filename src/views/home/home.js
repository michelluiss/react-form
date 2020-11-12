import React from 'react'
import CountTimer from '../../components/CountTimer'

const Home = () => (
  <section className="page-home">
    <div className="container">
      <div className="content-page-home">
        <p>we are <strong>square</strong></p>
        <p>and we are <strong>coming soon</strong></p>
      </div>
      <CountTimer></CountTimer>
    </div>
  </section>
)

export default Home;