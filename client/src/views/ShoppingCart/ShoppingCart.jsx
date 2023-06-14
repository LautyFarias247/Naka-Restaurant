import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./ShoppingCart.module.css";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import ShoppingCheckout from "../../components/ShoppingCheckout/ShoppingCheckout";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
	const [refresh, setRefresh] = useState(0)
		
		
		if(cart.length === 0){
	
			return (
				<main className={style.empty}>
					<h1 className={style.emptyTitle}>Aún no hay productos en tu canasta</h1>
					<Link to="/menu">
						<button className={style.emptyButton}>Agregar productos</button>
					</Link>
				</main>
			)
		}else {

  return (
		<main className={style.container}>
			<div>
				{cart.map(product => {
					return <ShoppingItem
					key={product._id}
					product={product}
					image={product.image}
					name={product.name}
					description={product.description}
					price={product.price}
					quantity={product.quantity}
					refresh={refresh}
					setRefresh={setRefresh}
					/>
				})}
			</div>
			<ShoppingCheckout/>
		</main>
  );
			}
  // }
};
