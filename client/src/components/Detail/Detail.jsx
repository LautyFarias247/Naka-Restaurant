import axios from "axios";
import React from "react";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDishesById, saveCarrito } from "../../redux/actions/actions";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";

const Detail = () => {
  const { id } = useParams();
  const detailFood = useSelector(state => state.detail)
  const cart = useSelector(state => state.cart)
  const userLogged = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [aux, setAux] = useState("")
  useEffect(() => {
    dispatch(getDishesById(id))  
  }, []);
  let totalPrice = 0
  cart.forEach(item => {
    totalPrice += item.price * item.quantity
  });

  useEffect(() => {
    handleSaveCarrito(cart)
    console.log("pasoxuseeffect");
    console.log(totalPrice);
  }, [totalPrice])

  const handleSaveCarrito = (cart) => {
    console.log("holaaa")
    console.log(cart)
    console.log(userLogged.sub);
    dispatch(saveCarrito({ cart, id: userLogged.sub || userLogged._id}))
  }
  return (
    <div className={style.detail}>
      {detailFood && (
        <div>
          {/* <p>ID: {detailFood._id}</p> */}
          <p>{detailFood.name}</p>

          <img src={detailFood.image?.url? detailFood.image?.url : detailFood.image } alt={detailFood.name} className={style.detail_img} />
          <p>${detailFood.price} USD</p>
          <p>{detailFood.description}</p>
          <p>{detailFood.category}</p>
          <p>Rating: {detailFood.rating}</p>
          <p>Comments: {detailFood.comments}</p>
        </div>
      )}

      <HandlerShoppingItems dish={detailFood} aux={aux} setAux={setAux} id={id}/>
          <Link to={"/menu"}>
            <button className={style.detailButton}>Volver</button>
          </Link>
    </div>
  );
};

export default Detail;




