import React from "react";
import style from './UserSidebar.module.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserSidebar = () => {
	useEffect(()=>{
		console.log("aparezco");
	},[])
  return (
    <aside className={style.sidebar}>
      <ul className={style.list}>
        <Link>
          <li className={style.listItem}>Mi perfil</li>
        </Link>
        <Link to="/myaccount/orders">
          <li className={style.listItem}>Pedidos</li>
        </Link>
        <Link>
          <li className={style.listItem}>Actualizar información</li>
        </Link>
        <Link>
          <li className={style.listItem}>Actualizar contraseña</li>
        </Link>
        <Link>
          <li className={style.listItem}>Cerrar sesión</li>
        </Link>
      </ul>
    </aside>
  );
};

export default UserSidebar;
