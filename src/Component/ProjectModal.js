import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import ProjectModalCss from '../Style/ProjectModal.module.css';

function ProjectModal(props) {
  const projectCheck = () => {
    if (props.project === 'ypyoo') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Portfolio Website</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo1.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo2.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo3.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo4.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo5.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo6.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo7.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/ypyoo8.png')} />
                            </Carousel.Item>
                        </Carousel>
                        <div className={ProjectModalCss.description}>
                            This website was programmed in React, mainly focused on user interface and visual effect.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light"><a className={ProjectModalCss.decoration} href={'https://github.com/yyp1023/ypyoo'} target='_blank'>Github</a></Button>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    } if (props.project === 'sportspro') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Sports Pro</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel variant='dark'>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro1.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro2.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro3.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro4.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro5.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro6.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/sportspro7.png')} />
                            </Carousel.Item>
                        </Carousel>
                        <div className={ProjectModalCss.description}>
                            With ASP.Net Core MVC by a team of 3, we created a website that holds a database for products, technicians, customers, incidents, and registrations. We made a secured website that articulates the data with MVC Architecture.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light"><a className={ProjectModalCss.decoration} href={'https://github.com/yyp1023/sportsPro'} target='_blank'>Github</a></Button>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    } if (props.project === 'chatbot') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Chatbot</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel variant='dark'>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot1.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot2.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot3.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot4.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot5.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/chatbot6.png')} />
                            </Carousel.Item>
                        </Carousel>
                        <div className={ProjectModalCss.description}>
                            We created a chatbot web app using React and NodeJS Express framework by a team of 3. We utilized DialogFlow to provide information within the IT Clan's data regarding the customers' queries. When the customer's question is far beyond the chatbot's knowledge, it can hand in the customer to a real agent.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light"><a className={ProjectModalCss.decoration} href={'https://github.com/yyp1023/chatbot'} target='_blank'>Github</a></Button>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    } if (props.project === 'onlinemarket') {
        return (
            <div>
                <Modal show={props.show} onHide={() => {props.setShow(false)}} size='lg' centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h1>Online Market</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel variant='dark'>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/onlinemarket2.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/onlinemarket3.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/onlinemarket1.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/onlinemarket4.png')} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={require('../img/project/onlinemarket5.png')} />
                            </Carousel.Item>
                        </Carousel>
                        <div className={ProjectModalCss.description}>
                            This project's goal was to build a fully functional CRUD operation website using React, NodeJS Express and MongoDB. I utilized Firebase for user authentication and to store user information which is managed by Redux.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light"><a className={ProjectModalCss.decoration} href={'https://github.com/yyp1023/onlineMarket'} target='_blank'>Github</a></Button>
                        <Button variant="secondary" onClick={() => {props.setShow(false)}}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    }
  }

  return (
    <div>
      {projectCheck()}
    </div>
  );
}

export default ProjectModal;