import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HeaderCss from '../Style/Header.module.css';

function Header() {
  return (
    <div className={HeaderCss.header}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className={HeaderCss.home} to="home" spy={true} smooth={true} offset={-55} duration={50}>YOUNG PYUNG YOO</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link>
                <Link className={HeaderCss.link} to="home" spy={true} smooth={true} offset={-55} duration={50}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={HeaderCss.link} to="education" spy={true} smooth={true} offset={-55} duration={50}>Education</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={HeaderCss.link} to="experience" spy={true} smooth={true} offset={-55} duration={50}>Experience</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={HeaderCss.link} to="skill" spy={true} smooth={true} offset={-55} duration={50}>Skill</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={HeaderCss.link} to="project" spy={true} smooth={true} offset={-55} duration={50}>Project</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={HeaderCss.link} to="contact" spy={true} smooth={true} offset={-55} duration={50}>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;