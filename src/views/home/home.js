import React from 'react'
import CountTimer from '../../components/CountTimer'
import bgSquare from '../../assets/image/bg-img.png';

const Home = () => (
  <section className="page-home">
    <img src={bgSquare} alt="imagem de background" />
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