import { createPayment } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import style from "./ShoppingCheckout.module.css";

const ShoppingCheckout = () => {
  const navigate = useNavigate()
	const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const dispatch = useDispatch();

  const handlePayment = () => {
    if (totalPrice < 5000) {
      return Swal.fire({
        title: "Atención",
        text: "El monto de la compra debe superar los $5000",
        icon: "info",
        confirmButtonText: "Aceptar",
        iconColor: "#BF8D39",
      });
    }
    if (!user.isActive) {
      return Swal.fire({
        title: "Lo sentimos...",
        text: "Tu cuenta se encuentra inhabilitada para realizar pedidos",
        icon: "error",
        confirmButtonText: "Aceptar",
        iconColor: "#BF8D39",
      });
    }
		navigate("/checkout")
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Resumen de compra</h2>
      <hr className={style.separador} />
      <div className={style.itemContainer}>
        {cart.map((item) => {
          return (
            <div key={item._id} className={style.subtotal}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                {" "}
                $
                {(item.price * item.quantity)
                  .toLocaleString("en-US")
                  .replace(",", ".")}
                ,00
              </span>
            </div>
          );
        })}
      </div>
      <hr className={style.separador} />
      <div className={style.totalData}>
        <span className={style.total}>Total: </span>
        <span className={style.total}>
          $ {totalPrice.toLocaleString("en-US").replace(",", ".")},00
        </span>
      </div>
    
        <button className={style.botonPagar} onClick={handlePayment}>
          Continuar
        </button>
      
    </div>
  );
};

export default ShoppingCheckout;
