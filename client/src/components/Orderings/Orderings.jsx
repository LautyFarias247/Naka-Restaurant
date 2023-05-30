import { useDispatch } from "react-redux"
import { setOrderings } from "../../redux/actions/actions"
import style from "./Orderings.module.css"

const Orderings = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch()
    const handleSort = (e) =>{
        dispatch(setOrderings(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordered by ${e.target.value}`)
    }
    return (
        <div >
        <span className={style.order}>Ordenar por:</span>
        <select className={style.orderSelect} onChange={e=> handleSort(e)}>
            <option value="any">Por defecto</option>
            <option value="Ascendent price">Precio ascendente</option>
            <option value="Descendent price">Precio descendente</option>
        </select>
        </div>
        
    )
}

export default Orderings