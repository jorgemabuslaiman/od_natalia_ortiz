import { HeaderComponent } from '../components/headerComponent'
import { NavbarComponent } from "../components/navbarComponent"
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaUserMd, FaHeart, FaSmile, FaClock, FaShieldAlt, FaAward } from 'react-icons/fa'
import '../App.css'

export const HomePage = () => {
  return (
    <div>
      <NavbarComponent/>
      <HeaderComponent/>
      
      {/* Sección de Valores */}
      <section className="values-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">¿Por qué elegir nuestra clínica?</h2>
              <p className="section-subtitle">
                "Sonreír es salud, y estamos para cuidarla"
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="card-custom h-100 text-center p-4">
                <div className="feature-icon">
                  <FaUserMd />
                </div>
                <Card.Body>
                  <Card.Title>Experiencia Profesional</Card.Title>
                  <Card.Text>
                    Más de 10 años brindando atención odontológica de calidad con las técnicas más avanzadas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="card-custom h-100 text-center p-4">
                <div className="feature-icon">
                  <FaHeart />
                </div>
                <Card.Body>
                  <Card.Title>Atención Personalizada</Card.Title>
                  <Card.Text>
                    Cada paciente es único. Brindamos un trato cercano y cuidado pensado especialmente para ti.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="card-custom h-100 text-center p-4">
                <div className="feature-icon">
                  <FaSmile />
                </div>
                <Card.Body>
                  <Card.Title>Sonrisas Radiantes</Card.Title>
                  <Card.Text>
                    Nuestro objetivo es que tengas una sonrisa sana, hermosa y que te haga sentir seguro.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Sobre la Doctora */}
      <section className="about-preview-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-content">
                <h2 className="section-title">Conoce a la Dra. Natalia Ortiz</h2>
                <p className="about-text">
                  "La Dra. Natalia Ortiz acompaña a cada paciente con dedicación y cercanía, 
                  ofreciendo una atención odontológica pensada para tu bienestar. Con 10 años de experiencia, 
                  su objetivo es que cada consulta sea una experiencia cómoda y segura."
                </p>
                <p className="about-text">
                  "Brindando soluciones sencillas y efectivas para que disfrutes de una sonrisa sana y radiante. 
                  Porque tu sonrisa merece lo mejor, en un espacio donde vas a sentirte cuidado y escuchado."
                </p>
                <a href="/about" className="btn-primary-custom">Conocer Más</a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-stats">
                <div className="stat-card">
                  <FaClock className="stat-icon" />
                  <h3>24/7</h3>
                  <p>Disponibilidad para emergencias</p>
                </div>
                <div className="stat-card">
                  <FaShieldAlt className="stat-icon" />
                  <h3>100%</h3>
                  <p>Protocolos de seguridad</p>
                </div>
                <div className="stat-card">
                  <FaAward className="stat-icon" />
                  <h3>500+</h3>
                  <p>Pacientes satisfechos</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="cta-title">¿Listo para tu nueva sonrisa?</h2>
              <p className="cta-subtitle">
                Agenda tu consulta hoy y comienza el camino hacia una sonrisa perfecta
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary-custom me-3">Agendar Cita</a>
                <a href="/services" className="btn-secondary-custom">Ver Servicios</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}