import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFirstProduct,
  addProduct,
  removeProduct,
  removeManyProducts,
  saveCart,
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import style from "./HandlerShopping.module.css";
import { useNavigate } from "react-router-dom";

const HandlerShoppingItems = ({ product, refresh, setRefresh }) => {
  const [aux, setAux] = useState(1);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const item = cart.find((item) => item._id === product._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddFirstProduct = async () => {
    if (!user.username) {
      return Swal.fire({
        title: "Iniciar sesión",
        text: "Debes iniciar sesión para agregar productos a tu canasta",
        icon: "info",
        confirmButtonText: "Aceptar",
        iconColor: "#BF8D39",
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          navigate("/account/login");
        }
      });
    }
    if (!user.isActive) {
      return Swal.fire({
        title: "Lo sentimos...",
        text: "Tu cuenta se encuentra inhabilitada para realizar pedidos",
        icon: "error",
        confirmButtonText: "Aceptar",
        iconColor: "#BF8D39",
      });
    }
    await dispatch(addFirstProduct({ product }));
    setAux(aux + 1);
    setRefresh(refresh + 1);
  };

  const handleAddProduct = () => {
    if (!user.isActive) {
      return Swal.fire({
        title: "Lo sentimos...",
        text: "Tu cuenta se encuentra inhabilitada para realizar pedidos",
        icon: "error",
        confirmButtonText: "Aceptar",
        iconColor: "#BF8D39",
      });
    }
    dispatch(addProduct(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
    setRefresh(refresh + 1);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
    setRefresh(refresh + 1);
  };

  const handleRemoveManyProducts = () => {
    dispatch(removeManyProducts(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
    setRefresh(refresh + 1);
  };

  if (item?.quantity) {
    return (
      <div className={style.container}>
        <button onClick={handleRemoveProduct} className={style.handleButton}>
          -
        </button>
        <span className={style.quantity}>{item.quantity}</span>
        <button onClick={handleAddProduct} className={style.handleButton}>
          +
        </button>

        <button
          onClick={handleRemoveManyProducts}
          className={style.handleButton}
        >
          x
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={handleAddFirstProduct} className={style.botonAgregar}>
        Agregar
      </button>
    );
  }
};

export default HandlerShoppingItems;
