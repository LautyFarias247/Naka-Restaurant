import { useEffect } from 'react';
import HandlerShoppingItems from '../HandlerShoppingItems/HandlerShoppingItems';
import style from './ShoppingItem.module.css'
import Table from 'react-bootstrap/Table'

const ShoppingItem = ({_id, image, price, name, item, aux, setAux}) => {
    useEffect(()=>{
        setAux(aux +1 )
    },[])

    return (
        <Table striped bordered responsive>
        <thead>
         <tr className={style.title}>
           <th>Producto</th>
           <th>Precio</th>
           <th>Imagen</th>
         </tr>
        </thead>
        <tbody>
        <tr>
           <td width="20%" max-width="0.20rem">{name}</td>
           <td>${price}</td>
           <td><img src={image} alt="" className={style.image} /></td>
           <td><HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={_id}/></td>
        </tr>
        </tbody>

       </Table>
    )
}
 
export default ShoppingItem;