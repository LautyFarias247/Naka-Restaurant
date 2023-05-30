import React from 'react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions/actions';
// const data = [
//   { name: 'Enero', ingresos: 2000, gastos: 1500 },
//   { name: 'Febrero', ingresos: 2500, gastos: 1700 },
//   { name: 'Marzo', ingresos: 3000, gastos: 2000 },
//   { name: 'Abril', ingresos: 3500, gastos: 2500 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
//   { name: 'Mayo', ingresos: 4000, gastos: 3000 },
// ];
const BarChartExample = () => {
    const [data, setData] = useState()
    const categorias = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    
    useEffect(()=>{
        console.log(categorias);
        const auxCategories = [];
        categorias.forEach(category => {
            auxCategories.push({name:category, ventas: 2000})
            console.log(category);
        });
        setData(auxCategories)
    },[categorias])

  return (
    <BarChart width={1000} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventas" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartExample;
