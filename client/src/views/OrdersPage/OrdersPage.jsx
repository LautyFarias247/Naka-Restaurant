import React from 'react'
import style from './OrdersPage.module.css'
import UserSidebar from '../../layout/UserSidebar/UserSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserOrders } from '../../redux/actions/actions'
import OrdersContainer from '../../components/OrdersContainer/OrdersContainer'

const OrdersPage = () => {
	return (
		<main className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}>Panel de usuario - Mis pedidos</h2>
      </div>
      <div className={style.DataContainer}>
			<UserSidebar/>
			<OrdersContainer/>
      </div>
    </main>
	)
}

export default OrdersPage