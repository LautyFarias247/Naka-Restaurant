import { Link } from "react-router-dom";
import style from "./Card.module.css";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
import { useState } from "react";

const Card = ({ image, name, price, item, description }) => {
  const [refresh, setRefresh] = useState(0);
  return (
    <div className={style.container}>
      <div className={style.dataContainer}>
        <h5 className={style.titulo}>{name}</h5>
        <p className={style.description}>{description}</p>
        <div className={style.shoppingContainer}>
          <p className={style.price}>
            $ {price.toLocaleString("en-US").replace(",", ".")},00
          </p>
          <HandlerShoppingItems
            refresh={refresh}
            setRefresh={setRefresh}
            product={item}
          />
        </div>
      </div>

      <div className={style.imgContainer}>
        <img src={image} alt={name} className={style.image} />
      </div>
    </div>
  );
};

export default Card;
