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
    <p className='textAbout'>Con una sólida carrera en psicología, Oscar Abramzon, argentino de origen, reside en Punta del Este, donde ha establecido su hogar y práctica profesional. Con más de 30 años de experiencia, ha ganado respeto como profesional en el ámbito de la psicología. Su enfoque en el psicoanálisis le ha permitido explorar las complejidades de la mente humana, ofreciendo orientación valiosa en el viaje hacia el autoconocimiento.</p>

<p className='textAbout'>Además de su dedicación a la psicología, es conocido por su habilidad como escritor, con artículos que abordan temas relacionados con la psicología, la salud mental y la búsqueda de equilibrio emocional. Sus escritos reflejan su conocimiento en el campo y ofrecen perspectivas sobre la complejidad de la mente humana.</p>

<p className='textAbout'>Su obra principal, "La Contradicción", examina diversas contradicciones de la vida, proporcionando una perspectiva única sobre los desafíos y misterios que enfrentamos en nuestro viaje existencial.</p>

    </div>
    </div>
    
)
}

export default AboutMe