import React from 'react'
import style from './MyOrders.module.css'
import UserSidebar from '../../layout/UserSidebar/UserSidebar'

const MyOrders = () => {
	return (
		<main className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}>Panel de usuario - Mis pedidos</h2>
      </div>
      <div className={style.DataContainer}>
			<UserSidebar/>
			{}
      </div>
    </main>
	)
}

export default MyOrders