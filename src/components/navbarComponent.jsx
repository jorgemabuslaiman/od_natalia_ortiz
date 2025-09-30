import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import LogoComponent from './LogoComponent';
import '../App.css';

export const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar 
        className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
        expand="lg"
        fixed="top"
      >
        <Container fluid className="px-3 px-lg-5">
          <Navbar.Brand href="/" className="navbar-brand-custom">
            <LogoComponent className="brand-logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="navbar-toggler-custom"
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav-custom">
              <Nav.Link href="/" className="nav-link-custom">Inicio</Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom">Conóceme</Nav.Link>
              <Nav.Link href="/services" className="nav-link-custom">Servicios</Nav.Link>
              <Nav.Link href="/testimonials" className="nav-link-custom">Testimonios</Nav.Link>
              <Nav.Link href="/contact" className="nav-link-custom btn-nav-contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Spacer para compensar el navbar fixed */}
      <div style={{ height: '80px' }}></div>
    </div>
  )
}
