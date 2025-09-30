import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import '../App.css';

const whatsappNumber = "5493814677805";

const WhatsAppComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Mostrar animación inicial después de 3 segundos
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me gustaría agendar una consulta odontológica. ¿Cuándo tienen disponibilidad?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="whatsapp-container">
      {isExpanded && (
        <div className="whatsapp-chat-bubble">
          <div className="chat-header">
            <div className="chat-info">
              <div className="chat-name">Dra. Natalia Ortiz</div>
              <div className="chat-status">En línea</div>
            </div>
            <button 
              className="chat-close" 
              onClick={handleToggle}
              aria-label="Cerrar chat"
            >
              <FaTimes />
            </button>
          </div>
          <div className="chat-message">
            <p>¡Hola! 👋</p>
            <p>¿En qué puedo ayudarte hoy? Estoy aquí para responder tus consultas sobre nuestros servicios odontológicos.</p>
          </div>
          <button 
            className="chat-button"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp /> Iniciar Conversación
          </button>
        </div>
      )}
      
      <button
        className={`whatsapp-fab ${showAnimation ? 'pulse' : ''}`}
        onClick={isExpanded ? handleWhatsAppClick : handleToggle}
        aria-label="Chat por WhatsApp"
      >
        <FaWhatsapp />
        {!isExpanded && (
          <span className="whatsapp-text">Pedir turno</span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppComponent;