import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import '../styles/cardArticles.css'
const MainArticles = () => {
  const [isLoading, setLoading] = useState(true);
  const cards = [
    {
      title: 'La otra guerra Israel-Palestina',
      content: 'Desde qué comenzaron las acciones bélicas en Gaza, casi ya un mes atrás, se ha desatado una guerra paralela entre partidarios de uno... ',
      link: '/israel-palestina'
    },
    {
      title: 'El matrimonio y la pérdida del deseo sexual: ¿un destino obligado?',
      content: 'Muchas parejas temen confesarse que han perdido interés sexual por el otro porque asocian esa ausencia de ganas...',
      link: '/matrimonio'
    },
    {
      title: 'Psicologia para leer en vacaciones',
      content: 'Nuevamente llegó el verano y con él, las tan deseadas vacaciones...',
      link: '/psicologia-para-leer-en-vacaciones'
    },
    {
      title: 'En el verano se mira y no se toca',
      content: 'Comienza el verano y una vez más la magia se renueva. El sol parece penetrar en la mente y un dejo de optimismo recuerda que a pesar de todo, la vida sigue siendo hermosa...',
      link: '/en-el-verano-se-mira-y-no-se-toca'
    },
    {
      title: '¿Porqué me aburro?',
      content: 'Para aquellos profesionales que trabajamos en el campo de la psicología, nos es habitual escuchar a pacientes que se encuentran en un tratamiento terapéutico, un cuestionamiento referido a sentir el paso del tiempo sin grandes cambios en sus vidas, o con la sensación de que nada importante les ocurre en su cotidianeidad...',
      link: '/porque-me-aburro'
    }
  ];

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

  return (
    <div className="mainArticles">
      {
        isLoading? (<Loader/>)
        :
        ( 
         <>
         <h1 className="mainArticlesTitle" >Articulos</h1>
    <div className="cardDiv">

      {cards.map((card) => (
        <Link to={card.link} key={card.title}>
          <div className="cards">
            <h1 className="cardTitle">{card.title}</h1>
            <p className="cardContent">{card.content}</p>
            <button className="linkButton">Seguir leyendo</button>
          </div>
        </Link>
      ))}
    </div>
         </> 
        )
      }
    
    </div>
  );
 
};

export default MainArticles;



