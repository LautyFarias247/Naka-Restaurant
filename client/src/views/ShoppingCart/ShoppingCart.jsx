import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from "./ShoppingCart.module.css"
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem'
import ShoppingCheckout from '../../components/ShoppingCheckout/ShoppingCheckout'
import ShoppingDeleteButton from '../../components/ShoppingDeleteButton.jsx/ShoppingDeleteButton'
import { Link } from 'react-router-dom'
import { saveCarrito } from '../../redux/actions/actions'

export const ShoppingCart = () => {
  const dispatch = useDispatch()
  const userLogged = useSelector(state => state.user )
  const cart = useSelector(state => state.cart)
  const carrito = useSelector(state => state.cart)
  const [aux, setAux] = useState("")

  let totalPrice = 0
  cart.forEach(item => {
    totalPrice += item.price * item.quantity
  });

  useEffect(() => {
    handleSaveCarrito(cart)
  }, [totalPrice])

  const handleSaveCarrito = (cart) => {
    dispatch(saveCarrito({ cart, id: userLogged.sub || userLogged._id }))
  }
  useEffect(()=>{
    console.log(carrito);
  },[carrito])

  if(cart[0]){
    return (
      <div style={{height: "90%"}}>

    <div className={style.cartContainer}>
      <div>
        {carrito.map( item => {
          return <ShoppingItem
          key={item._id}
          _id={item._id}  
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image?.url? item.image?.url : item.image }
          category={item.category}
          quantity={item.quantity}
          item={item}
          stock={item.stock}
          aux={aux}
          setAux={setAux}
          />
        })}
      <ShoppingDeleteButton aux={aux} setAux={setAux} />
      </div>
      <ShoppingCheckout className={style.checkout}/>
    </div>
    </div>
  ) 
  } else {
    return (
      <div className={style.containerReturn}>
        <h2>No hay nada en el carrito</h2>
        <h3>Regresar para sumar productos!</h3>
        <Link to="/menu"><button className={style.buttonReturn}>Ir al menú</button></Link>
      </div>
    )
  }
} 
  

