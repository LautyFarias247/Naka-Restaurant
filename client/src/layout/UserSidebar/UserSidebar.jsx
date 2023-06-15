import React from "react";
import style from './UserSidebar.module.css'
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <aside className={style.sidebar}>
      <ul className={style.list}>
        <Link to="/myaccount">
          <li className={style.listItem}>Mi perfil</li>
        </Link>
        <Link to="/myaccount/orders">
          <li className={style.listItem}>Pedidos</li>
        </Link>
        <Link to="myaccount/update">
          <li className={style.listItem}>Actualizar información</li>
        </Link>
        <Link to="myaccount/update/password">
          <li className={style.listItem}>Actualizar contraseña</li>
        </Link>
        <Link to="/">
          <li className={style.listItem}>Cerrar sesión</li>
        </Link>
      </ul>
    </aside>
  );
};

export default UserSidebar;
