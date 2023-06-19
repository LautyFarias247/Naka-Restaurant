import React, { useEffect } from "react";
import style from "./OrdersTable.module.css";
import DashboardSidebar from "../../dashboardComponents/DashboardSidebar/DashboardSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/actions";
import OrderItemTable from '../../dashboardComponents/TableItems/OrderItemTable/OrderItemTable'
import { useNavigate } from "react-router-dom";
import { protectRoute } from "../../helpers/protectRoute";
const OrdersTable = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate()
  const orders = useSelector((state) => state.adminData.orders);
  const admin = useSelector((state) => state.user);

	
	
	
  useEffect(() => {

		const isAdmin = protectRoute(admin.admin);
    if(isAdmin){
			dispatch(getAllOrders());
			return
		}
		navigate("/")
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
								return <OrderItemTable o={o}/>
							})}
						</tbody>
					</table>
				</section>
      </div>
    </main>
		
  );
};

export default OrdersTable;
