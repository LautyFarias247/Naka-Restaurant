import React, { useState } from "react";
import style from "./AddressCard.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { createPayment, deleteAddress } from "../../redux/actions/actions";

const AddressCard = ({
  address,
  _id,
  street,
  number,
  apartment,
  zipCode,
  neighborhood,
  locality,
  state,
  checkout,
	setBlockScreen
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [selected, setSelected] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      title: `Seguro que deseas eliminar la dirección "${street} ${number}" ?`,
      icon: "info",
      confirmButtonText: "Eliminar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      iconColor: "#BF8D39",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const status = await dispatch(deleteAddress(_id, user._id));
        status === 200
          ? Swal.fire({
              title: `La dirección se borró correctamente`,
              icon: "success",
              confirmButtonText: "Ok",
              showCancelButton: false,
              iconColor: "#BF8D39",
            }).then((result) => {
              if (!result.isDenied) {
                window.location.reload();
              }
            })
          : Swal.fire({
              title: `Hubo un error al borrar la dirección`,
              text: "Intenta de nuevo mas tarde",
              icon: "error",
              confirmButtonText: "Ok",
              showCancelButton: false,
              iconColor: "#BF8D39",
            });
      }
    });
  };
  const handleSelect = () => {
    setSelected(!selected);
  };
  const handlePayment = () => {
    dispatch(createPayment(cart, user._id, address));
  };

  return (
    <div className={selected ? style.selectedContainer : style.container}>
      <FaMapMarkerAlt className={style.icon} />
      <div className={style.addressInfo}>
        <span>
          {street} {number} {apartment || null}
        </span>
        <span>
          {neighborhood}, {locality}, {state}
        </span>
        <span>Código postal: {zipCode}</span>
      </div>
      {!checkout ? (
        <button className={style.boton} onClick={handleDelete}>
          Eliminar
        </button>
      ) : (
        <button
          className={style.boton}
          onClick={() => {
            setBlockScreen(true)
						handleSelect();
            handlePayment();
						
          }}
        >
          {selected ? String.fromCharCode(10003) : "Seleccionar"}
        </button>
      )}
    </div>
  );
};

export default AddressCard;
