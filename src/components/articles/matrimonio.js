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
                <p className="textArticles">Muchas parejas temen confesarse que han perdido interés sexual por el otro porque asocian esa ausencia de ganas con el fin del amor y la amenaza de una separación. Sin embargo, el deseo sexual se alimenta del erotismo y no del amor, y basta con avivar algunos fuegos y plantear algunos cambios para que los calores vuelvan a avivar el vínculo.</p>
                <p className="textArticles">Son muchas las parejas que consultan afectadas por una pérdida del deseo sexual. En general, expresan falta de motivación y excitación, que los lleva a conductas evitativas respecto al posible deseo del otro. Es decir: temen que su pareja pueda buscarlos sexualmente y tratan de evitarlo generando actividades que los demore a la hora del posible encuentro.</p>
                <p className="textArticles">Esta falta de incentivo sexual se puede dar en ambos miembros de la pareja o en uno solo, y las causas que desmoronan el deseo son múltiples. A su vez, suele suceder que el deseo perdido no se da en forma absoluta, sino que lo han perdido con su pareja, manteniendo, en cambio, fantasías o vínculos excitantes con otras personas conocidas o desconocidas.</p>
                <p className="textArticles">Por lo general, estas parejas evitan hacer frente a la situación durante un largo período de tiempo, y recién lo hacen cuando el ocultamiento se hace insostenible. Cada vez que queda en evidencia la falta de deseo o interés, tratan de atribuirlo a factores externos como el trabajo, el cansancio, los chicos, etc.</p>
                <p className="textArticles">Este interés por ocultar la situación se explica porque hay una tendencia a asociar el deseo sexual con el amor y la valoración del otro. Por lo tanto, decirle a la pareja que desde hace tiempo que no siente interés sexual es sentido como una expresión de desamor. La fantasía subyacente es provocarle una herida dolorosa que, entonces, se intenta evitar.</p>
                <p className="textArticles">En este punto, es importante destacar que la asociación amor-deseo sexual no es necesariamente válida, y que la pérdida de interés no tiene por qué implicar en todos los casos una pérdida amorosa.</p>
                <p className="textArticles">Hay ciertos modelos erróneos acerca de la sexualidad que crean una expectativa de funcionamiento difícil de lograr. Veamos: primero, no es necesario el enamoramiento para que se despierte el deseo sexual. A su vez, a la inversa podríamos afirmar que la falta de deseo sexual no tiene por qué implicar necesariamente un desenamoramiento.<span className="boldText"> No es el amor la base del deseo sexual, sino el erotismo...</span></p>
                <p className="textArticles">Cuando una pareja pierde el deseo sexual, podemos encontrar el amor preservado, pero es seguro que ese vínculo ha perdido la cualidad de lo erótico. Definimos a lo erótico como aquel estímulo externo o interno del ser humano, capaz de despertar excitación o deseo sexual.</p>
                <p className="textArticles">Si el deseo sexual no se alimenta del amor, sino del erotismo, ¿de qué se alimenta el erotismo? Existen muchas condiciones de lo erótico, pero destaco fundamentalmente cuatro:</p>
                <p className="textArticles"> 
                <li>Novedad</li>
                <li>Transgresion</li>
                <li>Variedad</li>
                <li>Fantasia</li>
                </p>
                <p className="textArticles">Una pareja que recién se conoce y que transita la etapa de fascinación amorosa tendrá seguramente intensificados estos elementos y se necesitará muy poco para generar el deseo. Pero cuando ha pasado tiempo y ciertas rutinas se han instalado en el vínculo muchas parejas sienten que han perdido o disminuido su deseo sexual, y que la pasión se ha transformado en ternura.</p>
                <p className="textArticles">Tomando los cuatro componentes mencionados, podemos entender que "novedad" ya no hay, y tampoco queda el encanto de lo "prohibido": transgresión, cero. Es frecuente, también, que se hayan acostumbrado a una modalidad de acercarse, acariciarse o amarse que, por lo general, se presenta sin grandes variaciones; o sea, que el tercer elemento -la variedad- también se pierde. El último de ellos, la fantasía, genera contradicciones: muchos sienten que si necesitan de la fantasía para poder estimularse sexualmente, esto es un signo de pérdida de amor. Por lo tanto, se evita y ese cuarto elemento también se pierde.</p>
                <p className="textArticles">Entonces... Si el erotismo es la base del deseo sexual y varios de sus componentes quedarán irremediablemente perdidos a partir de que el vínculo se profundice y estabilice,<span className="boldText"> ¿es posible mantener el erotismo en una pareja pasado cierto tiempo y conocimiento de uno con el otro? </span> Mi respuesta es afirmativa. Creo positivamente que el erotismo puede ser sostenido a partir de un abordaje diferente de lo sexual.</p>
                <p className="textArticles">El ser humano, por lo general, quiere lograr una forma de vida donde el placer se le ofrezca en forma espontánea, sin necesidad de hacer ningún esfuerzo y desconfía cuando aquello que debía generarse naturalmente, no se produce. Si bien es cierto que muchas necesidades y deseos cumplen con estos requisitos -el hambre y el sueño, por ejemplo- hay otras que requieren de un aprendizaje y preparación especial, sobre todo si se las quiere vivir en plenitud.</p>
                <p className="textArticles">En este sentido, sostengo la creencia de que las cosas buenas son caras. Si llevamos lo dicho al terreno de lo sexual, diremos que para hacer el amor no se necesita de un gran aprendizaje, pero hacerlo bien es todo un arte. No es lo mismo “hacer algo para comer, que hacer de una comida un momento especial y pleno", como tampoco es lo mismo tener una relación sexual como una necesidad fisiológica de descarga o tener un encuentro sexual donde cada uno conoce sus tiempos y los del otro, y el manejo de las variables eróticas que sostengan vivo el deseo y el placer.</p>
                <p className="textArticles">Una pareja que reconozca que el erotismo es algo amenazado en la estabilidad y que no se angustie ante los signos de pérdida de deseo creyendo erróneamente que se deterioró el amor, y que concientice la necesidad de sostener este erotismo a través de la comunicación, la comprensión y el aprendizaje, podrá recuperar su deseo sexual, adentrándose en una relación con la vida y el sexo que, aunque mas costosa, es mucho más plena y placentera.</p>
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