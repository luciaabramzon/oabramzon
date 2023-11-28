
import './styles/articles.css'
import articles from './images/articles.webp'
import { Link } from 'react-router-dom'
const Articles=()=>{
    return(
        <div className='articles' id='articulos'>
        <div className='articlesDiv'>
            <h3 className='articlesTitle'>Articulos</h3>
            <p className='articleText'>La pluma de Oscar Abramzon no se limita a las páginas de libros; se extiende a una amplia variedad de temas a través de numerosos artículos a lo largo de su carrera. Su habilidad para tejer palabras se ha reflejado en contribuciones en diversas áreas, desde la psicología hasta la política, y más allá.</p>
           <p className='articleText'>En el ámbito de la psicología, ha escrito artículos que exploran los intrincados mecanismos de la mente humana, brindando perspectivas únicas sobre el autoconocimiento y el bienestar emocional. Su experiencia como psicoanalista se traduce en palabras que no solo informan, sino que también inspiran a aquellos que buscan comprender más profundamente su propio ser.</p>
           <p className='articleText'>Además, ha abordado temas políticos con agudeza y discernimiento. Sus escritos ofrecen análisis reflexivos sobre cuestiones contemporáneas, invitando a la reflexión y al diálogo constructivo. Su enfoque equilibrado y su capacidad para presentar diversas perspectivas hacen que sus artículos sean una lectura enriquecedora para aquellos interesados en comprender el complejo panorama político.</p>
           <p className='articleText'>La diversidad de los intereses de se refleja en la amplitud de temas que abarcan sus artículos. Desde la psicología hasta la política, desde la sociedad hasta la cultura, ha compartido su sabiduría a través de escritos que despiertan la mente y desafían las percepciones convencionales.</p>
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