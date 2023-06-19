import React from "react";
import style from "./UserItemTable.module.css";
import { useState } from "react";
import UserOrdersModal from "../../Modals/UserOrdersModal/UserOrdersModal";
import UserModal from "../../Modals/UserModal/UserModal";

const UserItemTable = ({ user }) => {
  const [showDetail, setShowDetail] = useState(false)
	const [showOrders, setShowOrders] = useState(false)
	
	const handleShowDetail = () => {
		setShowDetail(true)
	}

	const handleShowOrders = () => {
		setShowOrders(true)
	}

	const handleCloseDetail = () => {
		setShowDetail(false)
	}
	const handleCloseOrders = () => {
		setShowOrders(false)
	}

  return (
    <>
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><button className={style.ordersButton} onClick={handleShowOrders}>Ver pedidos ({user.orders.length})</button></td>
        <td style={{textAlign:"center"}}>{user.createdAt.slice(0, 10)}</td>
        <td>
          <button className={style.detailButton} onClick={handleShowDetail}>
            Detalle
          </button>
        </td>
      </tr>
      <UserModal show={showDetail} handleCloseDetail={handleCloseDetail} user={user} />
			<UserOrdersModal show={showOrders} handleCloseOrders={handleCloseOrders} user={user}/>
    </>
  );
};

export default UserItemTable;
