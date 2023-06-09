import Cards from "../../components/Cards/Cards";
import style from "./Menu.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories, saveCarrito } from "../../redux/actions/actions";
import SearchBar from "../../layout/Navbar/SearchBar";

const Menu = () => {
  const dispatch = useDispatch();
  const allDishes = useSelector((state) => state.allDishes);
  const cart = useSelector((state) => state.cart);
  const userLogged = useSelector((state) => state.user);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    handleSaveCarrito(cart);
    console.log("pasoxuseeffect");
    console.log(totalPrice);
  }, [totalPrice]);

  const handleSaveCarrito = (cart) => {
    console.log("holaaa");
    console.log(cart);
    dispatch(saveCarrito({ cart, id: userLogged.sub || userLogged._id }));
  };
  return (
    <main className={style.main}>
			<h1>NAKA</h1>
			<h2>Entre 45' y 60' | compra mínima $5000</h2>
			<div>
				<span>Rolls</span>
				<span>Nigiris</span>
				<span>Gunkan</span>
			</div>
			<Cards dishes = {allDishes}/>
    </main>
  );
};

export default Menu;
