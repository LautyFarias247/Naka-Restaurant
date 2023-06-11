import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFirstProduct,
  addTotalPrice,
  reduceTotalPrice,
  addProduct,
  removeProduct,
  removeManyProducts,
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import style from "./HandlerShopping.module.css";

const HandlerShoppingItems = ({ product }) => {
  const [aux, setAux] = useState(1);

  const cart = useSelector((state) => state.cart);
  const item = cart.find((item) => item._id === product._id);
  const dispatch = useDispatch();

  const handleAddFirstProduct = () => {
    dispatch(addFirstProduct(product));
    setAux(aux + 1);
  };

	const handleAddProduct = () => {
		dispatch(addProduct(product))
		setAux(aux + 1);
    console.log({funciona: product});
	}

  if (item?.quantity) {
    return (
      <div>
        <button
          style={{
            backgroundColor: "aliceblue",
            margin: "7px",
            height: "27px",
            width: "27px",
            border: "none",
          }}
        >
          &#9660;
        </button>
        <span>{item?.quantity ? item.quantity : 0}</span>
        <button
					onClick={handleAddProduct}
          style={{
            backgroundColor: "aliceblue",
            margin: "7px",
            height: "27px",
            width: "27px",
            border: "none",
          }}
        >
         +
        </button>
        {item?.quantity && (
          <button
            style={{
              backgroundColor: "aliceblue",
              border: "none",
              fontWeight: "bold",
              height: "32px",
              width: "32px",
            }}
          >
            x
          </button>
        )}
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
