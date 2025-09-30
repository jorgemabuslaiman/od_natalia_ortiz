import { Container, Row, Col } from 'react-bootstrap';
import { FaStethoscope, FaHeart, FaSmile } from 'react-icons/fa';
import fotoImg from '../img/Foto.jpg';
import '../App.css'

export const HeaderComponent = () => {
  return (
    <div className="header-section">
      <Container fluid className="px-0">
        <Row className="g-0 align-items-center min-vh-100">
          <Col lg={6} className="order-lg-2">
            <div className="header-image-container">
              <div 
                className="imagen_principal" 
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(54, 7, 22, 0.6) 0%, rgba(54, 7, 22, 0.2) 30%, rgba(54, 7, 22, 0) 50%), url(${fotoImg})`
                }}
              ></div>
              <div className="header-overlay">
                <div className="floating-icons">
                  <FaStethoscope className="floating-icon icon-1" />
                  <FaHeart className="floating-icon icon-2" />
                  <FaSmile className="floating-icon icon-3" />
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="order-lg-1">
            <div className="header-content">
              <div className="header-badge">
                <span>✨ Más de 10 años de experiencia</span>
              </div>
              
              <h1 className="header-title">
                Tu <span className="texto_destacado">sonrisa perfecta</span> está aquí
              </h1>
              
              <p className="header-subtitle">
                Cuidado dental profesional con calidez humana. 
                La Dra. Natalia Ortiz te acompaña en cada paso hacia una sonrisa saludable y radiante.
              </p>
              
              <div className="header-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Pacientes Satisfechos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Años de Experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Soporte de Emergencia</div>
                </div>
              </div>
              
              <div className="header-actions">
                <a href="/contact" className="btn-primary-custom">
                  Agendar Cita
                </a>
                <a href="/about" className="btn-secondary-custom">
                  Conocer Más
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
