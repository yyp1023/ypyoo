import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ExperienceModal(props) {
  const expCheck = () => {
    if (props.experience === 'frontendDev') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Front-End Developer (Intern)</h1>
                            <div>Mazelone | Seoul, South Korea</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Maintained websites and applications including content updates, debugging, feature enhancements, testing and documentation.</li>
                            <li>Developed user interfaces with Angular Framework.</li>
                            <li>Collaborated with other developers and designers to develop the website.</li>
                            <li>Worked in Agile development environment using advanced Scrum methodologies.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    } if (props.experience === 'cook') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Cook</h1>
                            <div>Mr.Tonkatsu | Toronto, ON</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Obtained knowledge on basic kitchen safety.</li>
                            <li>Trained new hires on company procedure.</li>
                            <li>Provided feedback to management on recipe changes.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    } if (props.experience === 'squadCommander') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Squad Commander (Sergeant)</h1>
                            <div>5th Infantry Division | Seoul, South Korea</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Demonstrated a capacity for teamwork by coordinating with other soldiers.</li>
                            <li>Developed strength throughout various trainings.</li>
                            <li>Managed time to ensure that the mission was finished efficiently.</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    }
  }

  return (
    <div>
      {expCheck()}
    </div>
  );
}

export default ExperienceModal;