import { useSelector } from "react-redux";
import VentasItem from "../VentasItem/VentasItem";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";
import style from '../../Table.module.css'

const VentasTable = () => {
    const orders = useSelector(state => state.adminData.orders)

    return (
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Sidebar/>
          </Col>
          <Col sm={10}>

                <table className={style.table}>
              <thead>
                <tr>
                  <th className={style.blue_text}>Usuario</th>
                  <th className={style.blue_text}>Dirección</th>
                  {/* <th>Productos</th> */}
                  <th className={style.blue_text}>Monto</th>
                  <th className={style.blue_text}>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map(order => {
                  if(order.status === "entregado"){
                    return <VentasItem
                    owner = {order.owner}
                    direccion = "Av. Corrientes 1234"
                    items = {order.items}
                    monto = {order.amount}
                    date = {order.date}
                    id = {order._id}
                    />
                  }
                })}
              </tbody>
              
            </table>
            </Col>
          </Row>
        </Container>
    );
}
 
export default VentasTable;