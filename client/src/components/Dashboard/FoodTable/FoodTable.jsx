import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodContainer from "../FoodContainer/FoodContainer";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import style from '../Table.module.css'
const FoodTable = () => {
    const foods = useSelector(state => state.allDishes)

    return (
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <Sidebar/>
                </Col>
                <Col sm={10}>
                <div className={style.container}>
                    
                    <h1><Link to ="create"><button className={style.button}>Agregar plato</button></Link></h1>
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <FoodContainer foods={foods}/>
                    </table>
                </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default FoodTable;