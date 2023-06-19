import { useState } from "react";
import style from "./UserModal.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateUserStatus } from "../../../redux/actions/actions";
import { useEffect } from "react";
import Swal from "sweetalert2";

function UserModal({ show, handleCloseDetail, user }) {
	const dispatch = useDispatch()
	const [status, setStatus] = useState(user.isActive)
	

	const handleUserStatus = () => {
		Swal.fire({
			icon:"question",
			title:`¿Seguro quieres ${status ? "Banear" : "Desbanear"} al usuario ${user.username}?`,
			confirmButtonText:`${status ? "Banear": "Desbanear"}`
		}).then(({isConfirmed})=>{
			if(isConfirmed){
				setStatus(!status)
				dispatch(updateUserStatus(user._id, !status))		
			}
		})
	}
	
  return (
    <Modal show={show} onHide={handleCloseDetail}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className={style.userInfo}>
            {user.picture ? (
              <img className={style.userImage} src={user.picture} alt="" />
            ) : (
              <img
                className={style.userImage}
                src="https://i0.wp.com/flejedecosas.com/wp-content/uploads/perfil-de-usuario-google-chrome-vacio.jpg?ssl=1"
                alt={`Foto ${user.username}`}
              />
            )}
            <h5>{user.username}</h5>
          </div>
          <p>Pedidos: {user.orders.length}</p>
          <p>Email: {user.email}</p>
          <p>Estado: {status ? "Activo" : "Baneado"}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {status ? (
          <Button variant="danger" onClick={handleUserStatus}>
            Banear Usuario
          </Button>
        ) : (
          <Button variant="success" onClick={handleUserStatus}>
            Desbanear Usuario
          </Button>
        )}
        <Button variant="secondary" onClick={handleCloseDetail}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
