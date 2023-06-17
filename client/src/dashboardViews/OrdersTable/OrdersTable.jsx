import React, { useEffect } from "react";
import style from "./OrdersTable.module.css";
import DashboardSidebar from "../../dashboardComponents/DashboardSidebar/DashboardSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/actions";
const OrdersTable = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <main className={style.background}>
      <div className={style.container}>
        <DashboardSidebar />
        <section className={style.mainSection}>
					<table className={style.allOrders}>
						<thead>
							<tr>

							<th>Cliente</th>
							<th>ID del pedido</th>
							<th>Fecha</th>
							<th>Pago total</th>
							<th>Estado</th>
							<th></th>
							</tr>
						</thead>
						<tbody>
							{orders?.map((o)=>{
								return <tr key={o._id}>
									<td>{o.owner}</td>
									<td>#{o._id.slice(0,15)}</td>
									<td>{o.createdAt.slice(0,10)}</td>
									<td>$ {o.amount.toLocaleString("en-US")
                    .replace(",", ".")},00</td>
									<td>{o.status}</td>
									<td><button className={style.detailButton}>Detalle</button></td>
								</tr>
							})}
						</tbody>
					</table>
				</section>
      </div>
    </main>
  );
};

export default OrdersTable;
