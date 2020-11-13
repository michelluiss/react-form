import React from 'react'
import bgSquare from '../../assets/image/bg-img.png';
import Countdown from 'react-countdown';

const Home = () => (
  <section className="page-home">
    <div className="container">
      <div className="content-page-home content-page">
        <div>
          <img src={bgSquare} alt="imagem de background" />
          <p>we are <strong>square</strong></p>
          <p>and we are <strong>coming soon</strong></p>
        </div>
        <Countdown date={new Date('03/14/2021')} renderer={renderer} />
      </div>
    </div>
  </section>
)

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="count-timer">
      <div className="time-wrapper">
        <div className="time">{days}</div>
        <div>Days</div>
      </div>
      <div className="time-wrapper">
        <div className="time">{hours}</div>
        <div>Hours</div>
      </div>
      <div className="time-wrapper">
        <div className="time">{minutes}</div>
        <div>Minutes</div>
      </div>
      <div className="time-wrapper">
        <div className="time">{seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  )
};

export default Home;