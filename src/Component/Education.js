import React from 'react';
import EducationCss from '../Style/Education.module.css';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

function Education() {
  return (
    <div className={EducationCss.wrapper} id='education'>
      <h1 className={EducationCss.title}>
        <Fade bottom>Education</Fade>
      </h1>
      <div>
        <Flip left><img className={EducationCss.img} src={require('../img/gbc.png')} /></Flip>
      </div>
      <h2 className={EducationCss.gbc}>George Brown College</h2>
      <h3 className={EducationCss.t127}>T127 - Computer Programmer Analyst</h3>
      <h4 className={EducationCss.date}>September 2019 - April 2022</h4>
    </div>
  );
}

export default Education;