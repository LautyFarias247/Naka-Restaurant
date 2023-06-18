import { useEffect, useState } from 'react';
import HandlerShoppingItems from '../HandlerShoppingItems/HandlerShoppingItems';
import style from './ShoppingItem.module.css'
import { useSelector } from 'react-redux';

const ShoppingItem = ({product, image, price, name,description, refresh, setRefresh}) => {
    

		const cart = useSelector((state) => state.cart);
  	const item = cart.find((item) => item._id === product._id);
			
			return (
				<div className={style.container}>
				<img src={image ? image.url ? image.url : image : ""} className={style.image}/>
				<div className={style.info}>
					<span className={style.name}>{name}</span>
					<span className={style.data}>{description}</span>
				</div>
				<HandlerShoppingItems product={product} refresh={refresh} setRefresh={setRefresh}/>
				<div className={style.priceInfo}>
					<span className={style.price}>$ {price.toLocaleString("en-US").replace(",", ".")},00</span>
					<span className={style.subtotal}>subtotal $ {(item.quantity * item.price).toLocaleString("en-US").replace(",", ".")},00</span>
				</div>
			</div>
    )
	
	}
	
	export default ShoppingItem;