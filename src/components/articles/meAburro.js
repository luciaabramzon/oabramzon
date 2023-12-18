import { Link } from "react-router-dom"
import Footer from "../Footer"
import NavBar from "../NavBar"
import aburrimiento from '../images/aburrimiento.jpg'
import '../styles/completeArticles.css'
import { useEffect, useState } from "react"
import Loader from "../Loader"
const MeAburro=()=>{
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
                <h1 className="titlesArticles">¿Porqué me aburro?</h1>
                <div>
<img className="ArticleImage" src={aburrimiento}/>
</div>
                <p className="textArticles">Para aquellos profesionales que trabajamos en el campo de la psicología, nos es habitual escuchar a pacientes que se encuentran en un tratamiento terapéutico, un cuestionamiento referido a sentir el paso del tiempo sin grandes cambios en sus vidas, o con la sensación de que nada importante les ocurre en su cotidianeidad.</p>
                <p className="textArticles">La sensación para muchos es de chatura, aburrimiento, o en el mejor de los casos, de un bienestar tranquilizador, aunque con la sensación de un cierto vacío. Consideran que hay otras formas de vivir que no pueden definir claramente como son, pero igualmente sienten que algo que podría ser mas apasionante, se lo están perdiendo.</p>
                <p className="textArticles">En ese sentido, no se trata necesariamente de gente que se sienta deprimida o frustrada, sino trabada, desmotivada, o con cierta sensación de intrascendencia de su vida, sin ilusiones ni grandes expectativas.</p>
                <p className="textArticles">Quisiera intentear en este artículo, hacer un pequeño desarrollo que sirviera como punto de partida para una mejor comprensión de cual es la estructura base, para que dicha inmovilidad ocurra y que podría ser una probable causa de tal sensación de vacío.</p>
                <p className="textArticles">En primer término, no se nos escapa lo más obvio de un planteo de esta naturaleza, que es el hecho de que todo cambio está propulsado por una motivación. Sin motivación no hay cambio. Esta motivación en el campo de la psicología lo relacionamos con el nuclear tema del deseo. El cumplimiento de deseos conscientes o inconscientes, es el determinante esencial del sentido de nuesta existencia. El hombre se siente vivo, en tanto tenga deseos. Un hombre sin deseos enferma y muere.</p>
                <p className="textArticles">La inevitable condición humana de incompletitud nos llev a buscar permanentemente lo que nos falta y esa búsqueda está sostenida por el deseo. En este punto cabe destacar que no todos los desos son del mismo orden ni tampoco de la misma intensidad. Quisiera dar aquí un ejemplo, que creo, puede clarificar lo dicho y nos permite adelantarnos en el tema que estamos abordando.</p>
                <p className="textArticles">Una persona recibe una invitación para ir a vern un espectáculo. El programa le resulta tentador, ya que las críticas son excelentes y los protagonistas prestigiosos. Esta persona entonces, se crea una expectativa de placer, que en el momento que se realice el espectáculo, se cumplirá o no. Si se cumple, seguramente obtendrá el placer esperado. Pero si por algún motivo, el espectáculo se suspende, o no cumple con las expectativas previstas, habrá sensación de displacer y frustración, aunque probablemente no acarree ningún tipo de consecuencias más allá de la desilusión. A este tipo de deseo, yo lo llamo "expectativa de placer".</p>
                <p className="textArticles">De la misma forma, si dicha persona concurre a una fiesta y conoce a una persona sumamente atractiva y esta persona le despierta un fuerte deseo sexual, probablemente genere cierto tipo de fantasías respecto de todas las cosas que quisiera vivir con ella, fantasías que si se cumplen, seguramente serán muy placenteras y a la inversa, si no se cumplen será seguramente una frustración, pero probablemente el malestar no trascienda más allá de un breve tiempo y esta persona continuará con sus actividades regularmente al día siguiente. También aquí, habría una "expectativa de placer" cumplida o frustrada.</p>
                <p className="textArticles">Sintéticamente, si bien en las expectativas de placer, hay involucradas motivaciones que indudablemente debemos incluirlas dentro de lo que llamamos deseos, yo hago esta distinción entre "deseos" y "expectativas de placer", donde estas últimas están limitadas a la producción de placer-displacer y donde su cumplimiento no constituye un hecho de trascendencia en la estructura vital del ser.</p>
                <p className="textArticles">Lo que llamamos deseo propiamente dicho, de otro orden. Su incumplimiento trastorna la existencia. Si una persona establece una relación del orden del deseo, tendrá la sensación de que nada puede ser igual sin su cumplimiento, y la vida mental de la persona estará ocupada por la necesidad de realizar los movimientos necesarios a fin de dar cumplimiento a dicho deseo. Estamos realmente frente a lo que se considera una necesidad ieludible. Nada será igual si se cumple y nada será igual si no se cumple.</p>
                <p className="textArticles">Muchas formas de depresión se originan luego de verse frustrado algún deseo.</p>
                <p className="textArticles">Obviamente, las diferencias en las magnitudes motivacionales entre los deseos y las expectativas de placer son abismales. Estas últimas son más pobres, menos comprometidsa, más contingentes.</p>
                <p className="textArticles">A partir de aquí, uno puede hacer el ejercicio de discriminar en su vida cuales motivaciones pueden ser incluidas dentro de las expectativas de placer y cuales como deseos propiamente dichos.</p>
                <p className="textArticles">Una vez establecidas estas diferencias, creo que podemos seguir avanzando e la dirección establecida, para intentar relacionar lo dicho con el planteo inicial de aquellas personas que sienten cierta falta de motivación o de estimulos movilizantes.</p>
                <p className="textArticles">La energía puesta en marcha en los llamados deseos propiamente dichos, podemos llamarla pasión. Una persona apasionada entonces, es aquella que siente una intensa fuerza interior en la búsqueda de sus deseos. No se requiere pasión en las expectativas de placer.</p>
                <p className="textArticles">Al asociar pasión con deseo, es factible que muchos sostengan la idea. que el ser más o menos apasionados es una cuestión constitucional, es decir algunas personas nacen más apasionadas que otras, por lo que poco se puede hacer con aquello que nació  con uno y probablemente muera con uno. </p>
                <p className="textArticles">Mi posición al respecto difiere con dicha suposición. Considero que toda persona posee potencialmente la capacidd de apasionarse y el hecho de que lo haga o no dependerá de que bloquee o no esta posibilidad. En ese entido podríamos considerar que hay personas que inhiben inconscientemente su posibilidad de desplegar grandes magnitudes de energía (pasiones), como una forma de defenderse de miedos ligados a lo que llamamos "la castración".</p>
                <p className="textArticles">Esto significa que hay personas que no pueden afrontar cierto tipo de frustraciones, ya que lo viven como una experiencia traumática. Si una persona siente que no puede soportar un fracaso, puede evitar quedar expuesto a situaciones que lo puedan frustrar.</p>
                <p className="textArticles">Sintéticamente, podemos sostener que lo que Freud definía como castración, es la sensación frustrante de lo que nos falta y sentimos que no podremos tener nunca, o el "miedo a la castración", como aquello que sí poseemos, pero que no estamos seguros que lo poseeremos siempre, o tenemos temor que alguien pueda castrarnos, es decir sacarnos lo poseído y dejarnos en falta.</p>
                <p className="textArticles">Ejemplifiquemos esto a fin de no dejar dudas al respecto. Si alguien ilusiona algo que desearía obtener o vivenciar, pero siente que no tiene los medios para lograrlo, con la sensación que nunca los tendrá, y esto le produce una sensación dolorosa de inferioridad, comparándose con aquellos que sí pueden obtener lo deseado por él, estaríamos ante la llamada "angustia de castración". Si en cambio una persona posee por ejemplo, un buen trabajo, con un buen ingreso económico, pero sin embargo se priva de darse los gustos que quiere, porque teme que el día de mañana pierda lo que tiene, y no se siente seguro de como serán las condiciones de vida, y esto produce angustia sostenida acompañada de una intranquilidad que lo aleja de sus posibilidades de vivenciar plenamente el presente, seria este un caso de "miedo de castración"</p>
                <p className="textArticles">En sintesis, hay gente que siente la frustración de lo que no tiene con una certeza de que nunca lo tendrá, y hay gente que se angustia pensando que lo que tiene no es seguro y puede perderlo.</p>
                <p className="textArticles">Este último es a mi entender, quien se acerca a la posibilidad de chatura, la desmotivación o el aburrimiento.</p>
                <p className="textArticles">Rearmando todo lo expuesto hasta aquí, podríamos pensarlo así:</p>
                <p className="textArticles">Aquel que tiene miedo a perder, prefiere no arriesgarse. Los deseos propiamente dichos, exigen una gran inversión, por lo tanto un gran riesgo. Si uno prefiere no arriesgar, reducirá inconscientemente (sin saberlo) sus deseos o expectativas. A partir de esto, sus vivencias quedarán limitadas al placer o displacer, sin mayor trascendencia existencial. Es decir entonces, que se moverá en un campo relativamente seguro pero también de escasa movilidad y escasa pasión, generando más "expectativas de placer" que "deseos".</p>
                <p className="textArticles">La consecuencia probable de esto será el aburrimiento, la pasividad o la sensación de cierta chatura o desmotivación.</p>
                <p className="textArticles">Desde esta perspectiva, sería un error intentar motivarse sugiriendo "alguna idea divertida" para hacer, ya que el aburrimiento no sería la consecuencia de la falta de creatividad, sino del miedo a la pérdida, que refugiará a alguien en el lugar más seguro, más tranquilo, más conocido, más previsible.</p>
                <p className="textArticles">Es muy frecuente escuchar a la gente comentando sus sueños respecto del lugar donde les gustaría vivir, las personas con quien quisieran estar, las experiencias que quisieran vivenciar. ¿Pero cuántas de esas personas juegan por sus sueños?. Probablemente muy pocas. La gran mayoría encuentra una excusa convincente para explicarse a sí mismos y a quien quiera escucharlos, que no pueden hacerlo (motivos económicos, familiares, responsabilidades, motivos laborales, emocionales, etc). Dichos sueños quedan por lo tanto postergados para "otra vida", para cuando sean viejos, o para cuando ganen la lotería.</p>
                <p className="textArticles">Resumiendo entonces, diría que el aburrimiento no es la consecuencia de que hay personas que nacen más creativas que otras, o más vitales que otras, ni más motivadas que otras, sino que la vida más plena, más vital y más creativa dependerá de la superación de los miedos a la pérdida (castración), asumiendo el riesgo del deseo, lo que significa que aburrirse es haber elegido sin saber una supuesta seguridad (no siempre real) a costa de la pasión y los sueños. Para terminar, quien no se arriesga, se aburre.</p>
                




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
export default MeAburro