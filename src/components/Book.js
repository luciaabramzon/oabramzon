import libro from './images/libro.webp'
import './styles/book.css'
const Book=()=>{
    return(
        <div className='book'>
            <div className="BookImageDiv" id='libro'>
                <img className='bookImage' src={libro}/>
            </div>
            <div className='BookTextDiv'>
            <h3 className='bookTitle'> La contradiccion </h3>
            <p className='bookText'>Si la mayor parte de nuestros males son el producto de las contradicciones en medio de las que vivimos y si entendemos que sólo superándolas alcanzaremos una vida mejor, no es improbable que la solución este en nuestras manos.</p>

            <p className='bookText'>Resolver una contradicción que nos aqueja no es fácil, pero tampoco imposible; la tarea exige de cada uno de nosotros que nos presetmos la atencion debida, que sepamos escucharnos a nosotros mismos, acaso silenciosamente, a fin de advertir donde está el error y enmendarlo tanto como podamos. Después de todo, la evidencia de que somos imperfectos lleva consigo la convicciñon de que somos asimismos perfectibles.</p>

            <p className='bookText'>Este libro trata de poner de manifiesto-indagándolas, revelándolas- las naturalezas más habituales de nuestras penurias cotidianas y, mediante su exposicion y análisis, acercar al lector atento las claves para un mejor abordaje y eventualmente la posibilidad de su solución</p>

            <p className='bookText'>El que pueda encontrar una salida a sus contradicciones, avanza, evoluciona, accede a una sabiduría proveedora de gozo existencial. Los que no lo logran quedan atrapados, sin salida, enmarañados entre las verdades, los consejos que no pueden cumplir, la lógica, la magia, los rituales y las supersticiones.</p>
            </div>
        </div>
    )
}

export default Book