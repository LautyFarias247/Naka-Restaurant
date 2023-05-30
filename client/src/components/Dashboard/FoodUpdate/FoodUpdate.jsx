import axios from "axios";
import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import style from "./FoodUpdate.module.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDishesById, updateDish } from "../../../redux/actions/actions";


const FoodUpdate = () => {
  const { id } = useParams();
  const detailFood = useSelector(state => state.detail)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDishesById(id))  
  }, []);
  const {name, price, stock} = detailFood
  return (
    <div className={style.form_container} >
      <h1>Actualiza {name}</h1>
        <Formik
        initialValues={{
            id: id,
            price: 0,
            stock: 0
        }}
        onChange={(values) =>{
            console.log(values);
        }}
        onSubmit={(values, actions) => {
            console.log(values);
            dispatch(updateDish(values))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Plato actualizado correctamente',
                showConfirmButton: false,
                timer: 5000
              })
              


        }}
        validationSchema = {Yup.object({
            stock: Yup.number(),
            price: Yup.number()
        })}
        >

        {({handleSubmit, setFieldValue}) => (
            <Form onSubmit={handleSubmit} >
                <label htmlFor="">Nuevo precio:</label>
                <Field name="price" placeholder="price" type="number"  />
                <ErrorMessage name="price"/>

                <label htmlFor="">Nuevo stock:</label>
                <Field name="stock" placeholder="stock" type="number"    />
                <ErrorMessage name="description"/>
                
                <button type="submit" >Actualizar</button>
            <Link to="/dashboard">
                <button >Volver</button>
            </Link>
            </Form>
        )}
        </Formik>
    </div>
  );
};

export default FoodUpdate;



