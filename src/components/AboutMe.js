import './styles/aboutme.css'
import aboutMe from './images/acercademi.webp'
import aboutMeMobile from './images/aboutMeMobile.webp'
const AboutMe=()=>{
return(

    <div className="aboutMe" id='aboutme'>
    <div className='imageAboutDiv'>
    <img className='imageAbout' src={aboutMe}/>
    <img className='imageAboutMobile' src={aboutMeMobile}/>
    </div>
    <div className='textAboutDiv'>
    <p className='textAbout'>Con una trayectoria destacada en el campo de la psicología, Oscar Abramzon ha establecido su hogar y práctica en la encantadora Punta del Este.</p>

<p className='textAbout'>Con una experiencia de más de 30 años en el ámbito de la psicología, se ha ganado una reputación como profesional altamente respetado. Su enfoque en el psicoanálisis le ha permitido explorar las complejidades de la mente humana, brindando orientación valiosa en el viaje hacia el autoconocimiento.</p>

<p className='textAbout'>Además de su dedicación a la psicología, es conocido por su destacada habilidad como escritor. Su pasión por las palabras se refleja en la creación de numerosos artículos que abordan temas relacionados con la psicología, la salud mental y la búsqueda de equilibrio emocional. Sus escritos no solo demuestran su profundo conocimiento en el campo, sino que también ofrecen perspectivas únicas sobre la complejidad de la mente humana.</p>
<p className='textAbout'>Su obra principal, "La Contradicción", examina y explora diversas contradicciones de la vida, proporcionando una perspectiva única sobre los desafíos y misterios que enfrentamos en nuestro viaje existencial.</p>

<p className='textAbout'>Originario de Argentina, Oscar Abramzon ha encontrado inspiración en Punta del Este, un lugar que ha influido significativamente en su vida personal y profesional. La belleza de este entorno se integra en sus métodos terapéuticos, buscando armonizar la salud mental con la serenidad de la naturaleza.</p>

<p className='textAbout'>A lo largo de su carrera, ha demostrado que su su objetivo es contribuir al bienestar emocional y mental, proporcionando herramientas y perspectivas que permitan a las personas alcanzar una vida plena y significativa.

</p>
    </div>
    </div>
    
)
}

export default AboutMe