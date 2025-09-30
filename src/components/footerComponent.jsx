import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaWhatsapp, FaClock, FaHeart } from "react-icons/fa";
import '../App.css';

export const FooterComponent = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="footer-main">
          {/* Información de la Doctora */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h4 className="footer-title">Dra. Natalia Ortiz</h4>
              <p className="footer-description">
                Cuidado dental profesional con más de 10 años de experiencia. 
                Tu sonrisa es nuestra prioridad.
              </p>
              <div className="footer-feature">
                <FaHeart className="feature-icon-small" />
                <span>Atención personalizada y cercana</span>
              </div>
            </div>
          </Col>

          {/* Información de Contacto */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-subtitle">Contacto</h5>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Balcarce 197, San Miguel de Tucumán, Tucumán</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <span>381 467-7805 (Solo WhatsApp)</span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>Lun-Vie: 9:00-18:00 | Sáb: 9:00-13:00</span>
              </div>
            </div>
          </Col>

          {/* Redes Sociales */}
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-subtitle">Seguinos</h5>
              <p className="social-description">
                Consejos, tips y novedades sobre salud dental
              </p>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/od.nataliaortiz?igsh=MTJuN24xN3hpeTg1dQ==" 
                  className="social-link instagram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Seguinos en Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@nataliaortiz256?_t=ZM-8zMkavk3u2q&_r=1" 
                  className="social-link tiktok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Seguinos en TikTok"
                >
                  <FaTiktok />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">
              © {new Date().getFullYear()} Od. Natalia Ortiz. Todos los derechos reservados.
            </p>
            <p className="developed-by">
              Desarrollado con <FaHeart className="heart-icon" /> por Junior's Software
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
