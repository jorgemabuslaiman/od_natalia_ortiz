import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* Columna izquierda: info de contacto */}
          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <p className="mb-1">📍 Direccion: Balcarce 197, T4000 San Miguel de Tucumán, Tucumán</p>
            <p className="mb-1">📞 Telefono (solo whatsapp): 3814677805</p>
          </Col>

          {/* Columna derecha: redes sociales */}
          <Col md={4} className="mb-3 text-center text-md-end">
            <h5>Seguinos</h5>
            <a 
              href="https://www.instagram.com/od.nataliaortiz?igsh=MTJuN24xN3hpeTg1dQ==" className="text-light fs-4 me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="fs-4 me-3" style={{ color: "#E1306C" }} />
            </a>
            <a 
              href="https://www.tiktok.com/@nataliaortiz256?_t=ZM-8zMkavk3u2q&_r=1" className="text-light fs-4" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="fs-4" style={{ color: "#000000" }} />
            </a>
          </Col>

        </Row>

        {/* Línea de copyright */}
        <Row className="pt-3 border-top border-secondary mt-3">
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Od. Natalia Ortiz. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
