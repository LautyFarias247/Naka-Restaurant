import { createPayment } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import style from "./ShoppingCheckout.module.css";

const ShoppingCheckout = () => {
  const cart = useSelector((state) => state.cart);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.user);

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
        <span className={style.total}>$ {totalPrice.toLocaleString("en-US").replace(",", ".")},00</span>
      </div>
      <button
        className={style.botonPagar}
        onClick={async () => {
          if (user) {
            const status = user.is_active || user.isActive;
            console.log(status);
            if (!status) {
              return Swal.fire({
                title:
                  "<strong>Tu cuenta esta inhabilitada para realizar pedidos</strong>",
                icon: "warning",
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: '<Link to="/account/login">Aceptar</Link>',
                // '<a href="//sweetalert2.github.io">links</a> ' +
                // 'and other HTML tags'
              });
            }
          }
          if (user.name) {
            dispatch(
              createPayment({
                cart,
                email: userLogged.email,
                id: userLogged.sub || userLogged._id,
              })
            );
          } else {
            return Swal.fire({
              title:
                "<strong>Debes loguearte para confirmar el pedido</strong>",
              icon: "info",
              html: "Inicia sesion o registrate",
              showCloseButton: true,
              focusConfirm: false,
              confirmButtonText: '<Link to="/account/login">Aceptar</Link>',
              // '<a href="//sweetalert2.github.io">links</a> ' +
              // 'and other HTML tags'
            });
          }
        }}
      >
        Pagar
      </button>
    </div>
  );
};

export default ShoppingCheckout;
