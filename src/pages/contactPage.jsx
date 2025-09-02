import { NavbarComponent } from "../components/navbarComponent";
import { FooterComponent } from "../components/footerComponent";
import WhatsappButton from "../components/whatsappComponent";

export const ContactPage = () => {
  return (
    <div className="bg-main">
      <NavbarComponent />
      <div className="container py-5">
        <h2 className="texto_centrado">Contacto y Consultas</h2>
        <p className="texto_centrado">
          “Estoy a tu disposición para consultas y asesoramiento odontológico. Completá el formulario o utilizá los datos de contacto a continuación para agendar tu cita.”
        </p>
        <p className="texto_centrado">Información de contacto:</p>
        <ul>
          <li>Teléfono: 3814677805</li>
          <li>Dirección: Pcia de Córdoba 209, T4000 San Miguel de Tucumán, Tucumán</li>
        </ul>
        <p className="texto_centrado">
          Tu confianza es importante. Me comprometo a responder con rapidez y dedicación para ayudarte a cuidar tu sonrisa.
        </p>
      </div>

      <WhatsappButton /> {/* Botón flotante */}
    </div>
  );
};
