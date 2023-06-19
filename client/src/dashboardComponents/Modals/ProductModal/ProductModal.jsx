import React from "react";
import style from "./ProductModal.module.css";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteDish } from "../../../redux/actions/actions";
import Swal from "sweetalert2";

const ProductModal = ({ show, handleClose, product }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const status = await dispatch(deleteDish(product._id));
    if (status === 200) {
      Swal.fire({
        title: `Plato borrado correctamente`,
        icon: "success",
        confirmButtonText: "Ok",
        iconColor: "#BF8D39",
      }).then((a)=>{
				window.location.reload()
			});
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={style.cardContainer}>
          <img
            src={product.image?.url ? product.image?.url : product.image}
            alt={product.name}
            className={style.image}
          />
          <div className={style.data}>
            <span>Categoría: {product.category}</span>
            <span>
              Precio: ${product.price.toLocaleString("en-US").replace(",", ".")}
              ,00
            </span>
            <span>Stock: {product.stock}</span>
            <span>Descripcion: {product.description}</span>
            <span></span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Borrar plato
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductModal;
