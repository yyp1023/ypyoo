import React, { useState } from 'react';
import ProjectCss from '../Style/Project.module.css';
import Fade from 'react-reveal/Fade';
import ProjectModal from './ProjectModal';
import Slide from 'react-reveal/Slide';

function Project() {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState('');

  return (
    <div className={ProjectCss.wrapper} id='project'>
      <h1 className={ProjectCss.title}>
        <Fade bottom>Project</Fade>
      </h1>
      <div className={ProjectCss.flex}>
        <div>
          <Slide left>
            <div onClick={() => {setShow(true); setProject('onlinemarket')}}>
              <img className={ProjectCss.img} src={require('../img/project/onlinemarket1.png')} />
            </div>
          </Slide>
          <Slide left>
            <div onClick={() => {setShow(true); setProject('sportspro')}}>
              <img className={ProjectCss.img} src={require('../img/project/sportspro1.png')} />
            </div>
          </Slide>
        </div>
        <div>
          <Slide right>
            <div onClick={() => {setShow(true); setProject('chatbot')}}>
              <img className={ProjectCss.img} src={require('../img/project/chatbot1.png')} />
            </div>
          </Slide>
          <Slide right>
            <div onClick={() => {setShow(true); setProject('ypyoo')}}>
              <img className={ProjectCss.img} src={require('../img/project/ypyoo1.png')} />
            </div>
          </Slide>          
        </div>
      </div>
      <ProjectModal show={show} setShow={setShow} project={project} />
    </div>
  );
}

export default Project;