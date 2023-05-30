import { Link } from "react-router-dom";
import style from '../Table.module.css'

const FoodItem = ({id,description, name,image,category,stock, price}) => {
    return (
        <tr style={{width:"80%"}}>
            <td>{name}</td>
            <td>{category}</td>
            <td>USD {price}</td>
            <td>{stock}</td>
            <td>{description}</td>
            <Link to={`edit/${id}`} ><button className={style.button}>Editar producto</button></Link>
        </tr>
    );
}
 
export default FoodItem;