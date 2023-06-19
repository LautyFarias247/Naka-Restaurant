import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createDish, getAllDishes } from "../../redux/actions/actions";
import Swal from "sweetalert2";

const NewProductModal = ({ show, handleClose }) => {
  const dispatch = useDispatch()
	const categories = useSelector((state) => state.categories);
  const [initialValues, setInitialValues] = useState({});
	
  const handleOnChange = (e) => {
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
    console.log(initialValues);
  };
  const handleFile = (e) => {
    setInitialValues({ ...initialValues, image: e.target.files[0] });
  };
  const handleSubmit = async(e) => {
		e.preventDefault();
		const {status} = await dispatch(createDish(initialValues))
    if (status === 200) {
			Swal.fire({
        title: `Plato creado correctamente`,
        icon: "success",
        confirmButtonText: "Ok",
        iconColor: "#BF8D39",
      }).then(()=>{
				dispatch(getAllDishes())
				setInitialValues({})
				handleClose()
			});
		}
    ;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar plato</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="input1">
            <Form.Label>Nombre del plato</Form.Label>
            <Form.Control
						name="name"
              type="text"
              value={initialValues.name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="select">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
						name="category"
              as="select"
              placeholder="selecciona una categoría"
              defaultValue=""
							value={initialValues.category}
              onChange={handleOnChange}
            >
              <option value={""} disabled hidden>
                Selecciona una opción
              </option>
              {categories.map((c) => {
                return (
                  <option key={c._id} value={c.name}>
                    {c.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="input2">
            <Form.Label>Precio:</Form.Label>
            <Form.Control
						name="price"
              type="number"
							value={initialValues.price}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="input3">
            <Form.Label>Stock:</Form.Label>
            <Form.Control
						name="stock"
              type="number"
							value={initialValues.stock}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="fileInput">
            <Form.Label>Subir archivo:</Form.Label>
            <Form.Control
              type="file"
							// value={initialValues.image}
              onChange={handleFile}
            />
          </Form.Group>

          <Form.Group controlId="textarea">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
							name="description"
              onChange={handleOnChange}
            />
          </Form.Group>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
          <Button variant="primary" type="submit" style={{marginLeft: "10px"}}>
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewProductModal;
