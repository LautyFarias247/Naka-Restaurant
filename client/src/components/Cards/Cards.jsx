import style from "./Cards.module.css"
import Card from "../Card/Card"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveCarrito } from "../../redux/actions/actions"
import { useEffect } from "react"
const Cards = ({ dishes }) => {
  const cart = useSelector(state => state.cart)
  const userLogged = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(0)
  let totalPrice = 0
  cart.forEach(item => {
    totalPrice += item.price * item.quantity
  });

  useEffect(() => {
    handleSaveCarrito(cart)
    console.log("pasoxuseeffect");
    console.log(totalPrice);
  }, [totalPrice])

  const handleSaveCarrito = (cart) => {
    console.log("holaaa")
    dispatch(saveCarrito({ cart, id: userLogged.sub || userLogged._id }))
  }


  return (
    <div className={style.Cards}>

      {dishes.map(dish => {
        return <Card
          key={dish._id}
          id={dish._id}
          name={dish.name}
          price={dish.price}
          description={dish.description}
          image={dish.image ? dish.image.url ? dish.image.url : dish.image : ""}
          category={dish.category}
          rating={dish.rating}
          comments={dish.comments}
          item={dish}
          aux={aux}
          setAux={setAux}
          _quantity={dish.quantity}
          stock={dish.stock}
        />
      }
      )}
      {/* <h2 style={{color: "white"}}>{totalPrice}</h2> */}
    </div>

  )
}

export default Cards