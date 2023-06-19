import React from "react";
import style from "./Dashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { BiSushi, BiMoneyWithdraw } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllOrders,
  getAllUsers,
  updateOrderStatus,
} from "../redux/actions/actions";
import Swal from "sweetalert2";
import DashboardSidebar from "../dashboardComponents/DashboardSidebar/DashboardSidebar";
import { protectRoute } from "../helpers/protectRoute";
const Dashboard = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate()
  const admin = useSelector((state) => state.user);
  const orders = useSelector((state) => state.adminData.orders);
  const users = useSelector((state) => state.adminData.users);
  const dishes = useSelector((state) => state.allDishes);

  let revenue = 0;
  orders?.forEach((o) => {
    const status = o.status;
    if (status === "Entregado") {
      revenue += o.amount;
    }
  });

  useEffect(() => {
    const isAdmin = protectRoute(admin.admin);
		if (isAdmin) {
			dispatch(getAllUsers());
			dispatch(getAllOrders());

		} else {
			navigate("/")
		}
  }, [admin]);

  const handleButtonClick = async (event) => {
    console.log(event.target);

    const value = event.target.innerText;
    const _id = event.target.dataset._id;
    const response = await dispatch(updateOrderStatus(_id, value));
    if (response.status === 200) {
      dispatch(getAllOrders())
      Swal.close();
    }
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
        const buttons = document.querySelectorAll(
          `.${style.buttonContainer} button`
        ); // Utiliza la clase del CSS Module
        buttons?.forEach((button) => {
          button.addEventListener("click", handleButtonClick);
        });
      },
    });
  };

  return (
    <main className={style.background}>
      <div className={style.container}>
        <DashboardSidebar />
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
                <span>+ {dishes.length} nuevos platos</span>
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
            <h3 className={style.completedOrdersTitle}>Pedidos Finalizados</h3>
            <section className={style.tableContainer}>
              {/* <table className={style.completedOrders}>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>ID del pedido</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody className={style.tableContainer}>
                  {orders?.map((order) => {
                    const status = order.status;
                    if (status === "Entregado" || status === "Cancelado") {
                      return (
                        <tr key={order._id} className={style.item}>
                          <td>{order.owner}</td>
                          <td>#{order._id.slice(0, 15)}</td>
                          <td>{order.createdAt.slice(0, 10)}</td>
                          <td>
                            <button
                              onClick={() => {
                                handleOrderStatus(order._id);
                              }}
                              className={style.handleStatusButton}
                            >
                              {order.status}
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table> */}
							<table className={style.completedOrders}>
						<thead>
							<tr>

							<th>Cliente</th>
							<th>ID del pedido</th>
							<th>Fecha</th>
				
							<th>Estado</th>
					
							</tr>
						</thead>
						<tbody>
						{orders?.map((order) => {
                    const status = order.status;
                    if (status === "Entregado" || status === "Cancelado") {
                      return (
                        <tr key={order._id} className={style.item}>
                          <td>{order.owner}</td>
                          <td>#{order._id.slice(0, 15)}</td>
                          <td>{order.createdAt.slice(0, 10)}</td>
													<td>
                            <button
                              onClick={() => {
                                handleOrderStatus(order._id);
                              }}
                              className={style.handleStatusButton}
                            >
                              {order.status}
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
						</tbody>
					</table>
            </section>
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
              {orders?.map((order) => {
                if (
                  order.status === "En camino" ||
                  order.status === "En preparación"
                ) {
                  return (
                    <tr key={order._id}>
                      <td>
                        {order.address.street} {order.address.number}
                      </td>
                      <td>$ {order.amount}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleOrderStatus(order._id);
                          }}
                          className={style.handleStatusButton}
                        >
                          {order.status}
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
