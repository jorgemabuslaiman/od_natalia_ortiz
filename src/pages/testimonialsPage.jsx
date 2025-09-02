import { NavbarComponent } from "../components/navbarComponent"
import '../App.css'
import { ReviewComponent } from "../components/reviewComponent"

export const TestimonialsPage = () => {
  return (
    <div className='bg-main'>
        <NavbarComponent/>
        <p className='texto_centrado'>AQUI INCLUIR COMENTARIOS TRAIDOS DE GOOGLE</p>
        <ReviewComponent/>
    </div>
  )
}
