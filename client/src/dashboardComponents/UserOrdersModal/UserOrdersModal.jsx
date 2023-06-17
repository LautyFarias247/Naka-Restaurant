import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrdersById } from '../../redux/actions/actions';
import { useEffect } from 'react';

const UserOrdersModal = ({show, handleCloseOrders, user }) => {
  
	const dispatch = useDispatch()
	const userOrders = useSelector(state=>state.adminData.userOrders)
	useEffect(()=>{
		dispatch(getUserOrdersById(user._id))
	},[])

  return (
    <Modal show={show} onHide={handleCloseOrders}>
      <Modal.Header closeButton>
        <Modal.Title>Pedidos del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {userOrders?.map((o) => (
          <div key={o._id}>
            <h3>Pedido #{o._id.slice(0,15)}</h3>
            <h5>Dirección de entrega: {o.address.street} {o.address.number}, {o.address.neighborhood} </h5>
            <h5>Monto total: ${o.amount.toLocaleString("en-US").replace(",", ".")},00</h5>
            <h6>Items:</h6>
            {o.items.map((item) => (
              <div key={item._id}>
                <p>{item.title} x {item.quantity}</p>
                
                <p>Precio unitario: ${Number(item.unit_price).toLocaleString("en-US").replace(",", ".")},00</p>
              </div>
            ))}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseOrders}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserOrdersModal;
