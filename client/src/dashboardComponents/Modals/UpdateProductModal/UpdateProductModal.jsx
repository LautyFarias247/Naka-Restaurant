import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllDishes, updateDish } from "../../../redux/actions/actions";
import Swal from "sweetalert2";

const UpdateProductModal = ({
  show,
  handleClose,
  product,
  handleUpdateProduct,
}) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productStock, setProductStock] = useState(product.stock);
  const [productImage, setProductDescription] = useState(product.description);

  const handleUpdate = async () => {
    const updatedProduct = {
      name: productName,
      price: productPrice,
      description: productImage,
      stock: productStock,
    };
    const status = await dispatch(updateDish(product._id, updatedProduct));
    if (status === 200) {
      Swal.fire({
        title: `Producto actualizado`,
        icon: "success",
        confirmButtonText: "Ok",
        iconColor: "#BF8D39",
      });
    }
    await dispatch(getAllDishes());
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productImage">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={3}
              type="text"
              value={productImage}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProductModal;
