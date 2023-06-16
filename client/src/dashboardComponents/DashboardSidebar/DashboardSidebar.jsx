import React from "react";
import style from './DashboardSidebar.module.css'

import { MdDashboard } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { BsArrowBarLeft } from "react-icons/bs";
import {BiDish} from 'react-icons/bi'
import { Link, useLocation } from "react-router-dom";
const DashboardSidebar = () => {
  const location = useLocation()
	return (
	
    <aside className={style.sidebar}>
      <Link to="/">
        <h2 className={style.naka}>NAKA</h2>
      </Link>
      <ul className={style.list}>
        <li
          className={
            location.pathname === "/dashboard"
              ? style.activeListItem
              : style.listItem
          }
        >
          <Link
            className={
              location.pathname === "/dashboard"
                ? style.activeLinkListItem
                : style.linkListItem
            }
            to="/dashboard"
          >
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={
            location.pathname === "/dashboard/orders"
              ? style.activeListItem
              : style.listItem
          }
        >
          <Link className={location.pathname === "/dashboard/orders"
                ? style.activeLinkListItem
                : style.linkListItem} to="/dashboard/orders">
            <LuClipboardList /> Pedidos
          </Link>
        </li>
        <li
          className={
            location.pathname === "/dashboard/users"
              ? style.activeListItem
              : style.listItem
          }
        >
          <Link className={location.pathname === "/dashboard/users"
                ? style.activeLinkListItem
                : style.linkListItem} to="/dashboard/users">
            <FiUsers /> Usuarios
          </Link>
        </li>
        <li
          className={
            location.pathname === "/dashboard/products"
              ? style.activeLink
              : style.listItem
          }
        >
          <Link className={location.pathname === "/dashboard/users"
                ? style.activeLinkListItem
                : style.linkListItem} to="/dashboard/products">
            <BiDish /> Productos
          </Link>
        </li>
        <li
          className={
            location.pathname === "/dashboard/products"
              ? style.activeLink
              : style.listItem
          }
        >
          <Link className={style.linkListItem} to="/">
            <BsArrowBarLeft /> Volver
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
