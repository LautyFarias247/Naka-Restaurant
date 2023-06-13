
import { useDispatch, useSelector } from "react-redux";
import { removeAllProducts } from "../../redux/actions/actions";
import style from "./ShoppingDeleteButton.module.css"

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()
    const usuarioActual = useSelector(state => state.user)
    const cart = []
    const id = usuarioActual.sub || usuarioActual._id

    const handleDeleteCart = () => {
        setAux(aux + 1)
        dispatch(removeAllProducts())
    }

    return (  
        <button className={style.buttonClean} onClick={handleDeleteCart}>Vaciar carrito</button>
    );
}
 
export default ShoppingDeleteButton;