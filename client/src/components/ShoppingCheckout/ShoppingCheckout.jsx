import { createPayment } from '../../redux/actions/actions';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Swal from "sweetalert2"
import { saveCarrito } from '../../redux/actions/actions';
import style from './ShoppingCheckout.module.css'

const ShoppingCheckout = () => {
    const cart = useSelector(state => state.cart)
    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += (item.price * item.quantity)
    });
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const userLogged = useSelector(state => state.user)

    useEffect(()=>{
        handleSaveCarrito(cart)
        console.log("pasoxuseeffect");
        console.log(totalPrice);
      },[totalPrice])
      
      const handleSaveCarrito = (cart) => {
                console.log(cart)
                dispatch(saveCarrito({cart, id: userLogged.sub || userLogged._id}))
           
            }

    return (

        <div className={style.title}>
            <h2>Resumen compra</h2>
        {cart.map(item => {
            return(
                <div key={item._id}>
                    <p>{item.name} x {item.quantity}  ${item.price * item.quantity}</p>
                    <p className={style.stock}>Stock: {item.stock}</p>
                </div>
            )
        })}
        <h3>TOTAL: ${totalPrice}</h3>
        <button className={style.buttonPay} onClick={async()=>{
            if(user){
                const status = user.is_active || user.isActive
                console.log(status);
                if(!status){
                    return (Swal.fire({
                        title: '<strong>Tu cuenta esta inhabilitada para realizar pedidos</strong>',
                        icon: 'warning',
                        showCloseButton: true,
                        focusConfirm: false,
                        confirmButtonText:
                          '<Link to="/account/login">Aceptar</Link>',
                        // '<a href="//sweetalert2.github.io">links</a> ' +
                        // 'and other HTML tags'
                      }))
                }
            }
            if(user.name){
                dispatch(createPayment({cart, email: userLogged.email, id: userLogged.sub || userLogged._id }))
            } else {
                return (Swal.fire({
                    title: '<strong>Debes loguearte para confirmar el pedido</strong>',
                    icon: 'info',
                    html: 'Inicia sesion o registrate',
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<Link to="/account/login">Aceptar</Link>',
                    // '<a href="//sweetalert2.github.io">links</a> ' +
                    // 'and other HTML tags'
                  }))
            }
        }}>
        Pagar
        </button>
        </div>
    );
}
 
export default ShoppingCheckout;