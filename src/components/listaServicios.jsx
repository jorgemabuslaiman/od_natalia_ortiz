import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const servicios = [
  {
    nombre: "Limpieza profunda con ultrasonido",
    descripcion: "Elimina placa y sarro de manera eficaz, dejando tus dientes limpios y saludables."
  },
  {
    nombre: "Tratamiento de conductos",
    descripcion: "Resolvemos problemas de caries profundas o infecciones, preservando tu diente natural."
  },
  {
    nombre: "Arreglos dentales",
    descripcion: "Reparación de dientes dañados o fracturados para restaurar la funcionalidad y estética."
  },
  {
    nombre: "Brackets",
    descripcion: "Alineación de dientes con tecnología moderna, logrando sonrisas armoniosas y saludables."
  },
  {
    nombre: "Ortopedia y alineadores invisibles",
    descripcion: "Opciones cómodas y estéticas para corregir la posición de los dientes sin afectar tu vida diaria."
  },
];

export const ListaServicios = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Mis servicios</h2>
      <Row>
        {servicios.map((servicio, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{servicio.nombre}</Card.Title>
                <Card.Text>{servicio.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
