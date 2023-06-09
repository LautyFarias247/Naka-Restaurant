import { Link } from "react-router-dom";
import style from "./Card.module.css";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
import { useState } from "react";

/* felipe */
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
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (id) => {
    let tempData = [id];
    setTempData((data) => [1, ...tempData]);
    return setModel(true);
  };
  return (
		<div className={style.container}>
			<div>
				<h5>{name}</h5>
				<p>{description}</p>
				<p>{price}</p>
			</div>
			<div className={style.imgContainer}>
      	<img src={image} alt={name} className={style.image}/>
			</div>
		</div>
    // <article className={style.container}>
    //   <div>
    //     <h3 className={style.name}>{name}</h3>
    //     <span className={style.description}>{description}</span>
    //     <span className={style.price}>{price}</span>
    //   </div>
    // </article>
  );
};

export default Card;
