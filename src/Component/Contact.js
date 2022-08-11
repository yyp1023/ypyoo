import React, { useRef, useState } from 'react';
import ContactCss from '../Style/Contact.module.css';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          e.target.reset();
          alert('Email sent to Young Pyung!');
      }, (error) => {
          alert('Error occured. Please try again.');
      });
  };

  return (
    <div className={ContactCss.wrapper} id='contact'>
      <h1 className={ContactCss.title}>
        <Fade bottom>Contact</Fade>
      </h1>
      <h3>Write me a message!</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className={ContactCss.field}>
          <div>Name</div>
          <input className={ContactCss.input}  type="text" name="name" />
        </div>
        <div className={ContactCss.field}>
          <div>Email</div>
          <input className={ContactCss.input} type="email" name="email" />
        </div>
        <div className={ContactCss.field}>
          <div>Message</div>
          <textarea className={ContactCss.input} name="message" />
        </div>
        <input className={ContactCss.submit} type="submit" value="Send" />
      </form>
      <div className={ContactCss.contact}>
        <OverlayTrigger placement='top' overlay={<Tooltip className={ContactCss.fixed}>Github</Tooltip>}>
          <button className={ContactCss.btn}><a href='https://github.com/yyp1023' target='_blank'><BsGithub /></a></button>
        </OverlayTrigger>
        <OverlayTrigger placement='top' overlay={<Tooltip className={ContactCss.fixed}>LinkedIn</Tooltip>}>
          <button className={ContactCss.btn}><a href='https://www.linkedin.com/in/young-pyung-yoo-016290238/' target='_blank'><BsLinkedin /></a></button>
        </OverlayTrigger>
        <OverlayTrigger placement='top' overlay={<Tooltip className={ContactCss.fixed}>Copy Email</Tooltip>}>
          <button className={ContactCss.btn} onClick={() => {navigator.clipboard.writeText('youngpyung7@gmail.com')}}><a><AiOutlineMail /></a></button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Contact;