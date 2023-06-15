import React from 'react'
import style from './OrdersContainer.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../../redux/actions/actions'
import OrderCard from '../OrderCard/OrderCard'

const OrdersContainer = () => {
	const dispatch = useDispatch()
	const orders = useSelector(state=>state.orders)
	const user = useSelector(state=>state.user)
	useEffect(()=>{
		dispatch(getUserOrders(user._id))
	},[])
	return (
		<div className={style.ordersContainer}>
			{orders?.map((o)=>{
				return <OrderCard
					_id={o._id}
					key={o._id}
					items={o.items}
					amount={o.amount}
					address={o.address}
					status={o.status}
					date={o.createdAt}
				/>
			})}
		</div>
	)
}

export default OrdersContainer