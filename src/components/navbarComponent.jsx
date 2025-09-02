import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {
  return (
    <div>
<Navbar className="bg-transparent">
  <Container fluid className="d-flex justify-content-end flex-wrap">
    <Nav className="d-flex flex-row flex-wrap gap-2">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/about">Conóceme</Nav.Link>
      <Nav.Link href="/services">Servicios</Nav.Link>
      <Nav.Link href="/testimonials">Testimonios</Nav.Link>
      <Nav.Link href="/contact">Contacto</Nav.Link>
    </Nav>
  </Container>
</Navbar>

    </div>
  )
}
