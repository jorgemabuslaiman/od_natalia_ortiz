import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTooth } from "react-icons/fa"; // Icono de diente
import '../App.css';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <Container className="text-center d-flex flex-column justify-content-center align-items-center h-100 px-3">
        <Row>
          <Col>
            <h1 className="error-code">404</h1>
            <h2 className="error-message">¡Ups! Esta sonrisa se perdió...</h2>
            <p className="error-desc">
              La página que buscás no existe. Mientras tanto, podés volver al inicio y seguir cuidando tu sonrisa.
            </p>

            {/* Diente centrado */}
            <div className="tooth-icon-container my-4">
              <FaTooth className="tooth-icon" />
            </div>

            {/* Botón debajo del diente */}
            <div className="button-container">
              <Button 
                style={{ backgroundColor: '#9b1d3a', border: 'none' }} 
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
