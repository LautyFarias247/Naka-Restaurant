import React from "react";
import style from "./OrderItemTable.module.css";
import OrderModal from "../../Modals/OrderModal/OrderlModal";
import { useState } from "react";
const OrderItemTable = ({ o }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <tr key={o._id}>
        <td>{o.owner}</td>
        <td>#{o._id.slice(0, 15)}</td>
        <td>{o.createdAt.slice(0, 10)}</td>
        <td>$ {o.amount.toLocaleString("en-US").replace(",", ".")},00</td>
        <td>{o.status}</td>
        <td>
          <button className={style.detailButton} onClick={() => setShow(true)}>
            Detalle
          </button>
        </td>
      </tr>
      <OrderModal show={show} handleClose={handleClose} o={o}/>
    </>
  );
};

export default OrderItemTable;
