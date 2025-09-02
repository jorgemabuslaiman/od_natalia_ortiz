import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'
import MandibulaCepillado3D from "../components/mandibulaCepillado3D"
import { ListaServicios } from "../components/listaServicios"
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowDown } from 'react-icons/fa'

export const ServicesPage = () => {
  return (
    <div className='bg-main'>
      <NavbarComponent/>

      <ListaServicios/>

      {/* Sección llamativa antes del modelo 3D */}
      <Container className="my-5 py-5 text-center bg-light rounded shadow">
        <Row>
          <Col>
            <h2 className="mb-3">Aprendé a cuidar tu sonrisa</h2>
            <p className="mb-4">
              Observá cómo un correcto cepillado puede mantener tus dientes sanos y prevenir problemas dentales. 
              ¡Conoce la técnica correcta de manera interactiva!
            </p>
            {/* Flecha animada hacia abajo */}
            <FaArrowDown className="fs-1 text-primary bounce-arrow" />
          </Col>
        </Row>
      </Container>

      {/* Modelo 3D */}
      <MandibulaCepillado3D/>

    </div>
  )
}
