import React from 'react'
import bgSquare from '../../assets/image/bg-img.png';

const Home = () => (
  <section className="page-home">
    <div className="container">
      <div className="content-page-home content-page">
        <img src={bgSquare} alt="imagem de background" />
        <p>we are <strong>square</strong></p>
        <p>and we are <strong>coming soon</strong></p>
      </div>
    </div>
  </section>
)

export default Home;