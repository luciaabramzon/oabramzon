import { Link } from "react-router-dom";
import '../styles/cardArticles.css'
const MainArticles = () => {
  const cards = [
    {
      title: 'La otra guerra Israel-Palestina',
      content: 'Desde qué comenzaron las acciones bélicas en Gaza, casi ya un mes atrás, se ha desatado una guerra paralela entre partidarios de uno... ',
      link: '/israel-palestina'
    },
    {
      title: 'El matrimonio y la pérdida del deseo sexual: ¿un destino obligado?',
      content: 'Muchas parejas temen confesarse que han perdido interés sexual por el otro porque asocian esa ausencia de ganas con el fin del amor y la amenaza de una separación...',
      link: '/matrimonio'
    }
  ];

  return (
    <div className="mainArticles">
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
    </div>
  );
 
};

export default MainArticles;



