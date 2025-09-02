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
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "box-shadow 0.2s",
    }}
    aria-label="Chat por WhatsApp"
  >
    <FaWhatsapp size={32} color="#fff" />
  </a>
);

export default WhatsAppComponent;