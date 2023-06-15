import React from "react";
import { useState } from "react";
import style from "./Dashboard.module.css";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { BiDish, BiSushi, BiMoneyWithdraw } from "react-icons/bi";
import { GiBuyCard } from "react-icons/gi";
import { BsArrowBarLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders, getAllUsers } from "../redux/actions/actions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
	
  const orders = useSelector((state) => state.adminData.orders);
  const users = useSelector((state) => state.adminData.users);
	
	let revenue = 0
	orders?.forEach(o => {
		revenue += o.amount
	});

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, []);
	
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
        <section className={style.mainSection}>
          <h1 className={style.dashboardTitle}>Dashboard</h1>
          <div className={style.cardsContainer}>
            <div className={style.card}>
              <div>
                <BiSushi />
                <span>Productos</span>
              </div>
              <span>12</span>
            </div>
            <div className={style.card}>
              <div>
                <FiUsers />
                <span>Usuarios</span>
              </div>
              <span>{users?.length}</span>
            </div>
            <div className={style.card}>
              <div>
                <BiMoneyWithdraw />
                <span>Ingresos</span>
              </div>
              <span>$ {revenue}</span>
            </div>
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
