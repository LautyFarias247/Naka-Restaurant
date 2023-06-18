import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewProductModal = ({ show, handleClose }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    // Aquí puedes realizar las acciones necesarias para agregar el producto,
    // como enviar los datos a través de una API o actualizar el estado de tu componente principal.

    // Por ejemplo, podrías enviar los datos a una API con axios:
    // axios.post('/api/products', { name: productName, price: productPrice })
    //   .then(response => {
    //     // Manejar la respuesta de la API y realizar acciones adicionales si es necesario
    //   })
    //   .catch(error => {
    //     // Manejar errores de la API si es necesario
    //   });

    // Una vez que hayas realizado las acciones necesarias, cierra el modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del producto"
              value={productName}
              onChange={e => setProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Precio del Producto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio del producto"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Precio del Producto</Form.Label>
            <Form.Control
              type="select"
              placeholder="Ingrese el precio del producto"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Precio del Producto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio del producto"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAddProduct}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewProductModal;