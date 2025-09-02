import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'

export const AboutComponent = () => {
  return (
    <div className='bg-main'>
        <NavbarComponent/>
        <p className='texto_centrado'>“Sobre mí: Cuidando tu sonrisa con dedicación y pasión”</p>

        <p className='texto_centrado'>
          “Soy la Dra. Natalia Ortiz, odontóloga con más de 10 años de experiencia ayudando a pacientes a mantener una sonrisa sana y radiante. Mi enfoque combina conocimientos actualizados, tecnología moderna y un trato cercano para que cada visita sea cómoda y confiable.”
        </p>

        <p className='texto_centrado'>
          “Más allá de la odontología, me apasiona la buena musica, las series atrapantes, hacer deporte y seguir estudiando, lo me permite mantener el equilibrio y la creatividad en mi día a día. Estos valores los aplico en mi práctica, asegurando atención personalizada, cuidado y dedicación en cada consulta. Porque tu sonrisa merece lo mejor y quiero que te sientas acompañado en cada paso de tu cuidado dental.”
        </p>
        
    </div>
  )
}
