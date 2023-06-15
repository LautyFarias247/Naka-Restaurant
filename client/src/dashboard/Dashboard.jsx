import React from "react";
import style from "./Dashboard.module.css";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
const Dashboard = () => {
  const location = useLocation();

  return (
    <main className={style.background}>
      <div className={style.container}>
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
              <Link className={location.pathname === "/dashboard"
                  ? style.activeLinkListItem
                  : style.linkListItem} to="/dashboard">
                <MdDashboard /> <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                location.pathname === "/dashboard/orders"
                  ? style.activeLink
                  : style.listItem
              }
            >
              <Link className={style.linkListItem} to="/dashboard/orders">
                <LuClipboardList /> Pedidos
              </Link>
            </li>
            <li
              className={
                location.pathname === "/dashboard/users"
                  ? style.activeLink
                  : style.listItem
              }
            >
              <Link className={style.linkListItem} to="/dashboard/users">
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
              <Link className={style.linkListItem} to="/dashboard/products">
                <BiDish /> Productos
              </Link>
            </li>
          </ul>
        </aside>
        <section className={style.mainSection}>
          <h1>Dashboard</h1>
          <div>
            <div>Productos</div>
            <div>Ventas</div>
            <div>Ingresos</div>
          </div>
          <div>
            <h3>Pedidos Finalizados</h3>
          </div>
        </section>
        <aside className={style.newOrders}>
          <h3>Nuevos pedidos</h3>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
