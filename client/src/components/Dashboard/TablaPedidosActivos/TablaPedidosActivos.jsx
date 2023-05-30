import PedidoActivo from "./PedidoActivo";
import style from '../Table.module.css'

const TablaPedidosActivos = ({pedidos}) => {
    return (<table className={style.table}>
        <thead>
            <tr style={{fontSize:"11px"}}>
                <th>Dirección</th>
                <th>Monto</th>
                <th>Marcar entregado</th>
            </tr>
        </thead>
        <tbody>
            {pedidos?.map(pedido => {
                if(pedido.status === "pending"){
                    return <PedidoActivo
                    direccion = "Av. Corrientes 1234"
                    monto = {pedido.amount}
                    id = {pedido._id}
                    />
                }
            })}
        </tbody>
            </table>
    );
}
 
export default TablaPedidosActivos;