import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFirstProduct,
  addTotalPrice,
  reduceTotalPrice,
  addProduct,
  removeProduct,
  removeManyProducts,
  saveCart,
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import style from "./HandlerShopping.module.css";
import { useEffect } from "react";

const HandlerShoppingItems = ({ product, refresh, setRefresh }) => {
  const [aux, setAux] = useState(1);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const item = cart.find((item) => item._id === product._id);
  const dispatch = useDispatch();

  const handleAddFirstProduct = async () => {
    await dispatch(addFirstProduct({ product }));
    setAux(aux + 1);
		setRefresh(refresh +1)
  };

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
		setRefresh(refresh +1)
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
		setRefresh(refresh +1)
  };

  const handleRemoveManyProducts = () => {
    dispatch(removeManyProducts(product));
    dispatch(saveCart({ userId: user._id, cart }));
    setAux(aux + 1);
		setRefresh(refresh +1)
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
