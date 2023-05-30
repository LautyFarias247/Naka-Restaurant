import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalPrice, reduceTotalPrice, addProduct, removeProduct, removeManyProducts } from "../../redux/actions/actions";
import Swal from "sweetalert2"


const HandlerShoppingItems = ({aux, setAux, id, dish}) => {
  
  const cart = useSelector(state => state.cart)
  const item = cart.find(item => item._id === id)
  const userLogged = useSelector(state => state.user)

  
    const dispatch = useDispatch()
    const handleAddProduct = () =>{
        setAux(aux + 1);
        if(item){
            if(item.quantity === item.stock) {
              return (Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No hay mas stock',
                showConfirmButton: true,
                timer: 10000
              }))
            }}
        dispatch(addProduct(dish));
        dispatch(addTotalPrice(dish));
      }
      
      const handleRemoveProduct = () =>{
        setAux (aux + 1);
        dispatch(removeProduct(dish));
        dispatch(reduceTotalPrice(dish))
      }
    
      const handleRemoveManyProducts = () => {
        setAux (aux + 1)
        dispatch(removeManyProducts(dish))
        dispatch(addTotalPrice(dish))
      }

  
    return ( 
        <div>
            <button style={{ backgroundColor: 'aliceblue', margin: '7px', height: '27px', width: '27px', border: 'none' }} onClick={async () => {handleRemoveProduct()}
              }>&#9660;</button>
            <span>{item?.quantity ? item.quantity : 0}</span>
            <button style={{ backgroundColor: 'aliceblue',  margin: '7px', height: '27px', width: '27px', border: 'none' }} onClick={()=> {handleAddProduct()}}>&#9650;</button>
            {item?.quantity && <button style={{ backgroundColor: 'aliceblue', border: 'none', fontWeight: 'bold', height: '32px', width: '32px' }} onClick={()=>{handleRemoveManyProducts()}}>x</button>}
        </div>
    )
}
 
export default HandlerShoppingItems;