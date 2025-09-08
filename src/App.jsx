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

function App() {

  return (
    <>
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
    </>
  )
}

export default App
