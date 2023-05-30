import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDishesById } from "../../../redux/actions/actions";
import HandlerShoppingItems from "../../HandlerShoppingItems/HandlerShoppingItems";
import style from './ModelDetail.module.css'

const ModelDetail = (props) => {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
    const dispatch = useDispatch()
    const detailFood = useSelector(state => state.detail)
    const [aux, setAux] = useState("")
    useEffect(() => {
        dispatch(getDishesById(props.id))
    }, [])
    return (
        <div className={style.container}>
            <div className="modal show fade " style={modelStyle}>
                <div className="modal-dialog modal-fullscreen-md-down">
                    <div className="modal-content p-4">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">{detailFood.name}</h5>
                            <button type="button" className="btn-close" onClick={props.hide}></button>
                        </div>

                        <div className="modal-body">


                            <img src={detailFood.image?.url ? detailFood.image?.url : detailFood.image} alt={detailFood.name} className="img-fluid" />
                            <div class="row align-items-center p-3">
                                <div class="col ">
                                    <strong> Categoria : </strong>{detailFood.category}
                                </div>
                                <div class="col">
                                    <strong> Rating: </strong>{detailFood.rating}
                                </div>
                                <div class="col">
                                    <strong> Stock: </strong>{detailFood.stock}
                                </div>
                            </div>
                            <p className="p-1 m-2 text-white bg-warning"><strong>Precio : </strong>${detailFood.price} USD</p>
                            <p className="p-1"><strong>Descripcion:</strong> {detailFood.description}</p>
                            <p className="p-1"><strong> Comentarios: </strong>{detailFood.comments}</p>


                        </div>
                        <div className="modal-footer">
                            <div>
                                <HandlerShoppingItems dish={detailFood} aux={aux} setAux={setAux} id={props.id} />
                            </div>
                            <div>
                                <Link to={'/cart'}>
                                    <button className={style.button1} type="button" class="btn btn-outline-warning px-5 ms-1">Ver Carrito</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ModelDetail;