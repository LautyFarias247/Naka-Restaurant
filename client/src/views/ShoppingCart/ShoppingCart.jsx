import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./ShoppingCart.module.css";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import ShoppingCheckout from "../../components/ShoppingCheckout/ShoppingCheckout";
import ShoppingDeleteButton from "../../components/ShoppingDeleteButton.jsx/ShoppingDeleteButton";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
	const [refresh, setRefresh] = useState(0)
  // if(cart.length > 0){
  //   return (
  //     <div style={{height: "90%"}}>

  //   <div className={style.cartContainer}>
  //     <div>
  //       {cart.map( item => {
  //         return <ShoppingItem
  //         key={item?._id}
  //         _id={item?._id}
  //         name={item?.name}
  //         price={item?.price}
  //         description={item.description}
  //         image={item?.image?.url? item.image?.url : item.image }
  //         category={item?.category}
  //         quantity={item?.quantity}
  //         item={item}
  //         stock={item?.stock}
  //         aux={aux}
  //         setAux={setAux}
  //         />
  //       })}
  //     <ShoppingDeleteButton aux={aux} setAux={setAux} />
  //     </div>
  //     <ShoppingCheckout className={style.checkout}/>
  //   </div>
  //   </div>
  // )
  // } else {
		useEffect(()=>{
			console.log(cart.length);
			console.log("hol");
		},[])
		
		
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
