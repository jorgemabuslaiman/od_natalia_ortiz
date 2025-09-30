import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'
import MandibulaCepillado3D from "../components/mandibulaCepillado3D"
import { ListaServicios } from "../components/listaServicios"
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowDown, FaTooth } from 'react-icons/fa'

export const ServicesPage = () => {
  return (
    <div className='bg-main'>
      <NavbarComponent/>

      {/* Hero Section para Servicios */}
      <section className="services-hero">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="services-hero-icon">
                <FaTooth />
              </div>
              <h1 className="services-hero-title">Nuestros Servicios</h1>
              <p className="services-hero-subtitle">
                Cuidado dental integral con tecnología avanzada y atención personalizada
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <ListaServicios/>

      {/* Sección llamativa antes del modelo 3D */}
      <section className="interactive-learning-section">
        <Container>
          <Row>
            <Col>
              <div className="learning-card">
                <h2 className="learning-title">Aprendé a cuidar tu sonrisa</h2>
                <p className="learning-description">
                  Observá cómo un correcto cepillado puede mantener tus dientes sanos y prevenir problemas dentales. 
                  ¡Conoce la técnica correcta de manera interactiva!
                </p>
                <FaArrowDown className="bounce-arrow learning-arrow" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modelo 3D */}
      <section className="model-3d-section">
        <MandibulaCepillado3D/>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="cta-title">¿Necesitas alguno de estos servicios?</h2>
              <p className="cta-subtitle">
                Agenda tu consulta y recibe la atención personalizada que mereces
              </p>
              <a href="/contact" className="btn-primary-custom">Agendar Consulta</a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
