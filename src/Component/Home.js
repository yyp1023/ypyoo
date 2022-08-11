import React from 'react';
import Typed from 'react-typed';
import HomeCss from '../Style/Home.module.css';
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <div className={HomeCss.wrapper} id='home'>
      <div className={HomeCss.wrapper2}>
        <div>
          <img className={HomeCss.img} src={require('../img/me.jpg')} />
        </div>
        <div>
          <h2>
            Hi! My name is
          </h2>
          <h1 className={HomeCss.name}>
            <Typed strings={['Young Pyung Yoo']} typeSpeed={70} loopCount={1} />
          </h1>
        </div>
        <h3 className={HomeCss.intro}>
          <Fade delay={1500} bottom>I am a George Brown College graduate</Fade>
          <br />
          <Fade delay={1500} bottom>who wants to be a full stack web developer</Fade>
        </h3>
      </div>
    </div>
  );
}

export default Home;