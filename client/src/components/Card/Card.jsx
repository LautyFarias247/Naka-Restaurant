import { Link } from "react-router-dom";
import style from "./Card.module.css";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
import Model from "../Detail/ModelDetail/modelDetail";

const Card = ({
  image,
  name,
  id,
  price,
  rating,
  _quantity,
  stock,
  aux,
  setAux,
  item,
  description,
}) => {
	
  return (
    <div className={style.container}>
      <div className={style.dataContainer}>
        <h5 className={style.titulo}>{name}</h5>
          <p className={style.description}>
            {description.length > 60
              ? description.substring(0, 60) + "..."
              : description}
          </p>
        <div className={style.shoppingContainer}>
          <p className={style.price}>
            $ {price.toLocaleString("en-US").replace(",", ".")},00
          </p>
          <HandlerShoppingItems setAux={setAux} product={item} />
        </div>
      </div>

      <div className={style.imgContainer}>
        <img src={image} alt={name} className={style.image} />
      </div>
    </div>
  );
};

export default Card;
