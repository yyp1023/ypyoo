import React, { useState } from 'react';
import ExperienceCss from '../Style/Experience.module.css';
import ExperienceModal from './ExperienceModal';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

function Experience() {
  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState('');

  return (
    <div className={ExperienceCss.wrapper} id='experience'>
      <h1 className={ExperienceCss.title}>
        <Fade bottom>Experience</Fade>
      </h1>
      <div className={ExperienceCss.list}>
        <Rotate top left>
          <Card body className={ExperienceCss.experience} onClick={() => {setShow(true); setExperience('frontendDev')}}>
            <h3>Front-End Developer</h3>
            <div>April 2021 - August 2021</div>
          </Card>
        </Rotate>
        <Rotate top right>
          <Card body className={ExperienceCss.experience} onClick={() => {setShow(true); setExperience('cook')}}>
            <h3>Cook</h3>
            <div>December 2018 - June 2019</div>
          </Card>
        </Rotate>
        <Rotate top left>
          <Card body className={ExperienceCss.experience} onClick={() => {setShow(true); setExperience('squadCommander')}}>
            <h3>Squad Commander</h3>
            <div>August 2016 - May 2018</div>
          </Card>
        </Rotate>
      </div>
      <ExperienceModal show={show} setShow={setShow} experience={experience} />
    </div>
  );
}

export default Experience;