import React from 'react';
import SkillCss from '../Style/Skill.module.css';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Skill() {
  return (
    <div className={SkillCss.wrapper} id='skill'>
      <h1 className={SkillCss.title}>
        <Fade bottom>Skill</Fade>
      </h1>
      <div className={SkillCss.flex}>
        <Zoom>
          <Card body className={SkillCss.frontend}>
            <h3 className={SkillCss.category}>Front-End</h3>
            <div className={SkillCss.flex}>
              <div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/html.png')} />
                  <div>HTML</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/js.png')} />
                  <div>Javascript</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/bootstrap.png')} />
                  <div>Bootstrap</div>
                </div>
              </div>
              <div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/css.png')} />
                  <div>CSS</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/react.png')} />
                  <div>React</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/angular.png')} />
                  <div>Angular</div>
                </div>
              </div>
            </div>
          </Card>
        </Zoom>
        <Zoom>
          <Card body className={SkillCss.backend}>
            <h3 className={SkillCss.category}>Back-End</h3>
            <div className={SkillCss.flex}>
              <div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/java.png')} />
                  <div>Java</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/python.png')} />
                  <div>Python</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/cs.png')} />
                  <div>C#</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/php.png')} />
                  <div>php</div>
                </div>
              </div>
              <div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/nodejs.png')} />
                  <div>NodeJS</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.img} src={require('../img/skill/mysql.png')} />
                  <div>MySQL</div>
                </div>
                <div className={SkillCss.item}>
                  <img className={SkillCss.mongodb} src={require('../img/skill/mongodb.png')} />
                  <div>MongoDB</div>
                </div>
              </div>
            </div>
          </Card>
        </Zoom>
      </div>
    </div>
  );
}

export default Skill;