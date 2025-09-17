//icono flotante de whatsapp donde tendra el texto "Pedir turno por aqui" al lado del icono

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícono oficial

const whatsappNumber = "5493814677805"; // Cambia esto por el número de tu clínica

const WhatsAppComponent = () => (
  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      right: "24px",
      bottom: "24px",
      zIndex: "9999",
      backgroundColor: "#25D366",
      borderRadius: "30px",
      padding: "0 20px 0 12px",
      height: "60px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "box-shadow 0.2s",
      gap: "12px",
      minWidth: "60px",
    }}
    aria-label="Chat por WhatsApp"
    tabIndex={0}
    onFocus={e => e.target.style.outline = "none"}
  >
    <FaWhatsapp size={32} color="#fff" />
    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "16px", whiteSpace: "nowrap", textDecoration: "none" }}>
      Pedir turno
    </span>
  </a>
);

export default WhatsAppComponent;