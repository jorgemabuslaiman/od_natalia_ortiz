import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import { FooterComponent } from './components/footerComponent'
import { HomePage } from './pages/homePage'
import { AboutComponent } from './pages/aboutComponent'
import { ServicesPage } from './pages/servicesPage'
import { TestimonialsPage } from './pages/testimonialsPage'
import { ContactPage } from './pages/contactPage'
import {ErrorPage} from './pages/errorPage'
import WhatsAppComponent from './components/whatsappComponent'
import { useEffect } from 'react'

function App() {
  // Forzar colores contra DarkReader
  useEffect(() => {
    const forceStyles = () => {
      // Forzar colores de fondo
      document.body.style.setProperty('background-color', '#fbfbf1', 'important');
      document.body.style.setProperty('background', '#fbfbf1', 'important');
      document.body.style.setProperty('background-image', 'none', 'important');
      
      // Forzar en secciones específicas
      const sections = document.querySelectorAll('.values-section, .about-preview-section, .interactive-learning-section, .model-3d-section, .bg-main');
      sections.forEach(section => {
        section.style.setProperty('background-color', '#fbfbf1', 'important');
        section.style.setProperty('background', '#fbfbf1', 'important');
        section.style.setProperty('background-image', 'none', 'important');
      });

      // Forzar colores de texto
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      textElements.forEach(element => {
        element.style.setProperty('color', '#360716', 'important');
      });

      const bodyTextElements = document.querySelectorAll('p, span, div:not(.bg-main), li, .about-text, .section-subtitle, .learning-description');
      bodyTextElements.forEach(element => {
        element.style.setProperty('color', '#1a1a1a', 'important');
      });
    };

    // Ejecutar inmediatamente
    forceStyles();
    
    // Ejecutar cada 100ms para combatir DarkReader
    const interval = setInterval(forceStyles, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#fbfbf1', 
      background: '#fbfbf1',
      backgroundImage: 'none',
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/testimonials' element={<TestimonialsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <WhatsAppComponent/>
      <FooterComponent/>
    </div>
  )
}

export default App
