import { Link } from "react-router-dom"
import Footer from "../Footer"
import NavBar from "../NavBar"
import matrimonio from '../images/matrimonio.webp'
import '../styles/completeArticles.css'
import { useEffect, useState } from "react"
import Loader from "../Loader"
const PsicologiaEnVacaciones=()=>{
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
                <h1 className="titlesArticles">Psicologia para leer en vacaciones</h1>
                <div>

</div>
                <p className="textArticles">Nuevamente llegó el verano y con él, las tan deseadas vacaciones.</p>
                <p className="textArticles">La playa, el sol, los baños de mar, la tentadora gastronomía que nos vuelve a recibir, invitándonos a pasar un tiempo a puro placer y esparcimiento.</p>
                <p className="textArticles">Podemos entonces en este tiempo, alejarnos de nuestras rutinas habituales y es quizás, un momento oportuno para hacer algunas reflexiones que nos permitan evaluar si nuestra vida cotidiana se está desarrollando acorde a nuestras expectativas y deseos o deberíamos plantearnos la necesidad de modificar algunas variables que nos permitan sentir que tenemos una vida plena.</p>
                <p className="textArticles">Les propongo entonces el ejercicio de plantearles <span className="boldText">algunos puntos que considero útiles para una auto reflexión,</span>  donde cada uno de ustedes pueda definir el grado de identificación y el grado de satisfacción o insatisfacción en que se encuentran con respecto a ellos.</p>
                <p className="textArticles">¿Comenzamos?</p>

                <h2 className="titlesArticles">Punto 1: ¿Cuánto te resuena esta frase que tanta gente dice al final de sus vacaciones?</h2>
                <p className="textArticles">“Terminó lo bueno, hay que volver a la realidad”</p>
                <p className="textArticles">¿La escuchaste?</p>
                <p className="textArticles">¿La usas?</p>
                <p className="textArticles">Vamos a tomarnos unos minutos para descifrar el sentido psicológico que esta frase contiene.</p>
                <p className="textArticles">Si luego de unos días de vacaciones me invade cierto pesar porque se acerca la vuelta a la “realidad”, por oposición, considero que estos días han sido “irreales”. </p>
                <p className="textArticles">Porqué entonces, consideraría como irreal el poder relajarme, descansar, tomarme mi tiempo, o elegir lo que quiero hacer?</p>
                <p className="textArticles">Quizás sería más pertinente tener la consciencia que no tengo la posibilidad de vivir todo el año de vacaciones. Pero de allí a considerar que no es “real este tiempo” habría una gran diferencia.</p>
                <p className="textArticles">Quizás alguno de ustedes considere que esta frase es solo una expresión semántica, sin profundidad, y que solo expresa la vuelta al mundo de los compromisos y obligaciones.</p>
                <p className="textArticles">¡Puede ser!</p>
                <p className="textArticles">Pero en otros casos puede expresar un desagrado, o en algunos, un profundo desagrado con el modelo de vida que uno vive todo el año hasta la llegada de las vacaciones.</p>
                <p className="textArticles">En síntesis, Podemos hacer aquí la primera evaluación acerca de cómo defino “mi realidad”</p>
                <p className="textArticles"> 
                <li>Me gusta</li>
                <li>No me gusta</li>
                <li>Me equivoqué en mis elecciones</li>
                <li>No puedo elegir</li>
                <li>Cambiaría muchas cosas</li>
                <li>Cambiaría algunas cosas</li>
                <li>No cambiaría nada</li>
                <li>No me doy cuenta</li>
                </p>
                <p className="textArticles">Teniendo en cuenta la cantidad de factores psicológicos, culturales, religiosos, económicos, afectivos que influyen en nuestro criterio de “realidad”, es que esta primera evaluación nos puede abrir un camino reflexivo para determinar si necesito o no cambiar algunos aspectos de mi vida cotidiana, y si entiendo que de necesitarlo, puedo hacerlo sólo o necesitaría la ayuda de alguien para determinar el “qué” y el “cómo” de este cambio.</p>
                <p className="textArticles">A partir de abordar este primer punto, podemos ahora continuar el punto segundo, entendiendo que al abordar esta nueva pregunta, me ayudará a definir mejor la primera.</p>
                <p className="textArticles">Vamos a preguntarnos entonces lo siguiente:</p>
                
                <h2 className="titlesArticles">Punto 2: ¿A qué grupo poblacional considero que pertenezco?</h2>
                <p className="textArticles">No se me escapa que esta pregunta puede referirse a una gran cantidad de categorías. Pero en este caso apunto a la categoría de las posibilidades de elección.</p>
                <p className="textArticles">Vamos a ponerlo en estos términos:</p>
                <p className="textArticles">Si consideramos a la población mundial, sabemos que hay un porcentaje muy alto de personas que, por su condición social, económica, cultural o religiosa, nacen en un medio donde no van a tener la posibilidad de elegir cómo van a vivir</p>
                <p className="textArticles">No van a poder elegir estudios, actividades, en algunas culturas no eligen con quién casarse o en donde vivir. Ese gran número de personas no va a poder hacer lo que quiera y tendrán que hacer lo que puedan.</p>
                <p className="textArticles">Del otro lado de esta población, hay una cantidad bastante menor que la primera, de personas que por su condición social, económica, cultural, sí van a poder elegir y desarrollar un modelo de vida acorde a sus deseos, vocación, talento, donde también elegirán su mundo afectivo, social y hasta geográfico. </p>
                <p className="textArticles">Estas personas, se supone que no tendrán que limitarse a hacer lo que puedan y por el contrario construirán un modelo basado en lo que deseen. No hace falta aclarar que poder elegir, supone una situación privilegiada sobre los otros, con muchísimas más posibilidades de tener una “realidad” satisfactoria y plena.</p>
                <p className="textArticles">El punto aquí es que quienes trabajamos en el campo de lo psicológico nos encontramos a menudo con el hecho de que un altísimo porcentaje de las personas que pueden elegir, viven su vida como si pertenecieran al grupo que no lo pueden hacer.</p>
                <p className="textArticles">Se quejan de su trabajo, de los problemas que tienen, de su vida amorosa, de su familia, de su entorno o de sus malas condiciones de vida</p>
                <p className="textArticles">Están insatisfechos, desmotivados, irritados, sienten estar condenados a vivir como no les gusta, y en general, siempre están envueltos en conflictos y en malestar permanente. </p>
                <p className="textArticles">Finalmente, solo una minoría de la “minoría” de la población que puede elegir, valora ese privilegio y lo agradece sintiendo algo así como “estar de fiesta con la vida”.</p>
                <p className="textArticles">Dicho todo esto, podemos cada uno de nosotros tratar de definir cuál consideramos como nuestra pertenencia:</p>
                <p className="textArticles"> 
                <li>A la población que no puede elegir</li>
                <li>A la población que puede elegir</li>
                <li>A la población que puede elegir cómo vivir, pero la percibe como si no pudiera</li>
                <li>A la población que puede elegir y hace valer ese privilegio</li>
                <li>A la población que no puede elegir a pesar de lo cual siente que tiene una vida muy agradable </li>
                <li>Difícil de definir en este momento</li>
                </p>
                <p className="textArticles">Poder definir claramente este punto, puede ayudar, y mucho, para avanzar sobre el sentido de estas reflexiones, que en definitiva es poder saber cómo entiendo mi “realidad”y como puedo en caso que lo considere necesario, intentar un cambio para lograr una condición más satisfactoria de mi vida.</p>
                <p className="textArticles">A partir de todo lo ya expresado podemos pasar a la tercera pregunta en estas reflexiones veraniegas.</p>

                <h2 className="titlesArticles">Punto 3: ¿Cómo administro el uso de mi tiempo?</h2>
                <p className="textArticles">Es este, en mi concepción, un punto clave para que cada uno de nosotros pueda definir con mayor claridad el significado de “mi realidad”</p>
                <p className="textArticles">Quisiera comenzar este punto con un ejemplo que creo puede aclarar lo que quiero rescatar como reflexión.</p>
                <p className="textArticles">Supongamos una joven que busca empleo, y consigue un puesto en una tienda de ropa, como vendedora, cumpliendo un horario de 10 a 18 hs. de lunes a sábados.</p>
                <p className="textArticles">¿Qué significa esto en términos de tiempo?</p>
                <p className="textArticles">Significa que, de lunes a sábados, de 10 a 18 hs. Ella vendió su tiempo. No le pertenece. Le pagan por eso y deberá responder haciendo aquello para lo que fue contratada. </p>
                <p className="textArticles">Esta joven no puede a las 11 hs irse a tomar un café con una amiga, ni puede a las 15 hs irse al cine o a dormir una siesta si está cansada. Probablemente tampoco pueda chatear con su novio porque es probable que en el horario de trabajo no le permitan usar el celular.</p>
                <p className="textArticles">Cómo decía antes, vendió su tiempo y no tiene autonomía sobre él.</p>
                <p className="textArticles">Ahora, a las 18:01 minutos, nuevamente recupera la posesión de su tiempo y ahora sí, si lo desea, puede encontrarse con su amiga, ir al cine, dormir, chatear con su novio, o lo que le plazca. Es de suponer que los sábados a las 18:01 minutos, tenga una satisfacción aún mayor , ya que gozará de autonomía de su tiempo hasta el lunes a la mañana.</p>
                <p className="textArticles">Hay mucha gente que habla de la depresión del domingo, generada probablemente porque es la antesala del inicio de la semana, donde nuevamente habrá que relegar sus deseos personales en función del tiempo vendido. </p>
                <p className="textArticles">Hay personas que tienen necesidad de tener 2 trabajos, lo cual presupone que, entre el tiempo vendido, el dormir, y los traslados, esas personas prácticamente no tienen disponibilidad de tiempo autónomo.</p>
                <p className="textArticles">Cabe aquí hacer una aclaración para evitar un malentendido. Yo usé el ejemplo de una empleada y quizás se crea que esto no comprende a quienes son propietarios que pueden tener flexibilidad en el uso de su tiempo.</p>
                <p className="textArticles">La respuesta es negativa. Tanto comerciantes, empresarios, profesionales, estudiantes, y otros, asumimos compromisos y responsabilidades que operan como tiempo vendido.</p>
                <p className="textArticles">Y son muchísimas las personas que más allá del tiempo cronológico, tienen vendido su tiempo mental a mandatos psicológicos inconscientes, y se incomodan cuando tienen tiempo autónomo (libre). Esas personas se auto reprochan (sus jueces internos) de estar “improductivos” y si se relajan y no se exigen hacer nada que no tengan ganas, terminan culpándose por considerar al ocio como tiempo “desaprovechado”.</p>
                <p className="textArticles">Aquí podríamos plantear la hipótesis que lo mejor que nos puede pasar es que haya un buen equilibrio entre nuestro tiempo vendido y nuestro tiempo autónomo.</p>
                <p className="textArticles">Sumado a eso, es altamente positivo que nuestro tiempo vendido sea en actividades que nos causan placer, con lo cual, lo disfrutamos y no lo padecemos.</p>
                <p className="textArticles">Y a su vez que nuestro tiempo propio lo podamos disfrutar sin culpas haciendo lo que queremos o “haciendo nada” si es lo que nos da placer.</p>
                <p className="textArticles">A esta altura de esta reflexión, ya podemos visualizar por qué las vacaciones representan para tanta gente “irrealidad” y la “realidad” es como sumergirse en un mundo poco atractivo.</p>
                <p className="textArticles">Aclarado esto podemos hacernos las preguntas que nos ayudan a identificarnos con la percepción que tenemos de nuestra realidad.</p>
                <p className="textArticles"> 
                <li>¿Cómo es la relación entre mi tiempo vendido y mi tiempo propio?</li>
                <li>¿Qué tan placentero o displacentero es mi tiempo vendido?</li>
                <li>¿Qué tan placentero o displacentero es mi tiempo propio?</li>
                <li>¿Cuánta libertad tengo para hacer en mi tiempo propio sólo lo que quiero?</li>
                <li>¿Cuánto me reprocho de no hacer todo lo productivo que podría en mi tiempo propio acusándome de estar desaprovechando y perdiendo el tiempo?</li>
                </p>
                <p className="textArticles">Es esta nuevamente una oportunidad para concientizar cómo administro mi tiempo, qué ajustes tendría que hacer para mejorar el equilibrio o la calidad y disfrute de mi tiempo y si puede encarar este tiempo solo/a, debo buscar apoyo en alguien que me acompañe en las transformaciones que son necesarias para mejorar “mi realidad”.</p>
                <p className="textArticles">Vamos ahora a abordar el último punto de estas reflexiones, dejando abierto para un futuro próximo, la posibilidad de agregar otros puntos que puedan ayudarnos a transitar nuestra búsqueda de una vida más plena.</p>


                <h2 className="titlesArticles">Punto 4: ¿Cómo diferenciar mis necesidades de mis deseos?</h2>
                <p className="textArticles">En mi práctica profesional, encuentro con frecuencia personas que utilizan como sinónimos el concepto de necesidad con el concepto de deseo. Sin embargo, hay una diferencia significativa entre ellos y vamos ahora a marcar las particularidades de cada una.</p>
                <p className="textArticles">Las necesidades aluden a carencias. Dichas carencias deben ser satisfechas necesariamente.</p>
                <p className="textArticles">Los deseos en cambio son expectativas de placer que pueden ser satisfechos o no, pero no tienen la condición de lo necesario.</p>
                <p className="textArticles">Un ejemplo puede dejar claro lo expuesto:</p>
                <p className="textArticles">Comer es necesario, no hacerlo genera una carencia que es incompatible con la vida. </p>
                <p className="textArticles">Comer un asado es un deseo. Puede darme mucho placer, obviamente si me gusta el asado, pero puedo no comerlo y no genera una carencia.</p>
                <p className="textArticles">Yo puedo recibir amor de mi familia, de mis amigos, de mis pacientes y de mi pareja.</p>
                <p className="textArticles">No puedo prescindir del amor y lo puedo recibir de distintas formas y calidad, pero no hay alguna de ellas que sea imprescindible. Si es probable que mis deseos prefieran recibirlo de alguna forma particular. </p>
                <p className="textArticles">A partir de poder discernir cómo es mi mundo de carencias y cómo es mi mundo de deseos, es que nuevamente puedo intentar lograr un equilibrio entre ellos. </p>
                <p className="textArticles">Voy a hacer aquí una pequeña mención a un elemento que suele interferir en esta evaluación y que por cuestiones de espacio no podré desarrollar en este artículo.</p>
                <p className="textArticles">Nosotros pertenecemos a la cultura occidental, proveedora de un sistema de valores y expectativas que nos introducen a lo que llamamos el mundo civilizado.</p>
                <p className="textArticles">Nadie probablemente ignore que este modelo está fuertemente influenciado por las religiones judeo-cristianas y sus criterios sobre la vida considerada como virtuosa.</p>
                <p className="textArticles">Psicológicamente hablando, sus premisas fundamentales la hacen en algún sentido una cultura del sacrificio y del esfuerzo, siendo el placer sólo una recompensa merecida para aquel que lo conquiste luego de haber “ganado el pan con el sudor de su frente”.</p>
                <p className="textArticles">De allí que es tan frecuente escuchar a gente que sostiene que lo que es fácil no tiene ningún valor ni mérito, mientras que lo difícil dignifica.</p>
                <p className="textArticles">Es así que son muchas las personas que ante el placer sienten culpa, vergüenza y hasta miedo.</p>
                <p className="textArticles">Algunos pacientes me dicen - “Estoy temeroso/a, hace 3 días que todo me sale bien, ¿que viene ahora ?”</p>
                <p className="textArticles">Es entonces comprensible que mucha gente influenciada por estos valores culturales, no maneje bien el equilibrio “necesidad-deseo” y que muchos transformen inconscientemente sus deseos y los perciban como necesidades. También nos encontramos aquellos que simplemente tienen muy baja su energía deseante y se muestran como personas poco plácidas, sin muchas expectativas, ambiciones ni sueños y que perciben sus vidas como la difícil tarea de suplir sus necesidades y las de quienes los rodean.</p>
                <p className="textArticles">Como hicimos antes, podemos hacernos entonces las preguntas que nos permitan ubicar nuestra identificación :</p>
                <p className="textArticles"> 
                <li>¿Tengo un buen equilibrio necesidad-deseo?</li>
                <li>¿Estoy muy influenciado por el modelo del sacrificio-esfuerzo?</li>
                <li>¿Descalifico las cosas que no cuestan?</li>
                <li>¿Para mí la vida suele ser una lucha o una fiesta?</li>
                <li>¿Tengo sueños, ilusiones, ambiciones, motivaciones?</li>
                <li>¿Siento que me cuesta disfrutar o motivarme?</li>
                </p>
                <p className="textArticles">
Mi estimado lector:</p>
                <p className="textArticles">Pudiendo responder estas preguntas, quizás nos proveamos de una visión más consciente de cómo abordamos nuestro criterio de “realidad” y que habría que profundizar para que la diferencia entre nuestras vacaciones y nuestra vida habitual no sean un abismo.</p>
                <p className="textArticles">Solo me queda desearles una muy feliz estadía y el deseo de un retorno con alegría y bienestar a la “realidad” de la vida cotidiana.</p>
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
export default PsicologiaEnVacaciones