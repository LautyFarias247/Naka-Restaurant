import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setFltedDishes, setCategory } from "../../redux/actions/actions";
import style from "./CategoryFltr.module.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



const CategoryFltr = ({setCurrentPage}) => {

    const categories = useSelector(state => state.categories);
    const actualCategory = useSelector(state => state.actualCategory)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch();
    const [cat, setCat] = useState(null)

    const handleClick = (event) => {
        if( actualCategory === event.target.value ){
            console.log(event.target.value);
            dispatch(setCategory('all'))
            dispatch(setFltedDishes('all'))
            setCurrentPage(1)
            setCat(null)
        }else{
            dispatch(setCategory(event.target.value))
            dispatch(setFltedDishes((event.target.value)))
            console.log(categories);
            console.log(actualCategory);
            console.log("pasa x aca");
            setCurrentPage(1)
            setCat(event.target.value)
        }
    }

    return (
        <>
        <div className={style.filter}>
      </div>
        <Button variant="outline-primary" size="lg" className={style.category} onClick={handleShow}>
        Ver categorias 
        </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filtrar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {categories.map( 
                (category, i) => 
                <button style = {cat === category ? {height : '50px', width : "100%", backgroundColor: "#ffbc0d"} :{ height : '50px', width : "100%"}} onClick={handleClick} value={category} key={i} className={style.filterButton}>
                    {category}
                    
                </button> 
        )}

        </Offcanvas.Body>
      </Offcanvas>
      </>
   
    )
}

export default CategoryFltr