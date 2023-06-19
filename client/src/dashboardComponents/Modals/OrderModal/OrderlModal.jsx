import React from "react";
import style from './OrderModal.module.css'
import { Modal, Button } from "react-bootstrap";

const OrderModal = ({ show, handleClose, o }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pedido #{o._id.slice(0,15)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Comprador: {o.owner}</p>
        <p>Dirección: {o.address.street} {o.address.number}, {o.address.neighborhood}, {o.address.state}</p>
        <p>Monto: $ {o.amount.toLocaleString("en-US").replace(",",".")},00</p>
        <p>Estado: {o.status}</p>
        <h5>Productos:</h5>
        {o.items.map((i) => (
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
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
