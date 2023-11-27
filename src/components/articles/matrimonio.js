import { Link } from "react-router-dom"
import Footer from "../Footer"
import NavBar from "../NavBar"
import matrimonio from '../images/matrimonio.webp'
import '../styles/completeArticles.css'
import { useEffect, useState } from "react"
import Loader from "../Loader"
const Matrimonio=()=>{
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

        const loadingTimeout = setTimeout(() => {
          setLoading(false);
        }, 1000);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    
        return () => {
          clearTimeout(loadingTimeout);
        };
        
      }, []);
    return(
        <div>
            <NavBar/>
            {isLoading? (<Loader/>):
            (
                <>
                <div className="article">
                <div className="DivArticle">
                    <div>
                <h1 className="titlesArticles">El matrimonio y la pérdida del deseo sexual: ¿un destino obligado?</h1>
                <div>
<img className="ArticleImage" src={matrimonio}/>
</div>
                <p className="textArticles">Desde qué comenzaron las acciones bélicas en Gaza, casi ya un mes atrás, se ha desatado una guerra paralela entre partidarios de uno u otro bando, en Facebook, en foros de diarios, en mails, etc. Miles de comentarios, fotos, reportajes, vídeos que van desde posicionamientos respetuosos, históricos y reflexivos, a agresiones e insultos salvajes.

Como psicoanalista y tratando de ver un poco "más allá " de lo que se dice, lo primero que rescato es que prácticamente todo este material no tiene ningún efecto de cambio sobre el "oponente". El que está en una posición la mantiene,y desprecia y niega lo publicado por el que está en la otra

En síntesis, los que se puede constatar, es que cada uno de los que publica algo sobre este tema, lo hace para su "propia tropa". Esto, a mi criterio responde a la tendencia que tenemos los humanos de creer que existe una VERDAD, que de poseerla nos ubica en la senda del bien, de lo correcto, del éxito y de la felicidad.

En los hechos, se puede comprobar que a la verdad con minúscula se puede acceder con facilidad. Con un poco de sentido común y un poco de reflexión uno siente que "tiene razón". Es esa la verdad parcial.

A lo que nadie puede acceder es a la VERDAD con mayúscula, la verdad absoluta, sencillamente porque no existe.

Un juez para dictar sentencia, escucha la verdad de cada parte y después determina cual de ellas le parece que se ajusta más a derecho. Una parte por lo general siente que se hizo justicia y la otra repudia el veredicto porque siente que su verdad no fue escuchada.

Es muy probable que sí uno escucha la verdad de la gente de Palestina sentirá que tienen sus motivos para atacar y sentirse atacados por Israel. Y si escucha a los israelíes seguramente comprenderá los motivos que los llevan a esta guerra. Por todo esto, esta búsqueda de encontrar quienes tienen razón y quienes están equivocados, o de definir quienes son los buenos y quienes los malos, es una tarea absurda que no genera ningún beneficio para nadie.

Finalmente entonces, cada uno de nosotros podrá posicionarse desde el lugar que más represente sus creencias, sus valores, sus ideales o sus raíces, sin pretender que los otros deban adherirse por ser la suya la verdad única.

En mi caso personal yo apoyo a Israel. Apoyo a Israel porque lo conocí hace unos años y me pareció un país admirable.

Apoyo a Israel, porque soy judío y me siento muy bien de serlo. Israel es la única democracia de Medio Oriente, condición necesaria a mi entender para vivir con dignidad y progreso. Apoyo a Israel, porque en un territorio más chico que la provincia de Tucumán, exporta conocimientos y adelantos al nivel de los países más desarrollados. Muchos de los grandes avances en medicina, tecnología, ciencias, productos de agricultura provienen de Israel.

Muchísimos científicos, intelectuales en todas las áreas del conocimiento, premios Nobel, son israelíes.

Apoyo a Israel porque sé positivamente que ellos no quieren la guerra ni la buscan. Sería absurdo !! Si pudieran tener paz, el desarrollo israelí sería aún mayor

Desde su creación como estado, Israel, se tuvo que defender de todos los intentos de los países árabes de sacarlos de su territorio y en algunos casos del deseo de exterminarlos de la faz de la Tierra.

Cualquiera que lea la historia comprobará que jamás Israel comenzó alguna guerra.

Se también qué en Israel no existe el deseo de matar civilles ni niños, ni ancianos, y que la ofensiva de estos días es en defensa de su gente y no de querer agredir a sus vecinos que son desprotegidos por los terroristas que está totalmente comprobado, obligan a permanecer en los lugares desde donde atacan a Israel.

Rechazo la manera en que muchos palestinos enseñan a sus hijos desde pequeños a odiar a los judíos y a los israelíes.

Desde mi verdad con minúscula esta es una guerra entre un ejército regular, perfectamente identificable, contra un grupo guerrillero que no sólo no respeta los derechos humanos de los civiles israelíes, disparando cientos de cohetes y misiles diariamente, sino que tampoco respetan los derechos humanos de su propio pueblo. Es sabido el atraso y las costumbres medievales que imponen a su gente, y en definitiva son dictaduras que en el caso de Hamas además, son sanguinarias.

Pero volviendo a la otra guerra, la de las verdades escritas, me duele muchísimo comprobar cuánto antisemitismo se esconde debajo de gente que dice defender los derechos humanos y que Israel según su opinión, no los cumple.

Se puede comprobar fácilmente que arriba del 90% de lo que se escribe, revela una ignorancia absoluta del tema. Son sólo emociones disfrazadas de supuestos conocimientos que la mayoría de las personas no se toma el trabajo de investigar. Me duele la hipocresía de gente que convoca a boicotear a los productos israelíes, pero estoy seguro que no boicotean las vacunas que les dan a sus hijos y a ellos mismos que fueron desarrolladas en Israel. Estoy seguro que no boicotean las medicinas o los tratamientos médicos que sus familiares necesitan y que fueron descubiertos por científicos israelíes. Tampoco boicotean la enorme cantidad de programas de computación que utilizan todos los días y que son creados en Israel.

También me duele que ese antisemitismo disfrazado de sensibilidad humanitaria, denuncia a Israel por considerarlo un país que no respeta los derechos humanos, pero no se los ve desgarrados por los 150.000 sirios que han matado en este último año, ni parecen indignarse por las matanzas de los rusos en Ucrania, incluyendo el avión de Malasia con casi 300 muertos. Tampoco claman por el califato impuesto en parte de Irak y Siria donde están obligando a todas las mujeres a la ablación del clítoris, además de todo tipo de represión y crímenes por lapidación.

Ni se los escucha clamando por Venezuela que reprime brutalmente a los estudiantes que pretenden ejercer su derecho a protestar, y donde son torturados, muertos y encarcelados. Tampoco lo hacen por la Argentina en donde llegan a matar a un joven para robarle una bicicleta y todos los días hay crímenes absurdos sin que se escuche la indignación y el llamado a boicotear sus productos.

Porque valoro profundamente la democracia, la educación, la libertad y el progreso, es mi mayor deseo el que cada vez haya más países y sociedades como las de Israel, Canadá, Australia, Finlandia, Suecia, y cada vez menos países como son actualmente Irán, Siria, Corea del Norte o Venezuela.

Sentí la necesidad de compartir mi verdad, y desde allí dar un testimonio de alguien que no está en absoluto en contra de los palestinos, pero decididamente a favor de Israel. Gracias por haber leído esto.</p>
</div>


            </div>
            <Link to='/articles'><button className="buttonArticles">Volver</button></Link>
            </div>
                </>
            )}
            
            <Footer/>
        </div>
    )

}
export default Matrimonio