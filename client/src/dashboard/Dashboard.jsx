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
import { getAllOrders, getAllUsers, updateOrderStatus } from "../redux/actions/actions";
import Swal from "sweetalert2";
const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const orders = useSelector((state) => state.adminData.orders);
  const users = useSelector((state) => state.adminData.users);
  const dishes = useSelector((state) => state.allDishes);

  let revenue = 0;
  orders?.forEach((o) => {
    revenue += o.amount;
  });

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, []);

	const handleButtonClick = (event) => {
		console.log(event.target);
		
		const value = event.target.innerText;
		const _id = event.target.dataset._id;
		dispatch(updateOrderStatus(_id, value))
		Swal.close(); // Cierra la alerta
	};
  const handleOrderStatus = (_id) => {
		
    Swal.fire({
      title: "Cambiar estado del pedido",
      html: `
        <p>Seleccione una opción:</p>
				<div class="${style.buttonContainer}">
        <button class="${style.botonEnPreparacion}" data-_id="${_id}">En preparación</button>
        <button class="${style.botonEnCamino}" data-_id="${_id}">En camino</button>
        <button class="${style.botonEntregado}" data-_id="${_id}">Entregado</button>
        <button class="${style.botonCancelado}" data-_id="${_id}">Cancelado</button>
				</div
				`,
      showConfirmButton: false,
      showCancelButton: false,
			didOpen: () => {
        const buttons = document.querySelectorAll(`.${style.buttonContainer} button`); // Utiliza la clase del CSS Module
        buttons.forEach((button) => {
          button.addEventListener('click', handleButtonClick);
        });
      }
    })
  };


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
            <Link to="/dashboard/products" className={style.card}>
              <div className={style.cardDescription}>
                <span>{dishes.length}</span>
                <span>Platos</span>
              </div>
              <div className={style.cardInfo}>
                <BiSushi className={style.cardIcon} />
                <span>+ {12} nuevos platos</span>
                <span>Este mes</span>
              </div>
            </Link>
            <Link to="/dashboard/users" className={style.card}>
              <div className={style.cardDescription}>
                <span>{users?.length}</span>
                <span>Usuarios</span>
              </div>
              <div className={style.cardInfo}>
                <FiUsers className={style.cardIcon} />
                <span>+ {users?.length} nuevos usuarios</span>
                <span>Este mes</span>
              </div>
            </Link>
            <Link className={style.card} to="/dashboard/orders">
              <div className={style.cardDescription}>
                <span>$ {revenue}</span>
                <span>Ingresos</span>
              </div>
              <div className={style.cardInfo}>
                <BiMoneyWithdraw className={style.cardIcon} />
                <span>Este mes</span>
              </div>
            </Link>
          </div>
          <div>
            <h3>Pedidos Finalizados</h3>
						<div>
							<table>
								<thead>
									<tr>
										<th></th>
										<th></th>
										<th></th>
									</tr>
								</thead>
							</table>
						</div>
          </div>
        </section>
        <aside className={style.newOrders}>
          <h3>Pedidos activos</h3>
          <table className={style.orderTable}>
            <thead>
              <tr>
                <th>Dirección</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order._id}>
                  <td>
                    {order.address.street} {order.address.number}
                  </td>
                  <td>$ {order.amount}</td>
                  <td>
                    <button onClick={()=>{handleOrderStatus(order._id)}} className={style.handleStatusButton}>{order.status}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
