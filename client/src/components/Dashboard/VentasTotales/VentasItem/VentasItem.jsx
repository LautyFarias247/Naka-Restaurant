import { Link } from "react-router-dom";

const VentasItem = ({owner, direccion, items, monto, date}) => {
    return (
        <tr >
            <td>{owner}</td>
            <td>{direccion}</td>
            {/* <td><Link>Ver detalle de compra</Link></td> */}
            <td>$ {monto}</td>
            <td>{date}</td>
        </tr>
    );
}
export default VentasItem;