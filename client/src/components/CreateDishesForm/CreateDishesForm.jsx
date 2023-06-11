import { Formik, Field, Form, ErrorMessage } from "formik"
import style from './CreateDishesForm.module.css'
import { createDish } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const CreateDishesForm = () => {
    const dispatch = useDispatch()
    

    return (
    <div className={style.mainContainer}>
        <h2 className={style.title}>Crear un nuevo plato</h2>
        <Formik
        initialValues={{
            name: "",
            description: "",
            image:null,
            price: null,
            category: ""
        }}
        onChange={(values) =>{
            // console.log(values);
        }}
        onSubmit={async (values, actions) => {
            await dispatch(createDish(values))
            // console.log(values);
            // window.alert("Plato creado correctamente");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Plato creado correctamente',
                showConfirmButton: false,
                timer: 5000
              })
              


        }}
        validationSchema = {Yup.object({
            name: Yup.string().required("Nombre es requerido"),
            description: Yup.string().required("Descripcion es requerida"),
            price: Yup.number().required("Precio es requerido"),
            category: Yup.string().required("Categoria es requerida")
        })}
        >

        {({handleSubmit, setFieldValue}) => (
            <Form onSubmit={handleSubmit} onChange={()=>{}} className={style.formContainer}>
                <label htmlFor="">Nombre:</label>
                <Field name="name" className={style.controls} placeholder="Nombre" />
                <div className={style.errors}>
                <ErrorMessage name="name"  />
                </div>

                <label htmlFor="" >Descripcion:</label>
                <Field name="description" className={style.controls} placeholder="Descripcion"/>
                <div className={style.errors}>
                <ErrorMessage name="description"/>
                </div>
                
                <label htmlFor="">Precio:</label>
                <Field name="price" className={style.controls} placeholder="Precio" type="number"/>
                <div className={style.errors}>
                <ErrorMessage name="price"/>
                </div>

                <label htmlFor="">Categoria: </label>
                <Field name="category" className={style.controls} placeholder="Categoria"/>
                <div className={style.errors}>
                <ErrorMessage name="category"/>
                </div>

                <label htmlFor="image">Image:</label>
                <input type="file" accept=".png,.jpeg,.jpg" name="file" onChange={
                    (e)=>{
                        setFieldValue("image", e.target.files[0])
                        // console.log(e.target.files);
                    }
                        }/>
        
                <div className={style.errors}>
                <ErrorMessage name="image"/>
                </div>

                <button type="submit" className={style.button}>Crear!</button>
            <Link to="/dashboard">
                <button className={style.volver}>Volver</button>
            </Link>
            </Form>
        )}
        </Formik>
    </div>
    )
}

export default CreateDishesForm