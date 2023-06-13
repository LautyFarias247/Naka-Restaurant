import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { removeSession } from "../../redux/actions/actions";

const Navbar = () => {
  const user = useSelector((state) => state.user);
	const dispatch = useDispatch()

	const handleLogOut = () => {
		localStorage.removeItem("user")
		dispatch(removeSession())
	}

  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.link}>
        <span className={style.naka}>NAKA</span>
      </Link>
      <ul className={style.navigation}>
        <Link to="/">
          <li className={style.list}>Home</li>
        </Link>

        <Link to="/menu">
          <li className={style.list}>Menú</li>
        </Link>
      </ul>
      {user.username ? (
        <ul className={style.login}>
          <li className={style.welcome}>
            Bienvenido! <Link to="myaccount" className={style.list}>{user.username}</Link>
          </li>
          <Link to="/cart" >
            <li className={style.list}>Carrito</li>
          </Link>
					<Link to="/" onClick={handleLogOut}>
					<li className={style.list}>Cerrar Sesión</li>
					</Link>
        </ul>
      ) : (
        <ul className={style.login}>
          <Link to="account/login">
            <li className={style.list}>Iniciar sesion</li>
          </Link>
          <Link to="account/register">
            <li className={style.list}>Regitrarse</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
