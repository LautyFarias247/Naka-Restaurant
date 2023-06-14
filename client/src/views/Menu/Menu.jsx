import Cards from "../../components/CardsContainer/CardsContainer";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import style from "./Menu.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const categories = useSelector((state) => state.categories);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <main className={style.main}>
      <h1 className={style.naka}>NAKA</h1>
      <h2 className={style.subtitulo}>
        Entre 45' y 60' | compra mínima $5000 | envío sin cargo
      </h2>
      <div className={style.buttonContainer}>
        {categories.map(({name, _id}) => {
          return <CategoryButton key={_id} name={name} _id={_id}/>;
        })}
      </div>
      <Cards/>
    </main>
  );
};

export default Menu;
