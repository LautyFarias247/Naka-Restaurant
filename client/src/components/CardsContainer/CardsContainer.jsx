import style from "./CardsContainer.module.css"
import Card from "../Card/Card"
import { useState } from "react"
import { useSelector } from "react-redux"

const Cards = () => {
  const cart = useSelector(state => state.cart)
	const allDishes = useSelector(state => state.allDishes)
	const displayedDishes = useSelector(state => state.displayedDishes)

	let dishes = displayedDishes.length > 0 ? displayedDishes : allDishes
  
	const [aux, setAux] = useState(0)
  let totalPrice = 0
  cart?.forEach(item => {
    totalPrice += item.price * item.quantity
  });


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