import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.link}>
        <span className={style.naka}>NAKA</span>
      </Link>
      <ul className={style.navigation}>
        <Link to="/">
          <li className={style.li}>Home</li>
        </Link>

        <Link to="/menu">
          <li className={style.li}>Menú</li>
        </Link>
      </ul>
      <ul className={style.login}>
        <Link to="account/login">
          <li className={style.li}>Iniciar sesion</li>
        </Link>
        <Link>
          <li className={style.li}>Regitrarse</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
