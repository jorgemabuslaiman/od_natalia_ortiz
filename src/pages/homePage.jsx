import { HeaderComponent } from '../components/headerComponent'
import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const HomePage = () => {
  return (
    <div className='bg-main'>

        <HeaderComponent/>
        <NavbarComponent/>

        <p className='texto_centrado'>“Sonreír es salud, y estamos para cuidarla”</p>

        <p className='texto_centrado'>
          “La Dra. Natalia Ortiz acompaña a cada paciente con dedicación y cercanía, ofreciendo una atención odontológica pensada para tu bienestar. Con 10 años de experiencia, su objetivo es que cada consulta sea una experiencia cómoda y segura, brindando soluciones sencillas y efectivas para que disfrutes de una sonrisa sana y radiante. Porque tu sonrisa merece lo mejor, en un espacio donde vas a sentirte cuidado y escuchado.”
        </p>

    </div>
  )
}
