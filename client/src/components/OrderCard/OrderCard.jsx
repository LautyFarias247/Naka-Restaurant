import React, { useEffect } from "react";
import style from "./OrderCard.module.css";
import { useDispatch } from "react-redux";

const OrderCard = ({ _id, items, amount, address, status, date }) => {
  return (
    <article className={style.container}>
      <h4 className={style.title}>
        ID del pedido: #{_id.slice(0,15)} | Estado:{" "}
        {status === "pending" ? "En preparación" : "Entregado"}
      </h4>
      <h5 className={style.info}>Fecha: {date.slice(0, 10)}</h5>
      <h5 className={style.info}>
        Dirección: {address.street} {address.number} {address.apartment || ""}
        {`, ${address.neighborhood}`}, {address.locality}, {address.state}
      </h5>
			<h5 className={style.info}>Pago total: ${amount.toLocaleString("en-US")
                    .replace(",", ".")},00	</h5>
      <div className={style.itemsContainer}>
        {items.map((i) => {
          return (
            <div className={style.item}>
              <img src={i.picture_url} alt={i.title} className={style.image} />
              <div className={style.itemData}>
                <span>{i.title}</span>
                <span className={style.itemQuantity}>
                  x {i.quantity}u. | ${" "}
                  {(i.quantity * i.unit_price)
                    .toLocaleString("en-US")
                    .replace(",", ".")}
                  ,00
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default OrderCard;
