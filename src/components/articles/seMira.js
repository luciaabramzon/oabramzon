import { Link } from "react-router-dom"
import Footer from "../Footer"
import NavBar from "../NavBar"
import playa from '../images/playa.webp'
import '../styles/completeArticles.css'
import { useEffect, useState } from "react"
import Loader from "../Loader"
const SeMira=()=>{
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
                <h1 className="titlesArticles">En el verano se mira y no se toca</h1>
                <div>
<img className="ArticleImage" src={playa}/>
</div>
                <p className="textArticles">Comienza el verano y una vez más la magia se renueva. El sol parece penetrar en la mente y un dejo de optimismo recuerda que a pesar de todo, la vida sigue siendo hermosa.</p>
                <p className="textArticles">El gris opaco deja lugar al color brillante, y los cuerdos del verano anterior tientan a programar una temporada donde el placer sea el principal protagonista.</p>
                <p className="textArticles">Las playas, el mar, las puestas de sol, las cervezas frías y el clericó desbordante de frutas son sólo algunos de los infinitos placeresque nos estan esperando en esta temporada que ya comienza.</p>
                <p className="textArticles">Con el calor pareciera que se incentivan los sentidos y que mucha gente está expectante de vivir nuevas experiencias, encontrar un gran amor, o simplemente algunas aventuras excitantes.</p>
                <p className="textArticles">Sin embargo, estas posibilidades no son para todos iguales. El verano en el mar tiene sus privilegiados que en este caso son los niños.</p>
                <p className="textArticles">Los elegidos indiscutibles estivales son los poseedores de la belleza física. Los lindos y fundamentalmente "las lindas" son los dueños del éxito y los grandes acaparadores del deseo en general.</p>
                <p className="textArticles">Aproximadamente dos meses antes que la temporada comience, se puede observar una actividad febril en los gimnasios; aumentan considerablemente las consultas a los dietistas, nutricionistas y a todo aquel que pueda aportar algo que ayude a mejorar la figura humana y poner a la persona con chances de "pertenecer" al secto grupo de los "elegidos", amos  señores del deseo general del verano.</p>
                <p className="textArticles">Sin pretender que esto sea una ley universal se podría decir que mientras el invierno es la estación de los intelectuales, el verano es la estación de "los lindos". Definitivamente en el verano es más importante ser lindo que inteligente, aunque si se es las dos cosas mucho mejor.</p>
                <p className="textArticles">Si uno tiene tendencia a pensar con una lógica deductiva, se tendría que llegar a la idea que en el verano ocurre una explosión sexual; sol, playa, cuerpos hermosos exhibidos provocativamente, el milagro de volver a ser uno el dueño de su tiempo, el día y la noche sin apuro. Tanto estímulo y motivación, qué otro sentido podría agudizar más que el de la érotica?</p>
                <p className="textArticles">Muchos veranos he reocrrido observando este fenómeno y puedo formular la hipoótesis que no necesariamente se cumple la deducción antes señalada y que sí en cambio se produce una disociación belleza-sexo funcionando en forma independiente una de otra.</p>
                <p className="textArticles">En ese sentido podríamos decir que si bien es indiscutible que los bellos son los acaparadores del deseo, no son los que mayor actividad sexual despliegan.</p>
                <p className="textArticles">A partir de esta observación, me interesaría intentar algún tipo de comprensión de esta disoaciación en apariencia bastante antinatural entre el estímulo y la respuesta.</p>
                <p className="textArticles">El estudio profundo de las características esenciales del ser humano nos permite el conocimiento de ciertos rasgos que esilusionan cierta versión mas complementaria e idílica del ser. Un ejemplo de esto s el amor, que uno aspira como una relación intensa de dos, y en la mayoría de los casos se realiza en dos niveles desiguales; uno ama y el otro se deja amar. En otras palabras, es muy habitual obsrvar en una relación amorosa, que uno ama más que el otro, que uno busca más la relación que el otro, que uno reclama más que el otro, en definitiva, que uno es más deseante que el otro.</p>
                <p className="textArticles">Podemos hipotetizar que por lo general en los vínculos humanos, en forma inconciente (desconocida para uno) hay quienes están colocados en posición de ser completados por el otro, y quienes están colocados en posición de completar a los otros.</p>
                <p className="textArticles">En apariencia pareciera que las personalidades más débiles, más inseguras o más frágiles se asumen como incompletas y carenciadas, mientras que los más fuertes, seguros o "narcisitas" se ubican en la posición de ser lo que le falta al otro para estar completo. Son en definitiva el objeto de la completud.</p>
                <p className="textArticles">Desde esta división, estos últimos son los "deseados", mientras que los que se asumen como incompletos son los "deseantes".</p>
                <p className="textArticles">Volviendo al tema del verano, podríamos ubicar entonces a los poseedores de la belleza como los "deseados" y a los ávidos expectadores como los "deseantes"</p>
                <p className="textArticles">Es así que los dueños de la belleza no son los poseedores del deseo sexual, ya que el deseo es de los incompletos, en este caso los deseantes.</p>
                <p className="textArticles">En la mayoría de los casos que los desados se ubican en un exhibicionismo promotor de deseo, pero por lo general inalcanzable.</p>
                <p className="textArticles">Para estas personas muchas veces la sexualidad es una concesión al otro, una especie de regalo al deseo del otro. Consideremos que los poseedores de la belleza perciben permanentemente la atracción que despiertan y saben que acceder a la sexualidad es absolutamente sencillo; les sobran ofertas. Así por lo general tantas propuestas muchas veces les despierta una especie de resentimiento ya que lo viven como que todos les quieren sacar algo, es decir lejos de halagarlos, parece que en algún lugar les molesta.</p>
                <p className="textArticles">Al quedar colocados en esa posición, el intento de seducción ejercida por el deseante en general produce un efecto contraproducente quedando muchas veces seducidas por aquellos que adoptan una posición mas indiferente y prescindente ante la belleza exhibida quienes en la mayoría de las veces, reciben el "regalo" tan inmensamente desado por la mayoría.</p>
                <p className="textArticles">Habiendo trabajado muchos años en el campo de la sexología, pude constatar en la consulta clínica, que las personas más deseadas eran por lo general, las que presentaban más trastornos en el área del deseo y del placer sexual.</p>
                <p className="textArticles">Es así que en lo más profundo, este tipo de belleza "ratonea" a muchos, angustia a algunos que han pasado los 30 y los ven con un dejo de nostalgia por un tiempo en algún sentido pasado y con cierta sensación de impotencia, al verlos como inalcanzables algunos; otros tratando por todos los medios de obtener ese lugar y frustrándose si no reciben alguna respuesta alentadora de los otros, en definitiva un universo de movimientos alrededor de la belleza donde sólo algunos se llevan los trofeos y en definitiva el resultado final en general no concuerda con lo que aparentemente promueve.</p>
                <p className="textArticles">Concluyendo, podríamos afirmar que en el verano la tendencia predominante es la de una sensualidad que se disocia de la sexualidad generando un fenómeno atípico en el juego natural de la seducción, transformando las playas en una especie de "museo o galería de arte humana", mucho para ver pero con una consigna clara, "se mira y no se toca".</p>



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
export default SeMira