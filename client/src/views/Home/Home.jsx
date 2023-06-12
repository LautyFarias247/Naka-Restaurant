import style from "./Home.module.css";
import barraNaka from "../../images/Barra-naka.jpg";
import sushi1 from "../../images/sushi-home-1.jpg";
import sushi2 from "../../images/sushi-home-2.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.presentacion}>
        <div className={style.superposicion}>
          <h1 className={style.naka}>NAKA</h1>
          <h2 className={style.h2}>Descubre el auténtico arte del sushi.</h2>
          <Link to="/menu">
            <button className={style.boton}>Ordena ahora</button>
          </Link>
        </div>
      </div>
      {/* <div className={style.pContainer}>
        <p className={style.p}>
          Naka, -Buenos Aires, 2008-, es el emblema del proyecto gastronómico
          dirigido por Hikaru Nakamura y Shigeru Miyamoto, cuya finalidad es
          expresar en su menú los sabores de los ingredientes del territorio
          japonés bajo una mirada personal.
        </p>
        <hr className={style.hr} />
        <p className={style.p}>
          Desde 2015, Naka ha estado dentro de la lista The 50 Best World’s
          Restaurants, donde actualmente ocupa la posición 18 a nivel mundial.
        </p>
      </div>
      <img src={barraNaka} alt="Restaurant Naka" />
      <div className={style.imagesContainer}>
        <img src={sushi1} alt="Plato de sushi" className={style.homeImage} />
        <img src={sushi2} alt="Plato de sushi" className={style.homeImage} />
      </div> */}
    </main>
  );
};

export default Home;
