
import './styles/articles.css'
import articles from './images/articles.webp'
import { Link } from 'react-router-dom'
const Articles=()=>{
    return(
        <div className='articles' id='articulos'>
        <div className='articlesDiv'>
            <h3 className='articlesTitle'>Articulos</h3>
            <p className='articleText'>La escritura de Oscar Abramzon no se limita a las páginas de los libros; abarca una amplia variedad de temas a través de numerosos artículos a lo largo de su carrera. Su habilidad para tejer palabras se refleja en contribuciones que exploran desde la psicología hasta la política.

</p>
           <p className='articleText'>En el ámbito de la psicología, sus artículos exploran los mecanismos de la mente humana, ofreciendo perspectivas sobre el autoconocimiento y el bienestar emocional. Su experiencia como psicoanalista se traduce en palabras que informan e inspiran.</p>
           <p className='articleText'>Además, aborda temas políticos con agudeza y discernimiento, ofreciendo análisis reflexivos sobre cuestiones contemporáneas. Sus escritos invitan a la reflexión y al diálogo constructivo, destacando su enfoque equilibrado y su capacidad para presentar diversas perspectivas.</p>
           <p className='articleText'>Explora los artículos de y sumérgete en un mundo de ideas, reflexiones y conocimientos que abrazan la riqueza y complejidad de la experiencia humana.</p>
           <button className='articleButton'><Link to='articles'> Ver Articulos</Link></button>
        </div>
        <div className='articleImagesDiv'>
        <img src={articles} className='articleImage'/>
        </div>
        </div>
    )
}

export default Articles